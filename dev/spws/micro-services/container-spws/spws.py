from flask import *
from flask_cors import CORS
import json
from sender import Sender
from receiver import Receiver
from threading import Thread
import time
import redis
import requests
import random

# intervalo de tempo para tentar conectar aos serviços externos
TIME = 5

r = redis.StrictRedis(host='redis-spws', charset="utf-8", decode_responses=True)

# espera que o rabbitMQ inicie, tenta estabelecer conexão de 5 em 5 segundos
while True:
    try:
        time.sleep(TIME) 
        receiver = Receiver('rabbitmq-closest-crosswalk')
        break
    except:
        print("connection to RabbitMQ failed, trying again...")


def work(output):
    global r

    crosswalk_counter_url = "crud-crosswalk-counters"
    pedestrian_url = "crud-pedestrian"
    vehicle_url = "crud-vehicle"
    traffic_light = "read-traffic-light"
    
    #   incrementa um dos counters
    #   adiciona o user à passadeira
    response = requests.post("http://" + crosswalk_counter_url + ":5004/updateInfo", json = {"user_id": output['user_id'], "crosswalk_id": output['crosswalk_id']})

    #   em caso de perigo, o response tem "yes", caso contrário "no"
    if(response.text == "yes"):
        # TTL de 5 segundos
        response = requests.post("http://" + traffic_light + ":5003/getStateLight", json = {"crosswalk_id": output['crosswalk_id']})
        f = open("traffic_light", "a")
        f.write(response.text)
        f.close()
        r.set(output['user_id'], '{"crosswalk_id":' + str(output['crosswalk_id']) + ',"traffic_light":' + str(response.text) + '}', ex=5) # buffer de notificações

    #   atualiza as coordenadas do user
    if output['user_id'][0] == 'p':
        requests.post("http://" + pedestrian_url + ":5000/updateLocation", json = {"id": output['user_id'], "latitude": output['latitude'], "longitude": output['longitude'], "elevation": output['elevation']})
    if(output['user_id'][0] == 'v'):
        requests.post("http://" + vehicle_url +":5001/updateLocation", json = {"id": output['user_id'], "latitude": output['latitude'], "longitude": output['longitude'], "elevation": output['elevation']})

        
def callback(ch, method, properties, body):     
    output = json.loads(body) # python object
    work(output) # a equipa do RabbitMQ recomendar meter isto a correr numa Thread, não sei pq não consegui ainda por a correr na Thread

# incia a escuta na fila onde será colocado o output do micro-serviço do closest-crosswalk
thread = Thread( target = receiver.setQueue, args = ('output', callback) ) 
thread.start()


# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods


# adiciona a passadeira usada para o simulador e faz a migração dos dados para os outros micro-serviços
@app.route("/populate", methods=['GET','POST'])
def populate():
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/createSchema")
    response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": "0"})
    response = requests.post("http://" + url + ":5002/createCrosswalk", json={"id": "0", "latitude": 41.537070, "longitude": -8.396851, "elevation": 0})
    # evoca a migração dos dados para os micro-serviços que os usam
    url = "calculate-distance-in-crosswalk"
    response = requests.get("http://" + url + ":5006/initRedis")
    url = "closest-crosswalk"
    response = requests.get("http://" + url + ":5005/initRedis")
    url = "read-traffic-light"
    response = requests.get("http://" + url + ":5003/initRedis")
    return "database populated and migrated to other micro-services"


@app.route("/closestCrosswalk", methods=['POST'])
def closestCrosswalk():
    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = str(request.json.get('id'))
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        json =  '{ "id":"' + id + '", "latitude":' + str(latitude) + ', "longitude":' + str(longitude) + ', "elevation":' + str(elevation) + '}'

        # envia o json para o micro-serviço closest-crosswalk através do rabbitMQ
        sender = Sender('rabbitmq-closest-crosswalk')
        sender.setQueue('input')  
        sender.send(json)
        sender.close()

        if r.exists(id): 
            notification = r.get(id) # buffer de notificações
            r.delete(id)
            return notification
        else: return "no notifications"
    else: return "ko"


# PARA DEBUGGING
@app.route("/getClosestCrosswalks", methods=['GET'])
def getClosestCrosswalks():
    keys = r.keys()
    if not keys: 
        return "[]"
    else:
        res = "["
        for key in keys:
            crosswalk_id = r.get(key)
            res += '{"user_id":' + key + ", " + '"closest_crosswalk_id":' + crosswalk_id + "}, "
            res = res[:-2]
        res += "]"
        return res


# controller usado no monitoring
@app.route("/readAllCrosswalks", methods=['GET'])
def readAllCrosswalks():
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/readAllCrosswalks")
    return response.text


# controller usado no monitoring
@app.route("/monitoringCrosswalk", methods=['POST'])
def monitoringCrosswalk():
    if 'crosswalk_id' in request.json:
        
        # obtém o nº de pedestres, nº de veículos e users na crosswalk 
        url = "crud-crosswalk-counters"
        response = requests.post("http://" + url + ":5004/getInfo", json = request.json)
            
        dict = json.loads(response.text)

        # caso, neste momento, não exista ninguém na crosswalk
        if (len(dict['users_ids']) == 0):
            return '{"npedestrians":' + str(dict['npedestrians']) + ',"nvehicles":' + str(dict['nvehicles']) + ',"distances": [] ,"users":[]}'

        # separa a lista de users_ids para ser usadas individualmente nos micro-serviços
        pedestrians_ids = []
        vehicles_ids = []
        
        for user_id in dict['users_ids']:
            if user_id[0] == 'p':
                pedestrians_ids.append(user_id)
            elif user_id[0] == 'v':
                vehicles_ids.append(user_id)
            else: return "ko"                

        url = "crud-pedestrian"
        pedestrians = requests.post("http://" + url + ":5000/getPedestriansByIds", json = {'users_ids': pedestrians_ids})
        pedestrians = json.loads(pedestrians.text)

        url = "crud-vehicle"
        vehicles = requests.post("http://" + url + ":5001/getVehiclesByIds", json = {'users_ids': vehicles_ids})
        vehicles = json.loads(vehicles.text)

        # obtém as distâncias dos users à crosswalk
        url = "calculate-distance-in-crosswalk"
        users = pedestrians + vehicles
        response = requests.post("http://" + url + ":5006/calculateDistance", json = {'crosswalkId': request.json['crosswalk_id'], 'users': users})
        users = response.text # json string

        return '{"npedestrians": ' + str(dict['npedestrians']) + ', "nvehicles": ' + str(dict['nvehicles']) + ', "users": ' + users + '}'

    else: return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5007", debug=True)
