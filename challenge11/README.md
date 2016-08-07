## Solution to Challenge 10

1. Open _docker-compose.yml_
2. Add a `volumes` entry to the influx service definition that maps a data directory on the host
```
volumes:
  - "./data:/data"
```


## Challenge 11

Throughout this workshop we have been publishing the service ports for our
microservices. In production, you will not want to make all of your
microservices public. For this challenge, update the _docker-compose.yml_
file so that only the frontend and influx containers are exposed outside of the
host.

__hint__ read the details of docker-compose [expose](https://docs.docker.com/compose/compose-file/#/expose)


## Next Up: [Challenge 12](../challenge12/README.md)
