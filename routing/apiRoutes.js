var friends = require("../app/data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends)
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body
    console.log(newFriend);

    var AlldiffArry = []

    function loopFriends() {

      for (let i = 0; i < friends.length; i++) {
        console.log("ran1" + i);
        comparefriends(i);
        
      }
      optimalFriend();

    }

    function comparefriends(i) {

      var diffSum = 0;
      for (let j = 0; j < newFriend.scores.length; j++) {
        console.log(`ran ${j}`)
        var diff = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
        diffSum += diff;

      }
      AlldiffArry.push(diffSum);
    }

    function optimalFriend() {
      console.log(AlldiffArry);
      var leastDiff = Math.min(...AlldiffArry);
      console.log(leastDiff);
      var index = AlldiffArry.indexOf(leastDiff);
      console.log(index);
      console.log(friends[index]);
      friends.push(newFriend);
    }

    loopFriends();
    res.json(true);
    // console.log(friends);
  })

};