var express = require('express');
var mongoose = require('mongoose');
var JobModel = require('./models/JobModel');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))

mongoose.connect('mongodb://localhost/jobsFinder');
mongoose.connection.once('open', function() {
	console.log('Connected to mongodb successfully');
});

app.get('/jobs', function(req, res) {
	JobModel.find({}, function(err, data) {
		if (err) {
			res.status(500).end();
		} else {
			res.send(data);
		}
	});
});

/**
 * serves all requests with index view (except static files)
 **/
app.get('*', function(req, res, next) {
    res.render('index');
});


var port = process.env.PORT || 8080;
var ip = process.env.IP || 'foo';
console.log('PORT', port, 'IP', ip);

app.listen(port, function() {
    console.log('app listening on port', port);
});
