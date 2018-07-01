# Multiple docker compose services with common network

Sometimes it is needed to share some resources between few docker compose services. For example, you are creating microservices with common database.  

To reach resource hosted on other service you need to create docker network and configure it as external network for both services.

In this example we are creating common network, master service with nginx and slave service with curl, witch can call nginx resource as well. 

```bash
# create and check network
docker network create services-common-network
docker network ls | grep services-common-network
 
# create master service
docker-compose -f master/docker-compose.yml up -d
 
# create slave service and test master nginx from slave
docker-compose -f slave/docker-compose.yml up -d
docker-compose -f slave/docker-compose.yml run alpine-curl nginx
```

To remove network you need to stop your services first (you can't remove network with active endpoints). 

```bash
docker-compose -f master/docker-compose.yml stop
docker-compose -f slave/docker-compose.yml stop
docker network rm services-common-network
```
