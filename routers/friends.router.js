const express = require("express");
const friendsController = require("../controllers/friends.controler");
const friendsRouter = express.Router();

//getfriends controller
friendsRouter.get("/", friendsController.getFriends);

friendsRouter.get("/:id", friendsController.getFriendById);

// postfriends controller
friendsRouter.post("/", friendsController.postFriends);

//putfriends controller
friendsRouter.put("/:id", friendsController.putFriends);

//deletefriends controller
friendsRouter.delete("/:id", friendsController.deleteFriends);

module.exports = friendsRouter;
