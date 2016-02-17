var express = require('express');

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

var port =  process.env.PORT || 9090;
var ip = process.env.IP || '127.0.0.1';

app.listen(port, ip, function() { 
    console.log('[backlog]');
}, function() {
    console.log('[callback] ', ip, 'listening on', port);
});