from flask import *
import json
import redis

app = Flask(__name__)

r = redis.Redis(host='redis-crud-vehicle', port=6379)

@app.route("/updateLocation", methods=['POST'])
def updateLocation():

	if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
		id = request.json['id']
		latitude = request.json['latitude']
		longitude = request.json['longitude']
		elevation = request.json['elevation']
		userLocation =  "{\"id\":\"" + id + "\", \"latitude\":" + str(latitude) + ", \"longitude\":" + str(longitude) + ", \"elevation\":" + str(elevation) + "}"
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