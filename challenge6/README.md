## Solution to Challenge 5

1. The folder _challenge6/fuge_ contains an updated fuge configuration
2. Start influx manually (with docker 1.12.x) `docker start influx`
3. Start fuge by running `fuge shell fuge/compose-dev.yml`
4. Start the system in the shell by starting each service `start serializer`, `start broker`...
5. Open [http://localhost:10001]() to view the data points
6. Data is now streaming from the sensor through the broker to the serialization
service and being displayed on the front end


## Challenge 6
![image](../images/challenge6.png)

For the final service in our system your challenge is to wire up the actuator
microservice. The actuator service is provided for you in
_challenge6/actuator_.

The actuator service will send an offset message to the sensor via the MQTT
broker. To enable the actuator you will need to add an entry into the fuge
configuration file `compose-dev.yml` as before

__Note__: A button and input field have been provided on the front end to call
the `/set` route for you.

Once you have your config ready, restart the system and point your browser to
the front end. You should see data flowing as before but now you should be able
to send an offset message and see the chart change in real time.

## Next Up: [Challenge 7](../challenge7/README.md)
