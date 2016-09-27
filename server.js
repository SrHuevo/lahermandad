var express = require('express');
var redirect = require('./controller/redirect');

var app = express();
var port = process.env.PORT || 8080;

app.get('/*', redirect.get);

app.listen(port);




//Heroku free no sleep
var http = require('http');
var options = [{
  host: 'http://paginaoficial.herokuapp.com'
}];

var min = 60000;
var max = 600000;
// and the formula is:
var random = function(){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval(function(){
	options.forEach(function(e){
		//http.get(e, function(res) {
		  //console.log('STATUS: ' + res.statusCode);
		//});
	});
}, random());
