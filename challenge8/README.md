## Solution to Challenge 7

1. The file _challenge8/fuge/fuge-config.js_ has been updated to set tail to `false`
2. The file _challenge8/serializer/serializer.js_ has some additional trace added to it
2. The file _challenge8/frontend/api/index.js_ has some additional tracing added to it

## Challenge 8

Fuge is targeted at running an entire or part of a microservice system in
development mode. However, the format used is fully compatible with tools like
docker-compose. Docker compose allows you to run sets of connected containers.
Running containers in development can be slow, however, if you are deploying
using containers then building containers locally in order to check system
validity is a good idea.

A docker-compose file has been provided for you in
_challenge8/fuge/docker-compose.yml_. Your challenge is to run the
_docker-compose.yml_ file using docker-compose. You can find documentation on
docker-compose [here](https://docs.docker.com/compose/).

## Next Up: [Challenge 9](../challenge9/README.md)
