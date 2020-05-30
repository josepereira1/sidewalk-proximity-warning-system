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

	sudo docker tag spws bakincode/spws
	sudo docker push bakincode/spws

	sudo docker tag closest-crosswalk bakincode/closest-crosswalk
	sudo docker push bakincode/closest-crosswalk

	sudo docker tag monitoring bakincode/monitoring
	sudo docker push bakincode/monitoring

j1:
	rm -r -f jmeter-results-1/
	jmeter -n -t users-1000requests-1.jmx -l jmeter-results-1/results.txt -e -o jmeter-results-1/

j2:
	rm -r -f jmeter-results-2/
	jmeter -n -t users-10000requests-1.jmx -l jmeter-results-2/results.txt -e -o jmeter-results-2/

cp_all: cp_composer cp_script

# copia a configuração da infraestrutura (docker-compose.yml) para o MASTER (VM1)
cp_composer:
	scp docker-compose-for-swarm.yml vagrant@${MASTER_IP}:${ew}docker-compose.yml

# master.sh - faz o deploy dos swarm
cp_script:
	scp master.sh vagrant@${MASTER_IP}:${ew}
