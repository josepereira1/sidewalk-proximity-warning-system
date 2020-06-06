from flask import Flask
from flask_cors import CORS

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
    global registerCrosswalkHTML
    return registerCrosswalkHTML

@app.route("/registerCrosswalkSucess", methods=['GET'])
def registerCrosswalkSucess(): 
    global registerCrosswalkHTMLSucess
    return registerCrosswalkHTMLSucess

@app.route("/registerCrosswalkError", methods=['GET'])
def registerCrosswalkError(): 
    global registerCrosswalkHTMLError
    return registerCrosswalkHTMLError

@app.route("/registerCrosswalkWarning", methods=['GET'])
def registerCrosswalkWarning(): 
    global registerCrosswalkHTMLWarning
    return registerCrosswalkHTMLWarning

@app.route("/", methods=['GET', 'POST'])
def root(): 
    global indexHTML
    return indexHTML

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="80", debug=True)
