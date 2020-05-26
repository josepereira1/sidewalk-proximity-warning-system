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

time.sleep(20) # esperar que o rabbitMQ inicie

@app.route("/initRedis", methods=['GET', 'POST'])
def initRedis():
    url = "crud-crosswalk-location"    
    response = requests.get("http://" + url + ":5002/readAllCrosswalks")
    crosswalks = json.loads(response.text)
    global r
    r = redis.Redis(host='redis-closest-crosswalk', port=6379)
    for crosswalk in crosswalks:
        r.set(crosswalk['id'], json.dumps(crosswalk))
    return "redis loaded"


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
