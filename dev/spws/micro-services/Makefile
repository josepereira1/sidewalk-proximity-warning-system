MASTER_IP = 10.0.0.101
ew = ~/ew/

push:
	sudo docker tag crud-crosswalk-counters bakincode/crud-crosswalk-counters
	sudo docker push bakincode/crud-crosswalk-counters

	sudo docker tag read-traffic-light bakincode/read-traffic-light
	sudo docker push bakincode/read-traffic-light

	sudo docker tag crud-crosswalk-location bakincode/crud-crosswalk-location
	sudo docker push bakincode/crud-crosswalk-location

	sudo docker tag crud-vehicle bakincode/crud-vehicle
	sudo docker push bakincode/crud-vehicle

	sudo docker tag crud-pedestrian bakincode/crud-pedestrian
	sudo docker push bakincode/crud-pedestrian

	sudo docker tag calculate-distance-in-crosswalk bakincode/calculate-distance-in-crosswalk
	sudo docker push bakincode/calculate-distance-in-crosswalk

cp_all: cp_composer cp_script

# copia a configuração da infraestrutura (docker-compose.yml) para o MASTER (VM1)
cp_composer:
	scp docker-compose-for-swarm.yml vagrant@${MASTER_IP}:${ew}docker-compose.yml

# master.sh - faz o deploy dos swarm
cp_script:
	scp master.sh vagrant@${MASTER_IP}:${ew}
