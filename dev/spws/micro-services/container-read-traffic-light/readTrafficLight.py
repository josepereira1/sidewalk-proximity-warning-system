from flask import *
import redis

app = Flask(__name__)

r = redis.Redis(host='redis-read-traffic-light', port=6379)

@app.route("/updateStateLight", methods=['POST'])
def updateLocation():

	if 'id' in request.json and 'state' in request.json:
		id = request.json['id']
		state = request.json['state']
		stateLight =  "{\"id\":\"" + str(id) + "\", \"state\":" + str(state) + "}"
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
