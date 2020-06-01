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


j_all: j1 j2 j3 j4 j5 j6

j1:
	rm -r -f jmeter-results-1/
	jmeter -n -t crud-vehicle-users-10.jmx -l jmeter-results-1/results.txt -e -o jmeter-results-1/

j2:
	rm -r -f jmeter-results-2/
	jmeter -n -t crud-vehicle-users-100.jmx -l jmeter-results-2/results.txt -e -o jmeter-results-2/

j3:
	rm -r -f jmeter-results-3/
	jmeter -n -t crud-vehicle-users-1000.jmx -l jmeter-results-3/results.txt -e -o jmeter-results-3/

j4:
	rm -r -f jmeter-results-4/
	jmeter -n -t spws-users-10.jmx -l jmeter-results-4/results.txt -e -o jmeter-results-4/

j5:
	rm -r -f jmeter-results-5/
	jmeter -n -t spws-users-100.jmx -l jmeter-results-5/results.txt -e -o jmeter-results-5/

j6:
	rm -r -f jmeter-results-6/
	jmeter -n -t spws-users-1000.jmx -l jmeter-results-6/results.txt -e -o jmeter-results-6/


cp_all: cp_composer cp_script

# copia a configuração da infraestrutura (docker-compose.yml) para o MASTER (VM1)
cp_composer:
	scp docker-compose-for-swarm.yml vagrant@${MASTER_IP}:${ew}docker-compose.yml

# master.sh - faz o deploy dos swarm
cp_script:
	scp master.sh vagrant@${MASTER_IP}:${ew}
