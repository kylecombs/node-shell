const fs = require("fs");

module.exports = function (fileName, done) {
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      throw error;
    } else {
      done(data);
    }
  });
};
