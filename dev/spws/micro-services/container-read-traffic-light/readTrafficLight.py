from flask import *
from flask_cors import CORS
import redis
from random import randrange
import requests
from threading import Thread
import time


r = redis.Redis(host='redis-read-traffic-light', port=6379, charset="utf-8", decode_responses=True)

def callback():
	time.sleep(60)	#	atualiza os estados de 60 em 60 segundos
	keys = r.keys()
	for key in keys:
		state = r.get(key)
		f = open("log", "a")
		f.write(key)
		f.close()
		if(state == '0' or state == '1'):
			r.incr(key)
		elif state == '2': 
			r.decr(key, 2)
	f = open("sai", "a")
	f.write("sai")
	f.close()

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/startThread", methods=['GET'])
def startThread():
	thread = Thread(target =callback) 
	thread.start()
	return "thread to change state of traffic light started successfully!"

@app.route("/initRedis", methods=['GET', 'POST'])
def initRedis():
    url = "crud-crosswalk-location"    
    response = requests.get("http://" + url + ":5002/readAllCrosswalksIds")
    crosswalks = json.loads(response.text)
    r.flushall() # caso existam dados no redis, apaga-os
    for crosswalk in crosswalks:
        r.set(crosswalk['id'], str(randrange(2)))
    return "redis loaded"

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
