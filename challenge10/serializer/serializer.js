'use strict';

const Seneca = require('seneca');
const Influx = require('influx');
const InfluxUtil = require('./influxUtil');

const seneca = module.exports.seneca = Seneca();


const createDatabase = function (cb) {
  setTimeout(() => {
    const initDb = Influx({host: process.env.INFLUX_HOST, username: 'root', password: 'root'});
    initDb.createDatabase('temperature', (err) => {
      if (err) {
        console.error(`ERROR: ${err}`);
      }

      cb();
    });
  }, 3000);
};


createDatabase(() => {
  const db = Influx({host: process.env.INFLUX_HOST, username: 'root', password: 'root', database: 'temperature'});
  const ifx = InfluxUtil(db);

  seneca.add({role: 'serialize', cmd: 'read'}, (args, cb) => {
    ifx.readPoints(args.sensorId, args.start, args.end, cb);
  });


  seneca.add({role: 'serialize', cmd: 'write'}, (args, cb) => {
    ifx.writePoint(args.sensorId, args.temperature, cb);
  });

  seneca.listen({port: process.env.SERIALIZER_PORT});
});
