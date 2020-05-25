from flask import *
import json
from sender import Sender
from receiver import Receiver
from threading import Thread
import time
import redis

app = Flask(__name__)

r = redis.Redis(host='redis-spws', port=6379)

time.sleep(30) # espera 30 segundos antes de tentar estabelecer a conexão
sender = Sender('rabbitmq-closest-crosswalk')
sender.setQueue('input')   #   QUEUE OUTPUT


def callback(ch, method, properties, body):
    global closestCrosswalks
    output = str(body.decode()) #    json     
    output = json.loads(output) #   python object
    r.set(output['user_id'], output['crosswalk_id'])

receiver = Receiver('rabbitmq-closest-crosswalk')
thread = Thread( target = receiver.setQueue, args = ('output', callback) )   #   QUEUE INPUT
thread.start()


@app.route("/closestCrosswalk", methods=['POST'])
def closestCrosswalk():

    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = str(request.json.get('id'))
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        json =  '{ "id":' + str(id)+ ',"latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + '}'
        
        sender = Sender('rabbitmq-closest-crosswalk')
        sender.setQueue('input')   #   QUEUE OUTPUT
        sender.send(json)
        sender.close()

        # TODO criar Thread e enviar localização do vehicle/ pedestre para o respetivo micro-serviço

        if r.exists(id): 
            notification = str(r.get(id).decode())
            # TODO criar Thread e enviar counters
            r.delete(id)
            return notification
        else: return "no notifications"
    else: return "ko"


# PARA DEBUGGING
@app.route("/getClosestCrosswalks", methods=['GET'])
def getClosestCrosswalks():
    keys = r.keys()
    if not keys: 
        return "[]"
    else:
        res = "["
        for key in keys:
            crosswalk_id = str(r.get(key).decode())
            res += '{"user_id":' + str(key.decode()) + ", " + '"closest_crosswalk_id":' + crosswalk_id + "}, "
            res = res[:-2]
        res += "]"
        return res


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5007", debug=True)
