from flask import Flask, redirect
from flask_cors import CORS

SPWS_URL = "localhost:5007"

# variável global, lê o ficheiro 1 única vez para todos os pedidos
f = open("monitoring.html", "r")
monitoringHTML = f.read()
f.close()

f = open("registerCrosswalk.html", "r")
registerCrosswalkHTML = f.read()
f.close()

f = open("registerCrosswalkSucess.html", "r")
registerCrosswalkHTMLSucess = f.read()
f.close()

f = open("registerCrosswalkWarning.html", "r")
registerCrosswalkHTMLWarning = f.read()
f.close()

f = open("registerCrosswalkError.html", "r")
registerCrosswalkHTMLError = f.read()
f.close()

f = open("index.html", "r")
indexHTML = f.read()
f.close()

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/monitoring", methods=['GET'])
def monitoring(): 
    global monitoringHTML
    return monitoringHTML

@app.route("/registerCrosswalk", methods=['GET'])
def registerCrosswalk(): 
    if 'action' in request.form and request.form['action'] == 'back':
        # encaminha para a root
        return redirect("localhost:8080", code=302)
    if 'submit' in request.form and 'crosswalk_id' in request.form and 'latitude' in request.form and 'longitude' in request.form and 'elevation' in request.form:   
        response = requests.post(SPWS_URL + "/registerCrosswalk", json = { "crosswalk_id": request.form['crosswalk_id'], "latitude": request.form['latitude'], "longitude": request.form['longitude'], "elevation": request.form['elevation'] });
        if response.text == "crosswalk already exists":
            global registerCrosswalkHTMLWarning
            return registerCrosswalkHTMLWarning
        if response.text == "schema not created yet":
            global registerCrosswalkHTMLError
            return registerCrosswalkHTMLError
        global registerCrosswalkHTMLSucess
        return registerCrosswalkHTMLSucess
    else: 
        return "ko"        

@app.route("/registerCrosswalkPage", methods=['GET'])
def registerCrosswalkPage(): 
    global registerCrosswalkHTML
    return registerCrosswalkHTML

@app.route("/", methods=['GET', 'POST'])
def root(): 
    global indexHTML
    return indexHTML

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8080", debug=True)
