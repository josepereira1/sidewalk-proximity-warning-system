from flask import *
from flask_cors import CORS
import requests

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

@app.route("/registerCrosswalk", methods=['POST'])
def registerCrosswalkPOST(): 
    if 'action' in request.form: 
        
        if request.form['action'] == 'submit':

            if request.form and 'crosswalk_id' in request.form and 'latitude' in request.form and 'longitude' in request.form and 'elevation' in request.form:   
            
                response = requests.post("http://spws:5007/registerCrosswalk", json = { "crosswalk_id": request.form['crosswalk_id'], "latitude": request.form['latitude'], "longitude": request.form['longitude'], "elevation": request.form['elevation'] });
                
                global registerCrosswalkHTMLError

                if response.text == "ok":
                    global registerCrosswalkHTMLSucess
                    return registerCrosswalkHTMLSucess
                elif response.text == "crosswalk already exists":
                    global registerCrosswalkHTMLWarning
                    return registerCrosswalkHTMLWarning
                elif response.text == "schema not created yet":
                    return registerCrosswalkHTMLError
                elif response.text == "ko":
                    return registerCrosswalkHTMLError
                else: 
                    return "internal server error" + response.text

            else: 
                return "internal server error - input error"

        else:
            return "internal server error - unknown action"

    else:
        return "internal server error - action is not defined"

@app.route("/registerCrosswalk", methods=['GET'])
def registerCrosswalkGET():
    global registerCrosswalkHTML
    return registerCrosswalkHTML            

@app.route("/", methods=['GET', 'POST'])
def root(): 
    global indexHTML
    return indexHTML

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8080", debug=True)
