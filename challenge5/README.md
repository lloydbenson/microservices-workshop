## Solution to Challenge 4

1. The folder _challenge5/fuge_ contains configuration files for the fuge shell
2. Start influx manually (with docker 1.12.x) `docker start influx`
3. Start fuge by running `fuge shell fuge/compose-dev.yml`
4. Start the system in the shell by running `start serializer` and `start frontend`
5. Open [http://localhost:10001]() to view the chart
6. Use the script _challenge5/serializer/testWrite.sh_ to send some data to the serialization service

__note__ Fuge is now running a mixture of processes and docker containers. It does this by:

* Injecting environment variables into each process
* Running an internal proxy to bridge network connections between processes and containers

## Challenge 5
![image](../images/challenge5.png)

Now that we have our serializer service running, lets add the dummy sensor and
our MQTT broker. The code for the sensor is in _challenge5/sensor_ and for the
broker in _challenge5/broker_.

Your challenge is to add this into the fuge `compose-dev.yml` file and get the
system running. Once you do this you should be able to start the front end,
influx, and your microservices from the fuge shell and see data streaming from
the sensor to the front end.

If you are running docker v1.12.x remember to start influx using docker outside of fuge while we wait for a fix for the bug. `docker start influx`

## Next Up: [Challenge 6](../challenge6/README.md)
