Este ficheiro explica detalhadamente como instalar e configurar o cluster 'docker Swarm'.

1.
>> vagrant up
	instala as VMs configuradas no ficheiro Vagrantfile.
	neste caso cria 3 VMs (Master - VM1; Slaves - VM2 e VM3). Em todas instala o docker.

2. 
>> make cp_all
	copia o ficheiro que configura a infaestrutura (docker-compose.yml) para o Master (VM1).
	ainda copia o script (master.sh) para o MASTER

3.
>> ssh vagrant@10.0.0.101
	neste momento encontra-se dentro do Master.
>> cd ew/
>> sudo docker swarm init --advertise-addr 10.0.0.101
	cria o cluster.
>> sudo docker swarm join-token worker
	guardar o comando gerado para, posteriormente, adicionar os Slaves ao cluster.
	ex: docker swarm join --token <token> <master_ip>:<master_port>

4.
>> ssh vagrant@10.0.0.102
	neste momento encontra-se dentro de um dos Slaves.
>> sudo docker swarm join --token <token> <master_ip>:<master_port>
	com o comando guardado anteriormente, adiciona o Slave ao cluster.

5. 
fazer o ponto 4. para todos os Slaves. Ao fazer ssh atenção aos IPs diferentes de cada máquina.

6. 
>> ssh vagrant@10.0.0.101
	neste momento encontra-se dentro do Master.
>> cd ew/
>> sh master.sh
	configura o cluster, criado os serviços especificados no ficheiro docker-compose.yml.
>> sudo docker service ls
 	verificar que realmente todos os serviços estão a correr (poderá demorar algum tempo)


Comandos úteis:

parar e remover a stack do cluster:
	>> sudo docker stack ls
	>> sudo docker stack rm <stack_name>


executar um determinado programa no container:
	>> sudo docker ps
	>> sudo docker exec -it <container_name> <command_name>
	ex: sudo docker exec -it <container_name> /bin/bash