export INFLUX_HOST=$(docker ps -a | grep 'influxdb' | awk '{print $1}' | xargs docker inspect --format '{{ .NetworkSettings.IPAddress }}')
export SERIALIZER_PORT=10000
node .
