var debug = require('debug')('app');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var cors = require('cors');
var security = require('./lib/security');
var api = require('./lib/api');


var app = express();

app.use('/api', cors());

//External middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//internal middlewares
app.use('/api/v1/', security.middleware, api.middleware);


var port = config.app.port || 8083;
debug('Starting listening on port %d', port);
app.listen(port);

