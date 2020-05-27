from flask import *
from flask_cors import CORS
import json
import redis

r = redis.Redis(host='redis-crud-pedestrian', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

# UPDATE/ CREATE
@app.route("/updateLocation", methods=['POST'])
def updateLocation():
    f = open("requestsRecebido", "a")
    f.write(str(request.json))
    f.close
    
    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = str(request.json.get('id'))
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        userLocation =  '{ "id":"' + id + '","latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + '}'

        f = open("userLocation", "a")
        f.write(userLocation)
        f.close

        r.set(id, userLocation)

        return "ok"
    else: return "ko"

@app.route("/getLocation", methods=["POST"])
def getLocation():
    if('id' in request.json and r.exists(request.json.get('id'))):
        return r.get(request.json.get('id'))
    else: 
        return "ko"

@app.route("/getPedestriansByIds", methods=["POST"])
def getPedestriansByIds():
    if('users_ids' in request.json):
        users_ids = request.json.get('users_ids')   #   string json
        if(len(users_ids) == 0): return "[]"             #   caso tenha enviado a lista vazia
        res = "["
        for user_id in users_ids:
            res += r.get(user_id) + ','
        res = res[:-1]  #   tirar a última linha
        res += "]"
        return res
    else: return "ko"

@app.route("/getPedestrians", methods=['GET'])
def getClosestCrosswalks():
    keys = r.keys()
    if not keys: 
        return "[]"
    else:
        res = "["
        for key in keys:
            json = r.get(key)
            res += json
            res = res[:-2]
        res += "]"
        return res


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)
