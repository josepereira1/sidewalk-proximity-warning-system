from flask import *
import json
import requests 
from sender import Sender
from receiver import Receiver
from threading import Thread
import math
import random
import redis

app = Flask(__name__)

r = None

url = "crud-crosswalk-location"

def populate():
    response = requests.get("http://" + url + ":5002/createSchema")
    #print(response.text)
    for i in range(10):
        response = requests.post("http://" + url + ":5002/deleteCrosswalk", json={"id": str(i)})
        #print(response.text)
        response = requests.post("http://" + url + ":5002/createCrosswalk", json={"id": str(i), "latitude": random.uniform(0, 100), "longitude": random.uniform(0, 100), "elevation": random.uniform(0, 100)})
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

populate() # apenas para testar
initRedis() # faz a migração da informação das crosswalks para o Redis

crosswalks = {}
keys = r.keys()
for key in keys:
    crosswalk = r.get(key).decode()     #   json
    crosswalk = json.loads(crosswalk)   #   python object
    crosswalks[key] = crosswalk


def closestCrosswalk(ch, method, properties, body):

    dic = json.loads(body.decode())

    distances = {}

    for key, crosswalk in crosswalks.items():
        distances[key] = math.sqrt( ((dic['latitude']-crosswalk['latitude'])**2)+((dic['longitude']-crosswalk['longitude'])**2)+((dic['elevation']-crosswalk['elevation'])**2) )

    id_closest_crosswalk = min(distances, key=distances.get)

    sender = Sender('rabbitmq-closest-crosswalk')
    sender.setQueue('output')
    sender.send("{\"user_id\":" + str(dic['id']) + ",\"crosswalk_id\":" + str(id_closest_crosswalk) + "}")
    sender.setQueue('output2')
    sender.send("{\"user_id\":" + str(dic['id']) + ",\"crosswalk_id\":" + str(id_closest_crosswalk) + "}")
    sender.close()

receiver = Receiver('rabbitmq-closest-crosswalk')
thread = Thread( target = receiver.setQueue, args = ('input', closestCrosswalk) )   #   QUEUE INPUT
thread.start()

@app.route("/getCrosswalks", methods=['GET', 'POST'])
def getCrosswalks():
    global crosswalks
    return jsonify(crosswalks)

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5005", debug=True)
