## Solution to Challenge 10

1. Open _docker-compose.yml_
2. Add a `volumes` entry to the influx service definition that maps a data directory on the host
```
volumes:
  - "./data:/data"
```


## Challenge 11

Throughout this workshop we have been publishing the service ports for our
microservices. As a result, the services cannot be scaled on an individual host
beyond a single instance. Another reason that the containers cannot scale beyond
a single instance per host is that they each have the `container_name` property set. For
this challenge, update the _docker-compose.yml_ file so that the frontend
container can be scaled to more than one instance per docker host.

__hint__ read the details of [docker-compose](https://docs.docker.com/compose/compose-file/)

__hint__ you should be able to run `docker-compose scale frontend=2` and have 2 instances 

## Next Up: [Challenge 12](../challenge12/README.md)
