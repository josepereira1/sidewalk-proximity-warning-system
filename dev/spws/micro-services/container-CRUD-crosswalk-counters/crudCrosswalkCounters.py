from flask import *
from flask_cors import CORS
import redis
import json
import datetime

r = redis.Redis(host='redis-crud-crosswalk-counters', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods


@app.route("/updateInfo", methods=['POST'])
def updateInfo():
    if 'user_id' in request.json and 'crosswalk_id' in request.json:
        
        user_id = str(request.json['user_id'])
        crosswalk_id = str(request.json['crosswalk_id'])

        # incrementa os contadores dos pedestres ou veículos na passadeira
        if user_id[0] == "p": 
            if not r.exists("u" + user_id + crosswalk_id):
                r.incr("p" + crosswalk_id)
                r.incr("hp" + crosswalk_id) #   histórico
                r.set("u" + user_id + crosswalk_id, 'true' )
                r.sadd("c" + crosswalk_id, user_id) 
        elif user_id[0] == "v":
            if not r.exists("u" + user_id + crosswalk_id):
                r.incr("v" + crosswalk_id)
                r.incr("hv" + crosswalk_id) #   histórico
                r.set("u" + user_id + crosswalk_id, 'true' )
                r.sadd("c" + crosswalk_id, user_id) 
        else: return "ko"

        # renova o TTL
        r.expire("u" + user_id + crosswalk_id, 5)

        # ------------------- VERIFICAR SE HÁ PERIGO -------------------

        crosswalk_id = str(request.json['crosswalk_id'])
        user_id_input = str(request.json['user_id'])

        crosswalk_users_ids = r.smembers("c" + crosswalk_id) # python object

        for crosswalk_user_id  in crosswalk_users_ids:
            if r.exists("u" + user_id_input + crosswalk_id) and user_id_input[0] == 'p' and crosswalk_user_id[0] == 'v':
                return "yes"    #   há perigo
            if r.exists("u" + user_id_input + crosswalk_id) and user_id_input[0] == 'v' and crosswalk_user_id[0] == 'p':
                return "yes"    #   há perigo
        return "no"             #   não há perigo   
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

        if r.exists("hp" + crosswalk_id): history_npedestrians = int(r.get("hp" + crosswalk_id))
        else: history_npedestrians = 0

        if r.exists("hv" + crosswalk_id): history_nvehicles = int(r.get("hv" + crosswalk_id))
        else: history_nvehicles = 0

        # obtém a lista de users
        users_ids = r.smembers("c" + crosswalk_id) # python object

        # remove os users que tenham atingido o TTL
        for user_id in users_ids:
            if not r.exists("u" + user_id + crosswalk_id):
                r.srem("c" + crosswalk_id, user_id) # remove o user da passadeira

        # obtém novamente a lista de users já atualizada
        users_ids = r.smembers("c" + crosswalk_id) # python object
       
        # convert to json
        if len(users_ids) == 0: res = "[]"
        else: 
            res = "["
            for user_id in users_ids: 
                res += '"' + user_id + '", '
            res = res[:-2]
            res += "]"

        res = '{"crosswalk_id":' + crosswalk_id + ', "history_npedestrians":' + str(history_npedestrians) + ', "npedestrians":' + str(npedestrians) +  ', "history_nvehicles":' + history_nvehicles + ', "nvehicles":' + str(nvehicles) + ', "users_ids":' + res + '}'
        
        return res
    return "ko"

@app.route("/hasDangerous", methods=['POST'])
def hasDangerous():
    if 'user_id' in request.json and 'crosswalk_id' in request.json:
        crosswalk_id = str(request.json['crosswalk_id'])
        user_id_input = str(request.json['user_id'])

        crosswalk_users_ids = r.smembers("c" + crosswalk_id) # python object

        for crosswalk_user_id  in crosswalk_users_ids:
            if r.exists("u" + user_id_input + crosswalk_id) and user_id_input[0] == 'p' and crosswalk_user_id[0] == 'v':
                return "yes"
            if r.exists("u" + user_id_input + crosswalk_id) and user_id_input[0] == 'v' and crosswalk_user_id[0] == 'p':
                return "yes"
        return "no"
    else:
        return "ko"


@app.route("/resetDailyCountersCrosswalk", methods=["POST"])
def resetCountersCrosswalk():
    if 'crosswalk_id' in request.json:
        crosswalk_id = str(request.json['crosswalk_id'])
        if r.exists("v" + crosswalk_id):
            r.set("v" + crosswalk_id, 0)
        if r.exists("p" + crosswalk_id):
            r.set("p" + crosswalk_id, 0)
    else: return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5004", debug=True)