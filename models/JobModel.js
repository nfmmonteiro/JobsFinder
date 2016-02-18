var mongoose = require('mongoose');

var JobSchema = mongoose.Schema({
	title: String,
	description: String
});

var JobModel = mongoose.model('jobs', JobSchema);

module.exports = JobModel;
