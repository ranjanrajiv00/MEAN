var express = require('express');
var app = express();
var cors = require('cors');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

app.use(cors());

require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/route')(app);

app.listen(config.port);

console.log('edis api is started on port ' + config.port);