from flask import Flask
from flask_cors import CORS

# variável global, lê o ficheiro 1 única vez para todos os pedidos
f = open("index.html", "r")
html = f.read()
f.close()

# inicia o servidor
app = Flask(__name__)
CORS(app) # enables CORS support on all routes, for all origins and methods

@app.route("/", methods=['GET', 'POST'])
def root():
    global html
    return html


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="80", debug=True)
