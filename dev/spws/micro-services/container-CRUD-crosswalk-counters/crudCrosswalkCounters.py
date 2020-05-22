from flask import *
import redis

app = Flask(__name__)

r = redis.Redis(host='redis-crud-crosswalk-counters', port=6379)

@app.route("/incrementPedestrians", methods=['POST'])
def incrementPedestrians():
	if 'id' in request.json:
		id = request.json['id']
		r.incr("p" + str(id))
		return "ok"
	else:
		return "ko"

@app.route("/incrementVehicles", methods=['POST'])
def incrementVehicles():
	if 'id' in request.json:
		id = request.json['id']
		r.incr("v" + id)
		return "ok"
	else:
		return "ko"

@app.route("/getCounters", methods=["POST"])
def getCounters():
    if 'id' in request.json and (r.exists("p" + request.json.get('id')) or r.exists("v" + request.json.get('id'))):
    	id = request.json['id']
    	if r.exists("p" + request.json.get('id')): npedestrians = int(r.get("p" + id));
    	else: npedestrians = 0
    	if r.exists("v" + request.json.get('id')): nvehicles = int(r.get("v" + id));
    	else: nvehicles = 0
    	json = "{\"id\":\"" + str(id) + "\", \"npedestrians\":" + str(npedestrians) + ", \"nvehicles\":" + str(nvehicles) + "}"
    	return json
    return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5004", debug=True)