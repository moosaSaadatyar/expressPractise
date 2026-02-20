const friendsController = require("./controllers/friends.controler");
const express = require("express");
const app = express();



app.get("/", (req, res) => {
  res.send("Hello from Express.js");
});

//getfriends controller
app.get("/friends",friendsController.getFriends);

app.use(express.json());

app.get("/friends/:id",friendsController.getFriendById );

// postfriends controller
app.post("/friends",friendsController.postFriends );

//putfriends controller
app.put("/friends/:id",friendsController.putFriends);

//deletefriends controller
app.delete("/friends/:id",friendsController.deleteFriends);


/**
 * run server
 */
const PORT = 3100;
app.listen(PORT, (err, res) => {
  console.log(`server run in ${PORT}`);
});
