from flask import *
import json

app = Flask(__name__)

@app.route("/crudPestrian", methods=['POST'])
def foo():
  return "TODO"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5001", debug=True)