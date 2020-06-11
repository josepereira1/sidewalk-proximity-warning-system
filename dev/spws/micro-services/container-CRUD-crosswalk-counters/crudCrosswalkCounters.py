from flask import *
from flask_cors import CORS
import redis
import json
import datetime

# após 5 segundos elemina a associação do user à passadeira, assim caso o user
# se desconecte do sistema a meio de uma passadeira, os seus dados são ignorados
# passado 5 segundos uma vez que seria falso alarme contar com os mesmos
TTL = 5 

r = redis.Redis(host='redis-crud-crosswalk-counters', port=6379, charset="utf-8", decode_responses=True)

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

def cleanExpiredUsers(crosswalk_id):
    # obtém a lista de users naquela passadeira
    users_ids = r.smembers("c" + crosswalk_id)

    # remove os users que tenham atingido o TTL
    for user_id in users_ids:
        if not r.exists("u" + user_id + crosswalk_id):
            r.srem("c" + crosswalk_id, user_id) # remove a associação do user à passadeira

# input (JSON): { "user_id": "p0", "crosswalk_id": 0 }
# ouput (TEXT): yes
# ouput (TEXT): no
# ouput (TEXT): ko
# incrementa os contadores de pedestres e veículos (tanto o histórico como o atual)
# verifica se há perigo isto é, se existem users de tipos opostos
@app.route("/updateInfo", methods=['POST'])
def updateInfo():
    if 'user_id' in request.json and 'crosswalk_id' in request.json:
        
        user_id = str(request.json['user_id'])
        crosswalk_id = str(request.json['crosswalk_id'])

        cleanExpiredUsers(crosswalk_id)

        # incrementa os contadores dos pedestres (tanto o histórico como o atual)
        if user_id[0] == "p": 
            if not r.exists("u" + user_id + crosswalk_id):
                r.incr("p" + crosswalk_id) # contador atual
                r.incr("hp" + crosswalk_id) # contador do histórico
                r.set("u" + user_id + crosswalk_id, "true" ) # indica qual a passadeira que o user se econtra
                r.sadd("c" + crosswalk_id, user_id)  # indica qual os users na passadeira
        # incrementa os contadores dos veículos (tanto o histórico como o atual)
        elif user_id[0] == "v":
            if not r.exists("u" + user_id + crosswalk_id):
                r.incr("v" + crosswalk_id)  # contador atual
                r.incr("hv" + crosswalk_id) # contador do histórico
                r.set("u" + user_id + crosswalk_id, "true" ) # indica qual a passadeira que o user se econtra
                r.sadd("c" + crosswalk_id, user_id) # indica qual os users na passadeira
        # internal server error (é suposto isto não acontecer)
        else: return "ko"

        # renova o TTL da associação do user à passadeira
        r.expire("u" + user_id + crosswalk_id, TTL)

        # ------------------- VERIFICAR SE HÁ PERIGO -------------------

        # set com os ids dos users que estão na crosswalk
        crosswalk_users_ids = r.smembers("c" + crosswalk_id)

        for crosswalk_user_id  in crosswalk_users_ids:
            if r.exists("u" + user_id + crosswalk_id) and user_id[0] == 'p' and crosswalk_user_id[0] == 'v':
                return "yes" # há perigo
            if r.exists("u" + user_id + crosswalk_id) and user_id[0] == 'v' and crosswalk_user_id[0] == 'p':
                return "yes" # há perigo
        
        # percorreu todos os users e não encontrou tipos opostos por isso não há perigo
        return "no"
    
    else:
        return "ko" # internal server error (é suposto isto não acontecer)


# input (JSON): { "crosswalk_id": 0 }
# ouput (JSON): {"crosswalk_id": 0, "history_npedestrians": 100, "npedestrians": 20, "history_nvehicles": 50, "nvehicles": 30, "users_ids": ["v0", "p0", "p1", "p2"] }        
# ouput (TEXT): ko
# obtém os contadores de pedestres e veículos (tanto o histórico como o atual)
# verifica se há perigo (isto é se existem users de tipos opostos)
@app.route("/getInfo", methods=["POST"])
def getInfo():
    if 'crosswalk_id' in request.json:
        
        crosswalk_id = str(request.json['crosswalk_id'])
    	
        # obtém o contador dos pedestres atual
        if r.exists("p" + crosswalk_id): npedestrians = int(r.get("p" + crosswalk_id))
        else: npedestrians = 0
      
        # obtém o contador dos veículos atual
        if r.exists("v" + crosswalk_id): nvehicles = int(r.get("v" + crosswalk_id))
        else: nvehicles = 0

        # obtém o contador dos pedestres do histórico
        if r.exists("hp" + crosswalk_id): history_npedestrians = int(r.get("hp" + crosswalk_id))
        else: history_npedestrians = 0

        # obtém o contador dos veículos do histórico
        if r.exists("hv" + crosswalk_id): history_nvehicles = int(r.get("hv" + crosswalk_id))
        else: history_nvehicles = 0

        cleanExpiredUsers(crosswalk_id)

        # obtém novamente a lista de users já atualizada
        users_ids = r.smembers("c" + crosswalk_id)
       
        # manualy convert set to json (because set is not serializable)
        if len(users_ids) == 0: res = "[]"
        else: 
            res = "["
            for user_id in users_ids: 
                res += '"' + user_id + '", '
            res = res[:-2] # tirar os últimos 2 caracteres (vírugla e espaço)
            res += "]"

        res = '{"crosswalk_id":' + crosswalk_id + ', "history_npedestrians":' + str(history_npedestrians) + ', "npedestrians":' + str(npedestrians) +  ', "history_nvehicles":' + str(history_nvehicles) + ', "nvehicles":' + str(nvehicles) + ', "users_ids":' + res + '}'        
        return res
    
    else:
        return "ko" # internal server error (é suposto isto não acontecer)


# input (JSON): { "crosswalk_id": 0 }
# ouput (TEXT): ok
# ouput (TEXT): ko
@app.route("/resetDailyCountersCrosswalk", methods=["POST"])
def resetCountersCrosswalk():
    if 'crosswalk_id' in request.json:
        crosswalk_id = str(request.json['crosswalk_id'])
        if r.exists("v" + crosswalk_id):
            r.set("v" + crosswalk_id, 0)
        if r.exists("p" + crosswalk_id):
            r.set("p" + crosswalk_id, 0)
        return "ok"
    else: return "ko" # internal server error (é suposto isto não acontecer)


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5004", debug=True)