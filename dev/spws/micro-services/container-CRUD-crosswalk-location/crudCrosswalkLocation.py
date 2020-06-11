from flask import *
from flask_cors import CORS
import psycopg2
import time
import sys
import requests

#hostnameLocal = "localhost"
hostnameContainer = "postgres-crud-crosswalk-location"
tableName = "crosswalk"

# intervalo de tempo para tentar conectar aos serviços externos
TIME = 5

# espera que o postgreSQL inicie, tenta estabelecer conexão de 5 em 5 segundos
while True:
    try:
        time.sleep(TIME) 
        conn = psycopg2.connect(database="postgres", user="postgres", password="password", host=hostnameContainer, port=5432)
        cursor = conn.cursor()
        break
    except:
        print("connection to postgreSQL failed, trying again...")

# incia o servidor
app = Flask(__name__)	
CORS(app) # enables CORS support on all routes, for all origins and methods

#   esta definição é responsável por executar uma query genérica
#   query a ser executada
def executeQuery(query):
    try:
        cursor.execute(query)
        conn.commit()
        return "ok"
    except (Exception, psycopg2.Error) as error:
        conn.rollback()
        return error

#   cria o schema, isto é, as tabelas necessárias 
#   no input
@app.route("/createSchema", methods=['GET'])
def createSchema():
	create_table_query = "CREATE TABLE if not exists " + tableName + '''(
		ID INT PRIMARY KEY     NOT NULL,
		LATITUDE         FLOAT    NOT NULL,
		LONGITUDE        FLOAT    NOT NULL,
		ELEVATION        FLOAT    NOT NULL);'''
	return executeQuery(create_table_query)

#   drop/eliminação do schema/base de dados
#   no input
@app.route("/dropSchema", methods=['GET'])
def dropSchema():	
	drop_table_query = "drop table if exists " + tableName + ";"
	return executeQuery(drop_table_query)

#   cria/adiciona uma crosswalk à base de dados
#   input (JSON): {"id": 0, "latitude": 1, "longitude": 1, "elevation": 1} 
@app.route("/createCrosswalk", methods=["POST"])
def createCrosswalk():
    if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
        id = str(request.json['id'])
        select_record_query = "select * from " + tableName + " where id=" + id + ";"
        executeQuery(select_record_query)
        try:
            crosswalk_record = cursor.fetchone()
        except:
            return "schema not created yet"
        if crosswalk_record is not None: return "crosswalk already exists" # já existe crosswalk com esse id
        latitude = request.json['latitude']
        longitude = request.json['longitude']
        elevation = request.json['elevation']
        create_record_query = "INSERT INTO " + tableName + ''' (id, latitude, longitude, elevation) VALUES 
        (''' + str(id) + ''',
        ''' + str(latitude) + ''',
        ''' + str(longitude) + ''',
        ''' + str(elevation) + ");"
        print (create_record_query)

        return executeQuery(create_record_query)
    else:
        return "ko"

#   retorna os dados (id, localização) referentes a uma crosswalk
#   input (JSON): {"id": 1}
@app.route("/readCrosswalk", methods=["POST"])
def readCrosswalk():
    if('id' in request.json):
        id = str(request.json['id'])
        select_record_query = "select * from " + tableName + " where id=" + id + ";"
        executeQuery(select_record_query)
        try:
            crosswalk_record = cursor.fetchone()
        except:
            return "schema not created yet"
        if crosswalk_record is None: return "crosswalk does not exist" # não existe crosswalk com esse id
        latitude = crosswalk_record[1]
        longitude = crosswalk_record[2]
        elevation = crosswalk_record[3]
        json =  '{ "id":' + str(id)+ ', "latitude":' + str(latitude) + ', "longitude":' + str(longitude) + ', "elevation":' + str(elevation) + '}'
        return json
    else:
        return "ko"

#   retorna os ids de todas as crosswalks
#   no input
@app.route("/readAllCrosswalksIds", methods=["GET"])
def readAllCrosswalksIds():
    select_record_query = "select * from " + tableName + ";"
    executeQuery(select_record_query)
    try:
        crosswalk_records = cursor.fetchall()
    except:
        return "schema not created yet"
    if len(crosswalk_records) == 0: return "[]"
    json = "["
    for row in crosswalk_records: 
        id = str(row[0])
        crosswalk =  '{ "id":' + id +  '},'
        json += crosswalk
    json = json[:-1] # remove last comma
    json += "]"
    return json

#   retorna os dados (id, localização) de todas as crosswalks
#   no input
@app.route("/readAllCrosswalks", methods=["GET"])
def readAllCrosswalks():
    select_record_query = "select * from " + tableName + ";"
    executeQuery(select_record_query)
    try:
        crosswalk_records = cursor.fetchall()
    except:
        return "schema not created yet"
    if len(crosswalk_records) == 0: return "[]"
    json = "["
    for row in crosswalk_records: 
        id = str(row[0])
        latitude = row[1]
        longitude = row[2]
        elevation = row[3]
        crosswalk =  '{ "id":' + id + ', "latitude":' + str(latitude) + ', "longitude":' + str(longitude) + ', "elevation":' + str(elevation) + '},'
        json += crosswalk
    json = json[:-1] # remove last comma
    json += "]"
    return json

#   atualiza os dados (id, localização) de uma crosswalk
#   input (JSON): {"id": 0, "latitude": 1, "longitude": 1, "elevation": 1} 
@app.route("/updateCrosswalk", methods=['POST'])
def updateCrosswalk():
    if 'id' in request.json and 'latitude' in request.json and 'longitude' in request.json and 'elevation' in request.json:
        id = str(request.json['id'])
        select_record_query = "select * from " + tableName + " where id=" + id + ";"
        executeQuery(select_record_query)
        try:
            crosswalk_record = cursor.fetchone()
        except:
            return "schema not created yet"
        if crosswalk_record is None: return "crosswalk does not exist" # não existe crosswalk com esse id
        latitude = request.json['latitude']
        longitude = request.json['longitude']
        elevation = request.json['elevation']
        update_record_query = "UPDATE " + tableName + ''' SET 
        latitude = ''' + str(latitude) + ''',
        longitude = ''' + str(longitude) + ''',
        elevation = ''' + str(elevation) + '''
        where id = ''' + id + ";"
        return executeQuery(update_record_query)
    else:
        return "ko"

#   elimina/apaga uma crosswalk dado o id
#   input (JSON): {"id": 0}
@app.route("/deleteCrosswalk", methods=["POST"])
def deleteCrosswalk():
    if('id' in request.json):
        id = str(request.json['id'])
        select_record_query = "select * from " + tableName + " where id=" + id + ";"
        executeQuery(select_record_query)
        try:
            crosswalk_record = cursor.fetchone()
        except:
            return "schema not created yet"
        if crosswalk_record is None: return "crosswalk does not exist" # não existe crosswalk com esse id
        delete_record_query = "delete from " + tableName + " where id=" + id + ";"
        return executeQuery(delete_record_query)
    else:
        return "ko"

@app.route("/", methods=['GET', 'POST'])
def root():
        return "service is ready"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5002", debug=True)