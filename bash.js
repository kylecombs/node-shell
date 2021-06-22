const pwd = require("./pwd");
const cat = require("./cat");
const ls = require("./ls");
const curl = require("./curl");

process.stdout.write("prompt > ");

function done(output) {
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
  }

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cmdArg = cmd.split(" ")[1]

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.split(" ")[0] === "cat") {
    cat(cmdArg, done);
  } else if (cmd.split(" ")[0] === "curl") {
    curl(cmdArg, done);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});


