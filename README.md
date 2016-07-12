![nearform](https://rawgit.com/nearform/msworkshop/master/assets/banner.svg)

# Developing Microservices
This workshop will walk you through creating and composing a set of
microservices in node.js using fuge, docker and docker-compose.

__Note:__ This is a beginners level workshop. Whilst you should be comfortable
with node.js modules and applications and have a basic understanding of docker
and it's principles we will be helping you through the basics. This workshop presents a series of fairly simple challenges to help you get up to speed with these technologies.

## The app
The app you're building is a sensor fed chart that provides realtime
data from a dummy sensor. This 'app' is broken down into a number of
individual services, each with its own well defined concern. as outlined in this diagram

![image](./images/target.png)

### Frontend
A simple web app that uses jQuery, Rickshaw charts, and WebSockets to show
a realtime graph of data being emitted by our sensor. This app has an API
which is included in the same microservice who's sole job is to talk to
and read from other microservices.

### Actuator
A small microservice that causes reads on the sensor based on an offset.

### Sensor
A dummy temperature sensor that sends out varying values based on what it
receives from the actuator.

### Serialization
A service that handles reads and writes in serial fashion to the database. Uses
websocket-stream to update the web app and thus the graph, in real time.

### Broker
A robust messaging layer build for IoT based devices. We use this to wire up
the actuator, serialiser and sensor in a loosely coupled fashion.

### Influx
A database in a container that the serialiser uses for robust storage of data.

Once we have built the application it should look a bit like this:

![image](./images/screen.png)

## The libraries

The system uses the following libraries and technologies:

### Rickshaw Charts
A charting library for the web.

http://code.shutterstock.com/rickshaw/

### hapi
A rich framework for building applications and services.

http://hapijs.com/

### websocket-stream
A web socket streams implementation for realtime communication to the browser.

https://www.npmjs.com/package/websocket-stream

### browserify
A module to let you require modules client side by bundling up dependencies.

http://browserify.org/

### Seneca
A Microservices library

http://senecajs.org/

### Mosca / MQTT
An MQTT broker that enables robust message, particularly suited to IoT.

https://github.com/mcollina/mosca

### InfluxDB
A time series database particularly suited to time sensitive data.

https://influxdb.com/

### Fuge
A microservice development environment

https://github.com/apparatus/fuge

### Docker
A container engine.

https://www.docker.com

## Setting up
To complete this workshop you will need node.js and some supporting tools installed on your laptop along with a working docker installation with an InfluxDB image.

You should follow the instruction for each component to get set up:

### node.js
Go to https://nodejs.org/en/ and download and install the latest stable build for your system.

### fuge
Once you have installed node.js fuge may be installed by running:
```
npm install -g fuge
```

### cURL
Windows does not come with cURL included in CMD.exe. If you are using Windows please install cURL ensuring you select the version
that matches your installed version of Windows. cURL can be found at [https://curl.haxx.se/download.html](). Please use the Windows
generic version if using CMD.exe.

### Docker
Go to https://docs.docker.com/docker-for-mac/ or https://docs.docker.com/docker-for-windows/ and download and install the latest version.

Confirm that all is well by running: `docker ps`

This tutorial uses a docker [influx db container](https://hub.docker.com/r/tutum/influxdb/) you should pull this container using the following command:

```
docker pull tutum/influxdb
```

you should also pull a node.js container using:

```
docker pull node
```

Once you have the following complete its time to move to challenge1.

### Workshop
You should clone this repository to your local machine:

```
git clone git@github.com:lloydbenson/microservices-workshop
```

You should then setup the repository by installing required node modules:

```
cd microservices-workshop
npm install
```

## Next Up [challenge1](./challenge1/README.md)

Credits:  This was heavily borrowed and modified from https://github.com/micro-services-tutorial-iot.  This was modified to work with another workshop.


[Docker Cheat Sheet]: https://github.com/wsargent/docker-cheat-sheet
