## Solution to Challenge 6

1. The folder _challenge7/fuge_ contains an updated fuge configuration
2. Start influx manually (with docker 1.12.x) `docker start influx`
3. Start fuge by running `fuge shell fuge/compose-dev.yml`
4. Start the system in the shell by running `start all`
5. Open [http://localhost:10001]() to view the data points
6. Data is now streaming from the sensor through the broker to the serialization
service and being displayed on the front end
7. Type a numeric value (say 1000) into the text box at the top of the screen
and hit the button a couple of times
8. The chart should change to reflect the new offset


## Challenge 7

Fuge automatically watches your services for you and will detect any changes to your code and live restart them. To see this in action lets do a couple of things:

1. Firstly, the output from influx is a little verbose so lets fix that: edit the file _challenge7/fuge/fuge-config.js_ and change the tail setting to `false`.
2. Restart the fuge shell and start all services.
3. Next lets tail the serializer service by running `tail serializer`
4. Run `ps` to show the state of the system. It should report that fuge is watching all processes for changes but only tailing the serializer service
5. Open the file _challenge7/serializer/serializer.js_ and add some trace output

__hint__ If you're not familiar with Node.js you can output to the console using `console.log('hello');`.

## Next Up: [Challenge 8](../challenge8/README.md)
