# MASTER
VM1_IP = 10.0.0.101
# SLAVES
VM2_IP = 10.0.0.102

composer_location = ~/ew/
script_location = ~/ew/docker_images/
docker_imgs_location = ~/ew/docker_images/

cp_all: cp_composer cp_imgs cp_scripts

# copia as imagens de todos os micro-serviços para todos os SLAVES
cp_imgs: 
	scp -r container-CRUD-pestrian/ vagrant@${VM2_IP}:${docker_imgs_location}
	scp -r container-CRUD-vehicle/ vagrant@${VM2_IP}:${docker_imgs_location}

# copia a configuração da infraestrutura (docker-compose.yml) para o MASTER
cp_composer:
	scp docker-compose.yml vagrant@${VM1_IP}:${composer_location}

# slave.sh - instala os micro-serviços (copiados anteriormente)
# master.sh - faz o deploy dos swarm
cp_scripts:
	scp master.sh vagrant@${VM1_IP}:${script_location}
	scp slave.sh vagrant@${VM2_IP}:${script_location}
