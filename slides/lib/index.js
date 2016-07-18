var Hapi = require('hapi');
var HapiReveal = require('hapi-reveal');
var Inert = require('inert');
var Vision = require('vision');

//create server
var server = new Hapi.Server();
server.connection({
    port: 8082
});

server.register([Vision, Inert, HapiReveal], function (err) {
    if (err) {
        console.error('Failed to load plugin:', err);
    }
});

server.start(function () {

    //console
    console.log("Presentation Started: " + server.info.uri);
    console.log("Hapi Version: "+server.version);
});

