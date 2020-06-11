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

#   esta definição é responsável por receber o output do ClosestCrosswalk e efetuar as atualizações de dados necessárias nos micro serviços
#   "crud-crosswalk-counters", "crud-pedestrian", "crud-vehicle" e "read-traffic-light"
def work(output):
    global r

    #   DNS dos micro serviços
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
        r.set(output['user_id'], '{"crosswalk_id":' + str(output['crosswalk_id']) + ',"traffic_light":' + str(response.text) + '}', ex=5) # buffer de notificações

    #   atualiza as coordenadas do user
    if output['user_id'][0] == 'p':
        requests.post("http://" + pedestrian_url + ":5000/updateLocation", json = {"id": output['user_id'], "latitude": output['latitude'], "longitude": output['longitude'], "elevation": output['elevation'], "distance": output['distance']})
    if(output['user_id'][0] == 'v'):
        requests.post("http://" + vehicle_url +":5001/updateLocation", json = {"id": output['user_id'], "latitude": output['latitude'], "longitude": output['longitude'], "elevation": output['elevation'], "distance": output['distance']})


def callback(ch, method, properties, body):     
    output = json.loads(body) # python object
    work(output)

# incia a escuta na fila onde será colocado o output do micro-serviço do closest-crosswalk
thread = Thread( target = receiver.setQueue, args = ('output', callback) ) 
thread.start()


# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods


# esta definição é responsável por popular a base de dados, com 4 exemplos reais de passadeiras, e depois outros casos random, só para testar a carga
@app.route("/populate", methods=['GET','POST'])
def populate():
    #   DNS dos micro serviços
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/createSchema")

    # população de crosswalks reais para demonstração
    # crosswalks near empire state building
    response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": "1"})
    response = requests.post("http://" + url + ":5002/createCrosswalk", json={ "id": "1", "latitude":40.74843502260235, "longitude":-73.9845846220851, "elevation":0.0})

    response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": "2"})
    response = requests.post("http://" + url + ":5002/createCrosswalk", json={ "id": "2", "latitude":40.74843654659892, "longitude":-73.98457422852516, "elevation":0.0})

    response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": "3"})
    response = requests.post("http://" + url + ":5002/createCrosswalk", json={ "id": "3", "latitude":40.74842562462271, "longitude":-73.98458059877156, "elevation":0.0})

    response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": "4"})
    response = requests.post("http://" + url + ":5002/createCrosswalk", json={ "id": "4", "latitude":40.74842740261896, "longitude":-73.98457255214453, "elevation":0.0})

    # random crosswalks
    for i in range(5, 101):
        response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": str(i)})
        response = requests.post("http://" + url + ":5002/createCrosswalk", json={ "id": str(i), "latitude": random.uniform(-50, 50), "longitude": random.uniform(-50, 50), "elevation": random.uniform(-50, 50)})

    # evoca a migração dos dados para os micro-serviços que os usam
    url = "calculate-distance-in-crosswalk"
    response = requests.get("http://" + url + ":5006/initRedis")

    url = "closest-crosswalk"
    response = requests.get("http://" + url + ":5005/initRedis")

    url = "read-traffic-light"
    response = requests.get("http://" + url + ":5003/initRedis")

    return "database populated and migrated to other micro-services"

#   esta definição é responsável, por receber a localização das entidades pedestrian e vehicle, e enviar a mesma para o micro
#   serviço ClosestCrosswalk (rabbitmq que existe entre ambos) para verificar se a entidade está na vizinhança de uma crosswalk
#   sendo que este pedido ao micro serviço ClosestCrosswalk é assíncrono, imediatamente a seguir a enviar para o ClosestCrosswalk
#   verifica-se a existência de notificações para esta entidade
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

#   esta definição é responsável por retornar a id e localização de todas as crosswalks existentes no sistema.
@app.route("/readAllCrosswalks", methods=['GET'])
def readAllCrosswalks():
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/readAllCrosswalks")
    return response.text


#   esta definição retorna toda a informação necessária na monitorização de uma crosswalk
@app.route("/monitoringCrosswalk", methods=['POST'])
def monitoringCrosswalk():
    if 'crosswalk_id' in request.json:
        
        # obtém o nº de pedestres, nº de veículos e users na crosswalk 
        url = "crud-crosswalk-counters"
        response = requests.post("http://" + url + ":5004/getInfo", json = request.json)
            
        dict = json.loads(response.text)

        # caso, neste momento, não exista ninguém na crosswalk
        if (len(dict['users_ids']) == 0):
            return '{"history_npedestrians":'+ str(dict['history_npedestrians']) + ', "npedestrians": ' + str(dict['npedestrians']) + ', "history_nvehicles":' + str(dict['history_nvehicles']) + ', "nvehicles": ' + str(dict['nvehicles']) + ',"users":[]}'

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
        
        users = pedestrians + vehicles

        return '{"history_npedestrians":'+ str(dict['history_npedestrians']) + ', "npedestrians": ' + str(dict['npedestrians']) + ', "history_nvehicles":' + str(dict['history_nvehicles']) + ', "nvehicles": ' + str(dict['nvehicles']) + ', "users": ' + str(json.dumps(users)) + '}'

    else: return "ko"

#   esta definição é responsável por registar/adicionar uma crosswalk ao sistema e de seguida propagar as escritas para os serviços dependentes desta
@app.route("/registerCrosswalk", methods=["POST"])
def registerCrosswalk():
    if 'crosswalk_id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
        crosswalk_id = str(request.json['crosswalk_id'])
        latitude = request.json['latitude']
        longitude = request.json['longitude']
        elevation = request.json['elevation']
        url = "crud-crosswalk-location"
        response = requests.post("http://" + url + ":5002/createCrosswalk", json = {"id": crosswalk_id, "latitude": latitude, "longitude": longitude, "elevation": elevation})
        
        #   apenas quando correu bem a escrita, propaga-se as mesmas para os serviços dependentes desta escrita
        if response.text == "ok":
            url = "closest-crosswalk"
            requests.post("http://" + url + ":5005/updateCrosswalk", json = {"id": id, "latitude": latitude, "longitude": longitude, "elevation": elevation})
            
            url = "read-traffic-light"
            #   aqui apenas basta mandar o id, porque o value é o estado da traffic light
            requests.post("http://" + url + ":5003/updateCrosswalk", json = {"id": id})

        return response.text
    else: return "ko"

#   esta definição é responsável para mostrar que o serviço flask está a correr
@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5007", debug=True)
