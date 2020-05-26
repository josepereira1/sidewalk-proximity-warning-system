from flask import *
import redis
import requests
import random # usado penas para gerar a população de teste
import json
import math
import time

r = None

def populate():
    response = requests.get("http://crud-crosswalk-location:5002/createSchema")
    #print(response.text)
    for i in range(5):
        response = requests.post("http://crud-crosswalk-location:5002/deleteCrosswalk", json={"id": str(i)})
        #print(response.text)
        response = requests.post("http://crud-crosswalk-location:5002/createCrosswalk", json={"id": str(i), "latitude": random.uniform(0, 25), "longitude": random.uniform(0, 25), "elevation": random.uniform(0, 25)})
        #print(response.text)

def initRedis():    
    # depois mudar o endereço para 'crud-crosswalk-location'
    response = requests.get("http://crud-crosswalk-location:5002/readAllCrosswalks")
    crosswalks = json.loads(response.text)
    #print(crosswalks)
    global r
    r = redis.Redis(host='redis-calculate-distance-in-crosswalk', port=6379)
    for crosswalk in crosswalks:
        r.set(crosswalk['id'], json.dumps(crosswalk))


time.sleep(20) # espera 20 segundos antes de tentar estabelecer a conexão
populate() # apenas para testar
initRedis() # faz a migração da informação das crosswalks para o Redis


app = Flask(__name__)

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
