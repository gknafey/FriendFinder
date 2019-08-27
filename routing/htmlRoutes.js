var path = require("path");

var route = function() {

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
}),

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey"));
})
};

module.exports = route;



