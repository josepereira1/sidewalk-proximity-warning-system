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
                r.set("u" + user_id + crosswalk_id, 'true' )
                r.sadd("c" + crosswalk_id, user_id) 
        elif user_id[0] == "v":
            if not r.exists("u" + user_id + crosswalk_id):
                r.incr("v" + crosswalk_id)
                r.set("u" + user_id + crosswalk_id, 'true' )
                r.sadd("c" + crosswalk_id, user_id) 
        else: return "ko"

        # renova o TTL
        res = r.expire("u" + user_id + crosswalk_id, 5)

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

        res = '{"crosswalk_id":' + crosswalk_id + ', "npedestrians":' + str(npedestrians) + ', "nvehicles":' + str(nvehicles) + ', "users_ids":' + res + '}'
        
        return res
    return "ko"


# @app.route("/cleanDirtyIds", methods=['POST'])
# def cleanDirtyIds():
#     if('user_id' in request.json):
#         user_id = str(request.json['user_id'])
#         crosswalks_ids = r.lrange("u" + user_id, 0, -1 ) # python object
        
#         for crosswalk_id in crosswalks_ids:
#             r.lrem("c" + crosswalk_id, -1, user_id) #   remover o id da info da passadeira
#         r.delete("u" + user_id) #   remover a lista de passadeiras
#         #   funciona pq este controller só é chamado quando o user não está em nenhuma passadeira   
        
#         return "ok"
#     else:
#         return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5004", debug=True)