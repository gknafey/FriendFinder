var express = require("express");
var path = require("path");
var htmlRoute = require("./routing/htmlRoutes");
var apiRoute = require("./routing/apiRoutes");
var friends = require("./app/data/friends");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});