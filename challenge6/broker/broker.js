'use strict';

const mosca = require('mosca');
const Seneca = require('seneca');
const server = new mosca.Server({});

const seneca = Seneca();
seneca.client({
  host: process.env.SERIALIZER_HOST,
  port: process.env.SERIALIZER_PORT,
  pin: {
    role: 'serialize', cmd: 'write'
  }
});

server.published = (packet, client, cb) => {
  if (!packet.topic.match(/temperature\/[0-9]+\/read/)) {
    return cb();
  }

  const body = parse(packet.payload);

  body.role = 'serialize';
  body.cmd = 'write';
  seneca.act(body, cb);
};

function parse (body) {
  try {
    return JSON.parse(body);
  }
  catch (err) {
    return null;
  }
}
