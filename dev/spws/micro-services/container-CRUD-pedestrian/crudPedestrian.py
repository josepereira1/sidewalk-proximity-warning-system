from flask import *
import json
import redis

app = Flask(__name__)

r = redis.Redis(host='redis-crud-pedestrian', port=6379)

# UPDATE/ CREATE
@app.route("/updateLocation", methods=['POST'])
def updateLocation():
    if('id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json):
        id = request.json.get('id')
        latitude = request.json.get('latitude')
        longitude = request.json.get('longitude')
        elevation = request.json.get('elevation')

        json =  '{ "id":' + str(id)+ ',"latitude":' + str(latitude) + ',"longitude":' + str(longitude) + ',"elevation":' + str(elevation) + '}'

        r.set(id, json)

        return "ok"
    else: return "ko"

# GET
@app.route("/getLocation", methods=["POST"])
def getLocation():
    if('id' in request.json and r.exists(request.json.get('id'))):
        return r.get(request.json.get('id'))

    return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)
