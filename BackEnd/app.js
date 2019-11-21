var http = require('http');
var fs = require('fs')
var path = require('path')

var h5path = path.resolve(__dirname, '..');
h5path += '\\FrontEnd\\panda\\panda.html'


console.log(h5path);

var server = http.createServer(function (request, response) {
	console.log("Request received");
	response.writeHead(200, { 'Content-Type': 'text/html'});
	fs.createReadStream(h5path, 'utf8').pipe(response);
});

server.listen(80, "0.0.0.0");