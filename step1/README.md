# Step 1

![image](../images/step1.png)

In this step we have a simple front end for our system. Lets start off by installing some dependencies and running it. Do the following:

If you haven't done so already, start by running `npm install` in the top level directory of this repo. Then run the frontend as follows:

1. `cd frontend/api`
2. `npm start`

Point your browser to http://localhost:10001. You should see a chart. Simple!

## Challenge
Next we are going to start up our database. To do this we are going to take advantage of Docker. If you haven't done this already you can fetch the influxDB container by running:

```
docker pull tutum/influxdb
```

Documentation on how to start the container can be found here: https://hub.docker.com/r/tutum/influxdb/

Your challenge is to startup the influxDB container. Once you have it running successfully open your browser and review the influx web interface.

## Next Up [step2](../step2/README.md)
