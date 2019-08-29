var friends = require("../app/data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends)
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body
    console.log(newFriend);
    
    var optimalFriend = function () {
        
        var arrayTotalDiff = [];
        
        for (let i = 0; i < friends.length; i++) {
          var arraydiff = {}
          
          var diff = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[j].scores[j]));

          

        }

      };
     
    optimalFriend();
    // console.log(newFriend.scores);

    res.json(true);
    // console.log(friends);
  })

};