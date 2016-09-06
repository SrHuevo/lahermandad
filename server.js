var http = require('http');
var server = http.createServer();

var port = process.env.PORT || 8080;

function handler(req, resp) {
	var redirect = getRedirect(req.url);
	resp.writeHead(301,
	  {Location: redirect}
	);
	resp.end();
}
http://hermandadurjc.wixsite.com/paginaoficial/que-hacemos
server.on('request', handler);

server.listen(port);

function getRedirect(url) {
	if(url === '/apocalipsiszombie'){
		return 'http://hermandadurjc.wixsite.com/paginaoficial/apcalipsis-zombie';
	} else {
		return 'http://hermandadurjc.wixsite.com/paginaoficial'
	}
}

var http = require('http');
var options = [{
  host: 'lahermandad.herokuapp.com'
}];


setInterval(function(){
	options.forEach(function(e){
		http.get(e, function(res) {
		  console.log('STATUS: ' + res.statusCode);
		});
	});
},60000 * Math.random() * 10);