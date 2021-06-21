const pwd = require("./pwd");
const cat = require("./cat");
const ls = require("./ls");
const curl = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.split(" ")[0] === "cat") {
    cat(cmd);
  } else if (cmd.split(" ")[0] === "curl") {
    curl(cmd);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}
