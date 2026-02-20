const freindsModel = require("../models/friends.models").friends;
// =================================
function getFriends(req, res) {
  res.send(freindsModel);
}

// =================================
function getFriendById(req, res) {
  const param = req.params.id;
  const frendId = freindsModel.find((item) => item.id == param);
  if (!frendId) {
    const statusCode = res.status(404).json({ error: "Friend not found" });
    return statusCode;
  }
  res.send(frendId);
}

// =================================
function postFriends(req, res) {
  let newFriends = {
    id: freindsModel.length,
    name: req.body.name,
  };

  if (!req.body.name) {
    return res.status(400).json({
      error: "friend not found",
    });
  }

  freindsModel.push(newFriends);
  res.json(newFriends);
}

// =================================
function putFriends(req, res) {
  const friendId = parseInt(req.params.id);
  const friend = freindsModel.find((item) => item.id === friendId);
  if (!friendId || !req.body.name) {
    return res.status(404).json({
      error: "there was not freinds with this Info",
    });
  }
  friend.name = req.body.name;
  res.send(friend);
}

// =================================
function deleteFriends(req, res) {
  const friendId = parseInt(req.params.id);
  const friendIndex = freindsModel.findIndex((item) => item.id === friendId);
  if (friendIndex === -1) {
    return res.status(404).json({ error: "Friend not found" });
  }
  const deletedFriend = freindsModel.splice(friendIndex, 1);
  res.json(deletedFriend[0]);
}

module.exports = {
  getFriends,
  getFriendById,
  postFriends,
  putFriends,
  deleteFriends,
};
