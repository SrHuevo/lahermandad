require('./util/onanismo');
var express = require('express');
var redirect = require('./controller/redirect');

var app = express();
var port = process.env.PORT || 8080;

app.get('/*', redirect.get);

app.listen(port);
