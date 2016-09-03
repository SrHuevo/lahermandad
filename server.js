var http = require('http');
var server = http.createServer();

function handler(req, resp) {
	resp.writeHead(301,
	  {Location: 'http://hermandadurjc.wixsite.com/paginaoficial/proximas-actividades'}
	);
	resp.end();
}

server.on('request', handler);

server.listen(8080);