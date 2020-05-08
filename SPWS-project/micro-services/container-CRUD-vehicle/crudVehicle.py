from flask import *
import json
import redis

app = Flask(__name__)

@app.route("/updateLocation", methods=['POST'])
def updateLocation():
	
	if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
		id = request.json['id']
		latitude = request.json['latitude']
		longitude = request.json['longitude']
		elevation = request.json['elevation']
		userLocation =  "{\"id\":\"" + id + "\", \"latitude\":" + str(latitude) + ", \"longitude\":" + str(longitude) + ", \"elevation\":" + str(elevation) + "}" 
		r = redis.Redis(host='10.0.0.102', port=6379, db=0)
		r.set(id, userLocation)
		return "ok"
	else:
		return "ko"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5001", debug=True)