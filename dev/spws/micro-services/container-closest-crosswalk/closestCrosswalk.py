from flask import *
from flask_cors import CORS
import json
import requests 
from sender import Sender
from receiver import Receiver
from threading import Thread
import math
import random
import redis
import time

r = redis.Redis(host='redis-closest-crosswalk', port=6379, charset="utf-8", decode_responses=True)

# intervalo de tempo entre cada conexão
TIME = 5

# espera que o rabbitMQ inicie, tenta estabelecer conexão de 5 em 5 segundos
while True:
    try:
        time.sleep(TIME) 
        receiver = Receiver('rabbitmq-closest-crosswalk')
        break
    except:
        print("connection to RabbitMQ failed, trying again...")

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

#   inicializa o redis deste micro serviço, buscando a informação das crosswalks ao micro serviço "crud-crosswalk-location"
#   no input
#   output (TEXT): "redis loaded"
@app.route("/initRedis", methods=['GET', 'POST'])
def initRedis():
    url = "crud-crosswalk-location"    
    response = requests.get("http://" + url + ":5002/readAllCrosswalks")
    crosswalks = json.loads(response.text)
    r.flushall() # caso existam dados no redis, apaga-os
    for crosswalk in crosswalks:
        r.set(crosswalk['id'], json.dumps(crosswalk))
    return "redis loaded"

#   determina a crosswalk mais próxima da entidade (pedestrian ou vehicle), no entanto, APENAS retorna se estiver no interior do raio da vizinhança
#   input (JSON): {"id": 1, "latitude": 1, "longitude": 1, "elevation": 1}
#   output (JSON): {"user_id": 1, "latitude": 1, "longitude": 1, "elevation": 1, "crosswalk_id": 1, "distance": 0.00001}
def closestCrosswalk(ch, method, properties, body):
    distances = {}

    user = json.loads(body) # python object
    
    keys = r.keys()
    for key in keys:
        crosswalk = r.get(key) # json string
        crosswalk = json.loads(crosswalk) # python object
        #   fórmula da distância
        distances[key] = math.sqrt( ((user['latitude']-crosswalk['latitude'])**2)+((user['longitude']-crosswalk['longitude'])**2)+((user['elevation']-crosswalk['elevation'])**2) ) 

    id_closest_crosswalk = min(distances, key=distances.get)

    # 0.0001 <=> 11 m
    # 0.0002 <=> 22 m
    # ...
    #   testar se a entidade está no interior do raio, neste caso 0.0001, que é aproximadamente 11 metros
    if distances[id_closest_crosswalk] < 0.0001: 
        sender = Sender('rabbitmq-closest-crosswalk')
        sender.setQueue('output')
        res = '{"user_id":"' + str(user['id']) + '","latitude":' + str(user['latitude']) + ',"longitude":' + str(user['longitude']) + ',"elevation":' + str(user['elevation']) + ',"crosswalk_id":' + str(id_closest_crosswalk) + ', "distance":' + str(distances[id_closest_crosswalk])+  '}'
        sender.send(res)
        sender.close()

thread = Thread( target = receiver.setQueue, args = ('input', closestCrosswalk) )
thread.start()

#   atualiza/adiciona a informação de uma crosswalk, usado nas propagações das escritas no serviço que guarda esta informação
@app.route("/updateCrosswalk", methods=['POST'])
def updateCrosswalk():
    if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
        id = str(request.json.get('id'))
        
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        crosswalkLocation =  '{ "id":"' + id + '","latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) +'}'

        r.set(id, crosswalkLocation)

        return "ok"
    else:
        return "ko"

    

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5005", debug=True)
