from flask import *
import redis
import requests
import random # usado penas para gerar a população de teste
import json
import math
import time

r = None

app = Flask(__name__)

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

@app.route("/calculateDistance", methods=['POST'])
def calculateDistance():
    if 'crosswalkId' in request.json and 'users' in request.json and request.json['users']:
        crosswalk = json.loads(r.get(request.json['crosswalkId']).decode()) # python object
        users = request.json['users'] # python object
        res = "["
        for user in users:
            #print(user)
            distance = math.sqrt( ((user['latitude']-crosswalk['latitude'])**2)+((user['longitude']-crosswalk['longitude'])**2)+((user['elevation']-crosswalk['elevation'])**2) )
            #print(distance)
            res += '{"id":' + str(user['id']) + ", " + '"distance":' + str(distance) + "}, "
        res = res[:-2]
        res += "]"
        return res
    else: return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5006", debug=True)
