from flask import *
import json
from sender import Sender
from receiver import Receiver
from threading import Thread

closestCrosswalks = {}

app = Flask(__name__)

@app.route("/closestCrosswalk", methods=['POST'])
def closestCrosswalk():
    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = request.json.get('id')
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        json =  '{ "id":' + str(id)+ ',"latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + '}'
        
        sender = Sender('rabbitmq-closest-crosswalk')
        sender.setQueue('input')   #   QUEUE OUTPUT
        sender.send(json)
        sender.close()
        return "ok"
    else: return "ko"

#   APENAS PARA DEBUG
def callback(ch, method, properties, body):
    global closestCrosswalks
    output = body.decode() #    json
    output = json.loads(output) #   python object
    closestCrosswalks[output['user_id']] = output


receiver = Receiver('rabbitmq-closest-crosswalk')
thread = Thread( target = receiver.setQueue, args = ('output', callback) )   #   QUEUE INPUT
thread.start()

@app.route("/getClosestCrosswalks", methods=['GET'])
def getClosestCrosswalks():
    global closestCrosswalks
    return jsonify(closestCrosswalks)


@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5007", debug=True)
