# cria uma nova imagem a partir da imagem oficial do python
FROM python:3.7-alpine

# define a WORKDIR no filesystem do docker, isto é, onde se quer instalar o programa dentro do container do docker
WORKDIR /usr/src/crudCrosswalkLocation

# diz ao docker para aceitar conexões (para dentro ou fora) na porta 5002
EXPOSE 5002

# copia toda a pasta atual para a WORKDIR (definida antes) do docker
COPY . .

# necessário para que consiga instalar a biblioteca psycopg2
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
# instala as dependências definidas no ficheiro requirements.txt e instala os modulos locais
RUN pip3 install --no-cache-dir -r requirements.txt

# corre o programa pretendido
CMD python3 crudCrosswalkLocation.py