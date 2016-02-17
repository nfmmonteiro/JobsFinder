function checkConfig(config) {
	if (!config.port || !config.ip) {
		console.error('PORT and IP environment variables need to be specified');
		process.exit(1);
	}
}

function getConfig() {

	var config = {
		port: process.env.PORT,
		ip: process.env.IP 
	};

	checkConfig(config);
	
	return config;
}

module.exports = getConfig;
