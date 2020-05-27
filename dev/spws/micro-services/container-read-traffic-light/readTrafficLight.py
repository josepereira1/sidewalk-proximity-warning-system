from flask import *
from flask_cors import CORS
import redis


r = redis.Redis(host='redis-read-traffic-light', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/updateStateLight", methods=['POST'])
def updateLocation():

	if 'id' in request.json and 'state' in request.json:
		id = str(request.json['id'])
		state = request.json['state']
		stateLight =  "{\"id\":\"" + id + "\", \"state\":" + str(state) + "}"
		r.set(id, state)
		return "ok"
	else:
		return "ko"

@app.route("/getStateLight", methods=["POST"])
def getLocation():
    if('id' in request.json and r.exists(request.json.get('id'))):
        return r.get(request.json.get('id'))

    return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5003", debug=True)
