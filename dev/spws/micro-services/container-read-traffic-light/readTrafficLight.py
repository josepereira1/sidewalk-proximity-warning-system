from flask import *
from flask_cors import CORS
import redis
from random import randrange
import requests
import threading
import time

r = redis.Redis(host='redis-read-traffic-light', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

# ouput (TEXT): redis loaded
# ouput (TEXT): ko from request readAllCrosswalksIds
# Faz a migração apenas do id de todas as crosswalks contidas no micro-serviço crud-crosswalk-location para o redis.
@app.route("/initRedis", methods=['GET', 'POST'])
def initRedis():
	url = "crud-crosswalk-location"
	response = requests.get("http://" + url + ":5002/readAllCrosswalksIds")
	
	if response.text == "ko": 
		return "ko from request readAllCrosswalksIds"

	crosswalks = json.loads(response.text)
	r.flushall() # caso existam dados no redis, apaga-os
	for crosswalk in crosswalks:
		r.set(crosswalk['id'], str(randrange(2)))
	return "redis loaded"

# ouput (TEXT): ok
# Altera a luz do semáforo de todas as crosswalks
@app.route("/updateStateLights", methods=['GET'])
def updateLocation():
	keys = r.keys()
	for key in keys:
		state = r.get(key)
		if(state == '0' or state == '1'):
			r.incr(key)
		elif state == '2': 
			r.decr(key, 2)
	return "ok"
	
# input (JSON): { "crosswalk_id": 0 }
# ouput (TEXT): 2 - ex: luz do semáforo
# ouput (TEXT): ko
@app.route("/getStateLight", methods=["POST"])
def getLocation():
    if('crosswalk_id' in request.json and r.exists(request.json.get('crosswalk_id'))):
        return r.get(request.json.get('crosswalk_id'))
    return "ko"

# input (JSON): { "id": 0 }
# ouput (TEXT): ok
# ouput (TEXT): ko
# Faz a proapagação de uma crosswalk copiando o seu id para este micro-serviço. 
@app.route("/updateCrosswalk", methods=['POST'])
def updateCrosswalk():
    if 'id' in request.json:
        id = str(request.json.get('id'))
        r.set(id, str(randrange(2)))	#	propagação de uma nova crosswalk, e iniciar um estado random
        return "ok"
    else:
        return "ko"


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5003", debug=True)
