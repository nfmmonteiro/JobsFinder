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
var ip = process.env.IP || 'foo';
console.log('PORT', port, 'IP', ip);

app.listen(port, function() {
    console.log('app listening on port', port);
});
