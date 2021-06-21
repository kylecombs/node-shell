const fs = require("fs");

module.exports = function (done) {
  fs.readdir("./", "utf8", (error, files) => {
    if (error) {
      done("something went wrong!");
    } else {
      done(files.join("\n"));
    }
  });
};
