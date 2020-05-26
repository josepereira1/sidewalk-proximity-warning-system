from flask import *
from flask_cors import CORS
import json
import redis

# intervalo de tempo para tentar conectar aos serviços externos
TIME = 5

# espera que o redis inicie, tenta estabelecer conexão de 5 em 5 segundos
while True:
    try:
        time.sleep(TIME) 
        r = redis.Redis(host='redis-crud-vehicle')
        break
    except:
        print("connection to redis failed, trying again...")

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/updateLocation", methods=['POST'])
def updateLocation():

	if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
		id = request.json['id']
		latitude = request.json['latitude']
		longitude = request.json['longitude']
		elevation = request.json['elevation']
		userLocation =  "{\"id\":\"" + str(id) + "\", \"latitude\":" + str(latitude) + ", \"longitude\":" + str(longitude) + ", \"elevation\":" + str(elevation) + "}"
		r.set(id, userLocation)
		return "ok"
	else:
		return "ko"

@app.route("/getLocation", methods=["POST"])
def getLocation():
    if('id' in request.json and r.exists(request.json.get('id'))):
        return r.get(request.json.get('id'))

    return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5001", debug=True)