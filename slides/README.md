
## Developing Microservices
adapted from [_micro-services-iot_](https://github.com/nearform/micro-services-tutorial-iot)



### Microservices are...
* not a new concept; see unix
* small, focused, decoupled components
* independently deployable
* particularly suited to Node.js



### Some Benefits
* accelerated development
* inherently scalable
* optimized for delete



### Accelerated Development
* small components (easily grokked)
* independently deployable
* easily replaceable



### Inherently Scalable
* distributed by nature
* favor containerization



### Optimized for Delete
* Greg Young - [vimeo.com/108441214](https://vimeo.com/108441214)



### But Enough Theory!
## This is a workshop...



### Prerequisites
* docker 1.12.x
* node 4 or newer



### Setup
```
git clone https://github.com/lloydbenson/microservices-workshop
docker pull tutum/influxdb
docker pull node:6-slim
```



### Let's build a system...
<img src="/images/target.png">



### It looks like this...
<img src="/images/screen.png">



### We will be using...
* Rickshaw charts + socket.io
* Node.js + hapi
* Seneca (Microservices framework)
* Mosca (MQTT broker)
* InfluxDB (Time Series database)
* Docker



### You should now have
```
## should execute and show nothing running
docker ps
## should show 2 images loaded (tutum/influxdb and node)
docker images
```



### Get the Workshop
```
git clone https://github.com/lloydbenson/microservices
```



### Build the Frontend
* _README.md_
* `npm install`
* `cd frontend`
* `npm start`
* open [http://localhost:10001]()



### Challenge 1
* start up the database
* browse the influx web interface
* hint: [https://hub.docker.com/r/tutum/influxdb]()



### Solution to Challenge 1
```
docker run -d -p 8083:8083 -p 8086:8086 tutum/influxdb
step1/services/influx/run.sh
docker-machine ip default
docker ps -a | grep 'tutum/influxdb'
   | awk '{print $1}' | xargs docker inspect
   --format '\{{ .NetworkSettings.IPAddress }}'

[http://localhost:8083]() (influx console)
```



### Challenge 2
<img src="/images/challenge1.png">



### Challenge 2
* script start of challenge2/services/serializer
* send data via curl
* check that data was written by using the influx browser
* hint: look for process.env in serializer.js
* hint: select * from temperature; (from temperature db)

```
curl -X POST --header "Content-Type:application/json"
-d '{"role": "serialize", "cmd": "write", "sensorId": "1",
     "temperature": 32}' http://localhost:10000/act
```



### Solution to Challenge 2
* challenge3/services/influx/run.sh|bat
* challenge3/services/serializer/run.sh|bat
* challenge3/services/serializer/testWrite.sh|bat
* [http://localhost:8083]() (influx console)



### Challenge 3
<img src="/images/challenge2.png">



### Challenge 3
* make script to start challenge3/frontend
* start up influxDB frontend and serializer
* use testWrite.sh|bat to send data
* verify it appears in the frontend
* hint: look for process.env in frontend code



### Solution to Challenge 3
* challenge4/services/influx/run.sh|bat
* challenge4/services/serializer/run.sh|bat
* challenge4/frontend/run.sh|bat
* challenge4/services/serializer/testWrite.sh|bat
* [http://localhost:10001]() (frontend)



### Challenge 4
<img src="/images/fuge-logo.png">



### Challenge 4
* use fuge shell to start it up
* challenge4/fuge (compose-dev.yml and fuge-config.json)
* hint: stop all processes/containers
* hint: npm install -g fuge
* hint: fuge shell
* [fuge doc](https://github.com/apparatus/fuge)



### Solution to Challenge 4
* cd challenge4/fuge
* fuge shell compose-dev.yml
* start all (in shell)
* challenge4/services/serializer/testWrite.sh|bat
* [http://localhost:10001]()



### Challenge 5
<img src="/images/challenge5.png">



### Challenge 5
* add sensor and broker to fuge yml file
* hint: challenge5/services/(broker|sensor)



### Solution to Challenge 5
* cd challenge6/fuge
* fuge shell compose-dev.yml
* start all (in shell)
* challenge6/services/serializer/testWrite.sh|bat
* [http://localhost:10001]()



### Challenge 6
<img src="/images/challenge6.png">



### Challenge 6
* add actuator to compose-dev.yml
* actuator provides an offset
* hint: challenge6/services/acuator
* _note_: frontend now has input and button which does a /set



### Solution to Challenge 6
* cd challenge7/fuge
* fuge shell compose-dev.yml
* start all (in shell)
* [http://localhost:10001]()
* type 1000 and click button



### Challenge 7
* limit default tail to false in fuge-config.js
* fuge shell and start all
* tail serializer
* ps to show state
* add trace output to challenge7/services/serializer/serializer.js
* add trace output to challenge7/frontend/api/index.js
* hint: output to console by console.log('hello')



### Solution to Challenge 7
* challenge8/fuge/fuge-config.js tail set to false
* challenge8/services/serializer/serializer.js (has additional trace)
* challenge8/frontend/api/index.js (has additional trace)



### Challenge 8
* use traditional docker-compose instead to show its compatibility
* hint: [https://docs.docker.com/compose]()



### Solution to Challenge 8
* cd challenge9/fuge
* docker-compose up
* http://localhost:10001 to verify everything



### Resources
* [InfluxDB Docker](https://hub.docker.com/r/tutum/influxdb/)
* [Fuge](https://github.com/apparatus/fuge)
* [Docker Compose](https://docs.docker.com/compose)



### Questions?
