'use strict';

var mqtt = require('mqtt').connect('mqtt://' + process.env.BROKER_HOST + ':1883');
var seneca = require('seneca')();



seneca.add({role: 'actuate', cmd: 'set'}, function(args, callback) {
  var payload = JSON.stringify({'offset':  parseInt(args.offset, 10) });
  mqtt.publish('temperature/1/set', new Buffer(payload), {qos: 0, retain: true}, function (err) {
    callback(err);
  });
});

seneca.listen({port: process.env.ACTUATOR_PORT});

