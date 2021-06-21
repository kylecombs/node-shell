const request = require('request');
module.exports = function (cmd) {
	request(cmd.split(' ')[1], 'utf8', function (error, response, body) {
		console.error('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);
	});
};
