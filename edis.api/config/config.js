var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
    development: {
        secret:'edis',
        db: 'mongodb://localhost/edis',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://domaninname.com:5050/edis',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}