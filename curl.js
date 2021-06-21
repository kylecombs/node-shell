const request = require('request');

module.exports = function (cmd, done) {
	request(cmd.split(' ')[1], 'utf8', function (error, response, body) {
		console.error('error:', error);
		console.log(response.statusCode)
		done(body);
	});
};
