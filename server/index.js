const express = require("express");
const cors = require("cors");
var request = require("request");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
  //getting the required data from the request
  let code = req.body.code;
  let language = req.body.language;

  if (language === "python") {
    language = "python3";
  }
  if (language === "c") {
    language = "c";
  }
  if (language === "cpp") {
    language = "cpp";
  }
  if (language === "java") {
    language = "java";
  }

  var program = {
    script: code,
    language: language,
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
      //console.log("error:", error);
      //console.log("statusCode:", response && response.statusCode);
      //console.log("body:", body);
      //response = body;
      //console.log(body.output);
      res.send(body.output);
    }
  );
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
