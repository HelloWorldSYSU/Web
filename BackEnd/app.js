var http = require('http');

var server = http.createServer(function (request, response) {
	console.log("Request received");
	response.writeHead(200, { 'Content-Type': 'text/plain'});
	response.write('Hello world');
	response.end();
});

server.listen(80, "0.0.0.0");