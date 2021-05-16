
var express  =  require("express");
var app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

const request = require('request');



app.get("/", function(req, res) {
    request('https://api.wazirx.com/api/v2/tickers', function (error, response, body) {
  if(!error && response.statusCode == 200) {
      
      var parsedData = JSON.parse(body);
      res.render("index", {data: parsedData});
  }
});
});


app.listen(3000, function() {
    console.log("server started!");
});




