# cria uma nova imagem a partir da imagem oficial do python
FROM python:3.7-alpine

# define a WORKDIR no filesystem do docker, isto é, onde se quer instalar o programa dentro do container do docker
WORKDIR /usr/src/calculateDistanceInCrosswalk

# diz ao docker para aceitar conexões (para dentro ou fora) na porta 5001
EXPOSE 5006

# copia toda a pasta atual para a WORKDIR (definida antes) do docker
COPY . .

# instala as dependências definidas no ficheiro requirements.txt e instala os modulos locais
RUN pip3 install --no-cache-dir -r requirements.txt

# corre o programa pretendido
CMD python3 calculate-distance-in-crosswalk.py