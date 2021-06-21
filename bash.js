process.stout.write('prompt >');
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();

	process.stout.write('You typed: ', +cmd);
	process.stout.write('\nprompt >');
});
