from flask import *
import json
import redis

app = Flask(__name__)

@app.route("/updateLocation", methods=['POST'])
def updateLocation():   
    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = request.json.get('id')
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')
        r = redis.Redis(host='localhost', port=6379, db=0)
        
        json =  '{ "id":' + str(id)+ ',"latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + '}'

        r.set(id, json)
        
        return "ok"
    else: return "ko"


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5003", debug=True)
