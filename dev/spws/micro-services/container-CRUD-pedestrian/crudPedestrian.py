from flask import *
from flask_cors import CORS
import json
import redis

# após 5 segundos elemina a localização do user, assim caso o user
# se desconecte do sistema a meio de uma passadeira, os seus dados são ignorados
# passado 5 segundos uma vez que seria falso alarme contar com os mesmos
TTL = 5 

r = redis.Redis(host='redis-crud-pedestrian', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods


# input (JSON): { "id": "p0", "latitude": 1, "longitude": 2, "elevation": 3, "distance": 5.25 }
# ouput (TEXT): ok 
# ouput (TEXT): ko
# UPDATE/ CREATE
# atualiza/ cria a localização de um pedestre
@app.route("/updateLocation", methods=['POST'])
def updateLocation():
    if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json and 'distance' in request.json:
        
        id = str(request.json.get('id'))
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')
        distance = request.json.get('distance')

        userLocation =  '{ "id":"' + id + '","latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + ',"distance":' + str(distance) +'}'
        r.set(id, userLocation, TTL)
        return "ok"
    else: 
        return "ko" # internal server error (é suposto isto não acontecer)


# input (JSON): { "users_ids": ["p0", "p1"] }
# ouput (JSON): { [ { "id": "p0", "latitude": 1, "longitude": 2, "elevation": 3, "distance": 5.25 }, { "id": "p1", "latitude": 4, "longitude": 5, "elevation": 6, "distance": 10.25 } ] }
# ouput (TEXT): ko 
# READ MANY
# devolve a localização de vários pedestres
@app.route("/getPedestriansByIds", methods=["POST"])
def getPedestriansByIds():
    if 'users_ids' in request.json:
        users_ids = request.json['users_ids'] # python object
        if(len(users_ids) == 0): return "[]" # caso tenha enviado uma lista vazia
        res = "["
        for user_id in users_ids:
            if r.exists(user_id):
                res += r.get(user_id) + ", "
        if not res.endswith("["): res = res[:-2]
        res += "]"
        return res
    else: 
        return "ko"  # internal server error (é suposto isto não acontecer)


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)
