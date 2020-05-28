from flask import *
from flask_cors import CORS
import redis
import json

r = redis.Redis(host='redis-crud-crosswalk-counters', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/updateInfo", methods=['POST'])
def updateInfo():
    f = open('log', 'a')
    f.write(str(request.json))
    f.close()
    if 'user_id' in request.json and 'crosswalk_id' in request.json:
        user_id = str(request.json['user_id'])
        crosswalk_id = str(request.json['crosswalk_id'])	
		# incrementa os contadores dos pedestres ou veículos na passadeira
        if user_id[0] == "p" and not r.exists("u" + user_id):
            r.incr("p" + crosswalk_id)
            r.lpush("c" + crosswalk_id, user_id)
        elif user_id[0] == "v" and not r.exists("u" + user_id): 
            r.incr("v" + crosswalk_id)
            r.lpush("c" + crosswalk_id, user_id) 
        else: return "ko"

        #   associar as crosswalks ao user
        r.lpush("u" + user_id, crosswalk_id)
        return "ok"
    else:
        return "ko"

@app.route("/getInfo", methods=["POST"])
def getInfo():
    if 'crosswalk_id' in request.json:
        crosswalk_id = str(request.json['crosswalk_id'])
    	
        # obtém os contadores
        if r.exists("p" + crosswalk_id): npedestrians = int(r.get("p" + crosswalk_id))
        else: npedestrians = 0
      
        if r.exists("v" + crosswalk_id): nvehicles = int(r.get("v" + crosswalk_id))
        else: nvehicles = 0
    
        # obtém a lista de users
        users = r.lrange("c" + crosswalk_id, 0, -1 ) # python object
        users = json.dumps(users) # json string
        return '{"crosswalk_id":' + crosswalk_id + ', "npedestrians":' + str(npedestrians) + ', "nvehicles":' + str(nvehicles) + ', "users_ids":' + users + '}'
    return "ko"


@app.route("/cleanDirtyIds", methods=['POST'])
def cleanDirtyIds():
    if('user_id' in request.json):
        user_id = str(request.json['user_id'])
        crosswalks_ids = r.lrange("u" + user_id, 0, -1 ) # python object
        
        for crosswalk_id in crosswalks_ids:
            r.lrem("c" + crosswalk_id, -1, user_id) #   remover o id da info da passadeira
        r.delete("u" + user_id) #   remover a lista de passadeiras
        #   funciona pq este controller só é chamado quando o user não está em nenhuma passadeira   
        
        return "ok"
    else:
        return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5004", debug=True)