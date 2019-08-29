var express = require("express");
var app = express();
var path = require("path");
// var route = require("./routing/htmlRoutes");
var apiRoute = require("./routing/apiRoutes");
var friends = require("./app/data/friends");


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});