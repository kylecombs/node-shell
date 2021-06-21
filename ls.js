const fs = require("fs");

module.exports = function () {
  fs.readdir("./", "utf8", (error, files) => {
    if (error) {
      throw error;
    } else {
      process.stdout.write(files.join("\n"));
    }
    process.stdout.write("\nprompt > ");
  });
};
