function get(req, resp) {
	console.log('redirect: get')
	var redirect = getRedirect(req.url);
	resp.writeHead(301,
	  {
		  Location: redirect,
		  Cache-Control: 'no-cache'
	  }
	);
	resp.end();
}

function getRedirect(url) {
	if(url) {
		return 'http://hermandadurjc.wixsite.com/paginaoficial' + url;
	} else {
		return 'http://hermandadurjc.wixsite.com/paginaoficial';
	}
}

exports.get = get;
