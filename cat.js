const fs = require('fs');

module.exports = function (fileName) {
	fs.readFile(fileName.split(' ')[1], 'utf8', (error, data) => {
		if (error) {
			throw error;
		} else {
			console.log(data);
		}
		process.stdout.write('\nprompt > ');
	});
};
