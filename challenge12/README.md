## Solution to Challenge 11

1. Open _docker-compose.yml_
2. Delete the entry for `container_name`
```
container_name: frontend
```
3. Delete the published port for the frontend
```
ports:
  - 10001:10001
```
4. Test by running `docker-compose scale frontend=2`


## Challenge 12

Thats it - congratulations - you have succeeded in building an IoT microservice
based system out of docker containers!!
