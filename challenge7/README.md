## Solution to challenge 6
1. the folder challenge7/fuge contains an updated fuge configuration
2. start fuge up by running `fuge shell fuge/compose-dev.yml`
3. start the system in the shell by running `start all`
4. open http://localhost:10001 to view the data points
5. data is now streaming from the sensor through the broker to the serialization
service and being displayed on the front end
6. type a numeric value (say 1000) into the text box at the top of the screen
and hit the button
7. The chart should change to reflect the new offset


## Challenge 7

Fuge automatically watches your services for you and will detect any changes to your code and live restart them. To see this in action
lets do a couple of things:

1. Firstly, the output from influx is a little verbose so lets fix that: edit the file challenge7/fuge/fuge-config.js and change the tail setting to false
2. next restart the fuge shell and start all services.
3. next lets tail the serializer service by running `tail serializer`
4. run `ps` to show the state of the system it should report that fuge is watching all processes for changes but only tailing the serializer service
5. open the file challenge7/serializer/serializer.js and add some trace output

__hint__ if you're not familiar with node.js you can output to the console using `console.log('hello')`

## Next Up [challenge8](../challenge8/README.md)
