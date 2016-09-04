var http = require('http');
var server = http.createServer();

var port = process.env.PORT || 8080;

function handler(req, resp) {
	resp.writeHead(301,
	  {Location: 'http://hermandadurjc.wixsite.com/paginaoficial'}
	);
	resp.end();
}

server.on('request', handler);

server.listen(port);