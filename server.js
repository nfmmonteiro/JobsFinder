var express = require('express');
var config = require('./config')();

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))

/**
 * serves all requests with index view (except static files)
 **/
app.get('*', function(req, res) {
    res.render('index');
});

app.listen(config.port, config.ip, function() { 
    console.log('[backlog]');
}, function() {
    console.log('[callback] ', config.ip, 'listening on', config.port);
});