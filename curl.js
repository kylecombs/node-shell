const request = require("request");

module.exports = function (cmdArg, done) {
  request(cmdArg, "utf8", function (error, response, body) {
    console.error("error:", error);
    console.log(response.statusCode);
    done(body);
  });
};
