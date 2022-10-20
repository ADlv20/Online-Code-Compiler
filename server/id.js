var request = require("request");

var program = {
  script: "<?php echo \"hello\"; ?>",
  language: "php",
  versionIndex: "0",
  clientId: "88324eac62524636d04035c073ca99eb",
  clientSecret:
    "38024a4324a3f801ea262a7e9151a874bcbaeb2cf8e5231893f24467f46e3011",
};
    
request(
  {
    url: "https://api.jdoodle.com/v1/execute",
    method: "POST",
    json: program,
  },
  function (error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
  }
);
