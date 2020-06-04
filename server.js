// The code is running on backend , client cannot see this code , javascript is not running on the front end , its a web application
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Needed statement when using body parser - to pass info from post request
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
// To attach the html file to the javascript code
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})
// To do the calculations
// To post the result
app.post("/bmicalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = weight / Math.pow(height, 2);
// To send the result from our server to client server
  res.send("BMI: " + bmi);
});



app.listen(port, () => console.log("Server listening on port: " + port));
