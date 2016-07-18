'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const WebStream = require('./webStream');

const serverConfig = {
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
};

const server = new Hapi.Server(serverConfig);
server.connection({ port: 10001 });
server.register(Inert, () => {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  const webStream = WebStream(server.listener);

  let i = 0;
  setInterval(() => {
    const randInt = Math.floor(Math.random() * 100);
    const temp = Math.round((Math.sin(i++ / 40) + 4) * (randInt + 200));
    webStream.emit([{time: (new Date()).getTime(), sensorId: '1', temperature: temp}]);
  }, 1000);

  server.start(() => {
    console.log(`listening at http://localhost:${server.info.port}`);
  });
});
