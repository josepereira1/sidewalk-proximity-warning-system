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

app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

r = None

url = "crud-crosswalk-location"

def populate():
    response = requests.get("http://" + url + ":5002/createSchema")
    #print(response.text)
    for i in range(5):
        response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": str(i)})
        #print(response.text)
        response = requests.post("http://" + url + ":5002/createCrosswalk", json={"id": str(i), "latitude": random.uniform(0, 25), "longitude": random.uniform(0, 25), "elevation": random.uniform(0, 25)})
        #print(response.text)

def initRedis():    
    # depois mudar o endereço para 'crud-crosswalk-location'
    response = requests.get("http://" + url + ":5002/readAllCrosswalks")
    crosswalks = json.loads(response.text)
    #print(crosswalks)
    global r
    r = redis.Redis(host='redis-closest-crosswalk', port=6379)
    for crosswalk in crosswalks:
        r.set(crosswalk['id'], json.dumps(crosswalk))


time.sleep(20) # espera 20 segundos antes de tentar estabelecer a conexão
populate() # apenas para testar
initRedis() # faz a migração da informação das crosswalks para o Redis


def closestCrosswalk(ch, method, properties, body):
    
    crosswalks = {}
    keys = r.keys()
    for key in keys:
        crosswalk = str(r.get(key).decode())     #   json
        crosswalk = json.loads(crosswalk)   #   python object
        crosswalks[crosswalk['id']] = crosswalk

    user = json.loads(body.decode())
    distances = {}

    for key, crosswalk in crosswalks.items():
        distances[key] = math.sqrt( ((user['latitude']-crosswalk['latitude'])**2)+((user['longitude']-crosswalk['longitude'])**2)+((user['elevation']-crosswalk['elevation'])**2) )
    id_closest_crosswalk = min(distances, key=distances.get)



    # 0.0001 º => 11.132 m
    if distances[id_closest_crosswalk] < 0.0001: 
        sender = Sender('rabbitmq-closest-crosswalk')
        sender.setQueue('output')
        sender.send("{\"user_id\":" + str(user['id']) + ",\"crosswalk_id\":" + str(id_closest_crosswalk) + "}")
        sender.setQueue('output2')
        sender.send("{\"user_id\":" + str(user['id']) + ",\"crosswalk_id\":" + str(id_closest_crosswalk) + "}")
        sender.close()

receiver = Receiver('rabbitmq-closest-crosswalk')
thread = Thread( target = receiver.setQueue, args = ('input', closestCrosswalk) )   #   QUEUE INPUT
thread.start()


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5005", debug=True)
