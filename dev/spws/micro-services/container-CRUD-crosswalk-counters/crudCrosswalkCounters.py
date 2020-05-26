from flask import *
from flask_cors import CORS
import redis
import json

app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

r = redis.Redis(host='redis-crud-crosswalk-counters', port=6379, charset="utf-8", decode_responses=True)

@app.route("/updateInfo", methods=['POST'])
def updateInfo():
	if 'user_id' in request.json and 'crosswalk_id' in request.json:
		user_id = str(request.json['user_id'])
		crosswalk_id = str(request.json['crosswalk_id'])	
		# incrementa os contadores dos pedestres ou veículos na passadeira
		if (user_id[0] == "p"): r.incr("p" + crosswalk_id)
		elif (user_id[0] == "v"): r.incr("v" + crosswalk_id) 
		else: return "ko"
		# adiciona o pedestre ou veículo à crosswalk
		r.lpush("c" + crosswalk_id, user_id)
		return "ok"
	else:
		return "ko"


@app.route("/getInfo", methods=["POST"])
def getInfo():
    if 'crosswalk_id' in request.json:
        user_id = str(request.json['user_id'])
        crosswalk_id = str(request.json['crosswalk_id'])
    	# obtém os contadores
        if r.exists("p" + crosswalk_id): 
            npedestrians = int(r.get("p" + crosswalk_id));
            existsPedestrian = True
        else: 
            npedestrians = 0
            existsPedestrian = False
        if r.exists("v" + crosswalk_id): 
            nvehicles = int(r.get("v" + crosswalk_id));
            existsVehicle = True
        else: 
            nvehicles = 0
            existsVehicle = False
        if not existsPedestrian and not existsVehicle: return "ko"
        # obtém a lista de users
        users = r.lrange("c" + crosswalk_id, 0, -1 ) # python object
        users = json.dumps(users) # json string
        return '{"crosswalk_id":' + crosswalk_id + ', "npedestrians":' + str(npedestrians) + ', "nvehicles":' + str(nvehicles) + ', "users_ids":' + users + '}'
    return "ko"


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5004", debug=True)