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

app.listen(process.env.PORT, process.env.IP);
