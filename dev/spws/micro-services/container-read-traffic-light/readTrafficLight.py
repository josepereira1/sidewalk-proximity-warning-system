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

@app.route("/initRedis", methods=['GET', 'POST'])
def initRedis():
	url = "crud-crosswalk-location"
	response = requests.get("http://" + url + ":5002/readAllCrosswalksIds")
	
	if response.text == "ko": return "ko from request readAllCrosswalksIds"

	crosswalks = json.loads(response.text)
	r.flushall() # caso existam dados no redis, apaga-os
	for crosswalk in crosswalks:
		r.set(crosswalk['id'], str(randrange(2)))
	return "redis loaded"

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
	

@app.route("/getStateLight", methods=["POST"])
def getLocation():
    if('crosswalk_id' in request.json and r.exists(request.json.get('crosswalk_id'))):
        return r.get(request.json.get('crosswalk_id'))
    return "ko"



@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5003", debug=True)
