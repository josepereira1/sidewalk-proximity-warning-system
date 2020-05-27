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

r = redis.Redis(host='redis-spws', charset="utf-8", decode_responses=True)

# espera que o rabbitMQ inicie, tenta estabelecer conexão de 5 em 5 segundos
while True:
    try:
        time.sleep(TIME) 
        receiver = Receiver('rabbitmq-closest-crosswalk')
        break
    except:
        print("connection to RabbitMQ failed, trying again...")

def callback(ch, method, properties, body):     
    output = json.loads(body) # python object
    
    r.set(output['user_id'], output['crosswalk_id'])

    crosswalk = "crud-crosswalk-counters"
    pedestrian = "crud-pedestrian"
    vehicle = "crud-vehicle"

    requests.post("http://" + crosswalk + ":5004/updateInfo", json = {"user_id": str(output['user_id']), "crosswalk_id": output['crosswalk_id']})

    if output['user_id'][0] == 'p':
        requests.post("http://" + pedestrian + ":5000/updateLocation", json = {"id": output['user_id'], "latitude": output['latitude'], "longitude": output['longitude'], "elevation": output['elevation']})
    if(output['user_id'][0] == 'v'):
        requests.post("http://" + vehicle +":5001/updateLocation", json = {"id": output['user_id'], "latitude": output['latitude'], "longitude": output['longitude'], "elevation": output['elevation']})



    # TODO criar Thread para incrementar counter no micro-serviço crosswalk-counters
    # TODO criar Thread para adicionar o vehicle ou pedestre à passadeira no respetivo micro-serviço crud
    # TODO criar Thread e enviar atualizar a localização do vehicle ou pedestre no respetivo micro-serviço crud

# incia a escuta na fila onde será colocado o output do micro-serviço do closest-crosswalk
thread = Thread( target = receiver.setQueue, args = ('output', callback) ) 
thread.start()

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/populate", methods=['GET','POST'])
def populate():
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/createSchema")
    for i in range(5):
        response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": str(i)})
        response = requests.post("http://" + url + ":5002/createCrosswalk", json={"id": str(i), "latitude": random.uniform(0, 25), "longitude": random.uniform(0, 25), "elevation": random.uniform(0, 25)})
    return "database populated"

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
            notification = r.get(id)
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

@app.route("/readAllCrosswalks", methods=['GET'])
def readAllCrosswalks():
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/readAllCrosswalks")
    return response.text

@app.route("/monitoringCrosswalk", methods=['POST'])
def monitoringCrosswalk():
    if('crosswalk_id' in request.json):
        url = "crud-crosswalk-counters"
        response = requests.post("http://" + url + ":5004/getInfo", json = request.json)

        dict = json.loads(response.text)

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

        url = "crud-vehicle"

        vehicles = requests.post("http://" + url + ":5001/getVehiclesByIds", json = {'users_ids': vehicles_ids})
        
        #   garantir que existe, caso não exista dá none
        if(pedestrians):
            pedestrians = json.loads(pedestrians.text)
        else:
            pedestrians = []
        if(vehicles):
            vehicles = json.loads(vehicles.text)
        else:
            vehicles = []

        users = pedestrians + vehicles

        url = "calculate-distance-in-crosswalk"

        response = requests.post("http://" + url + ":5006/calculateDistance", json = {'crosswalkId': request.json['crosswalk_id'], 'users': users})

        res = '{"npedestrians":' + str(dict['npedestrians']) + ',"nvehicles":' + str(dict['nvehicles']) + ',"distances":' + response.text + ',"users":' + str(users) + '}'

        return res
    else: return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5007", debug=True)
