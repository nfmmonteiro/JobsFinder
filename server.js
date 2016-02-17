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

var port = process.env.PORT || 8080;
var ip = process.env.IP || 'localhost';

app.listen(port, ip, function() {
    console.log(ip, 'listening on port', port);
});