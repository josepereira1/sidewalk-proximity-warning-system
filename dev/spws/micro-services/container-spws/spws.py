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

app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

# buffer de notificações
r = redis.Redis(host='redis-spws', port=6379, charset="utf-8", decode_responses=True)

time.sleep(30) # esperar que tudo inicie

def populate():
    url = "crud-crosswalk-location"
    response = requests.get("http://" + url + ":5002/createSchema")
    #print(response.text)
    for i in range(5):
        response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": str(i)})
        #print(response.text)
        response = requests.post("http://" + url + ":5002/createCrosswalk", json={"id": str(i), "latitude": random.uniform(0, 25), "longitude": random.uniform(0, 25), "elevation": random.uniform(0, 25)})
        #print(response.text)

populate()

# Estabelece conexão ao rabbitMQ e inicializa a escuta na queue "output"
def callback(ch, method, properties, body):     
    output = json.loads(body) # python object
    r.set(output['user_id'], output['crosswalk_id'])
    # TODO criar Thread para incrementar counter no micro-serviço crosswalk-counters
    # TODO criar Thread para adicionar o vehicle ou pedestre à passadeira no respetivo micro-serviço crud
    # TODO criar Thread e enviar atualizar a localização do vehicle ou pedestre no respetivo micro-serviço crud

receiver = Receiver('rabbitmq-closest-crosswalk')
thread = Thread( target = receiver.setQueue, args = ('output', callback) )   #   QUEUE INPUT
thread.start()


@app.route("/closestCrosswalk", methods=['POST'])
def closestCrosswalk():

    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = str(request.json.get('id'))
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        json =  '{ "id":' + str(id) + ', "latitude":' + str(latitude) + ', "longitude":' + str(longitude) + ', "elevation":' + str(elevation) + '}'
        
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


# # PARA DEBUGGING
# @app.route("/getClosestCrosswalks", methods=['GET'])
# def getClosestCrosswalks():
#     keys = r.keys()
#     if not keys: 
#         return "[]"
#     else:
#         res = "["
#         for key in keys:
#             crosswalk_id = str(r.get(key).decode())
#             res += '{"user_id":' + str(key.decode()) + ", " + '"closest_crosswalk_id":' + crosswalk_id + "}, "
#             res = res[:-2]
#         res += "]"
#         return res


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5007", debug=True)
