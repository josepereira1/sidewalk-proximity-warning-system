from flask import *
from flask_cors import CORS
import json
import redis

r = redis.Redis(host='redis-crud-vehicle', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/updateLocation", methods=['POST'])
def updateLocation():

	if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
		id = str(request.json['id'])
		latitude = request.json['latitude']
		longitude = request.json['longitude']
		elevation = request.json['elevation']
		userLocation =  '{"id":"' + id + '", "latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + '}'
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