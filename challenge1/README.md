# Frontend

![image](../images/challenge1.png)

In this challenge we have a simple frontend for our system. Let's start by
installing the dependencies and running it.

If you haven't done so already, start by running `npm install` in the top level
directory of this repo. Then run the frontend as follows:

```sh
cd frontend/
npm start
```

Point your browser to http://localhost:10001. You should see a chart. Simple!

## Challenge 1
Next we are going to start our database. To do this we are going to take
advantage of Docker. If you haven't done this already you can fetch the influxDB
container by running:

```sh
docker pull tutum/influxdb
```

Documentation on how to start the container can be found
[here](https://hub.docker.com/r/tutum/influxdb/).

Your challenge is to startup the InfluxDB container. Once you have it running
successfully, open your browser and review the influx web interface.

## Next Up: [challenge 2](../challenge2/README.md)
