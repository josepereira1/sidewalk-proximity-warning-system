from flask import *
from flask_cors import CORS
import redis

# intervalo de tempo para tentar conectar aos serviços externos
TIME = 5

# espera que o redis inicie, tenta estabelecer conexão de 5 em 5 segundos
while True:
    try:
        time.sleep(TIME) 
        r = redis.Redis(host='redis-read-traffic-light')
        break
    except:
        print("connection to redis failed, trying again...")

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

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
