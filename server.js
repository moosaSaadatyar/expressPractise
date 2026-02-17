const express = require("express");
const app = express();

const friends = [
  { id: 0, name: "John" },
  { id: 1, name: "Jane" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Smith" },
  { id: 4, name: "Emily" },
  { id: 5, name: "Michael" },
];

app.get("/", (req, res) => {
  res.send("Hello from Express.js");
});

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.use(express.json());

app.get("/friends/:id", (req, res) => {
  const param = req.params.id;
  const frendId = friends.find((item) => item.id == param);
  if (!frendId) {
    const statusCode = res.status(404).json({ error: "Friend not found" });
    return statusCode;
  }
  res.send(frendId);
});

app.post("/friends", (req, res) => {
  let newFriends = {
    id: friends.length,
    name: req.body.name,
  };

  if (!req.body.name) {
    return res.status(400).json({
      error: "friend not found",
    });
  }

  friends.push(newFriends);
  res.json(newFriends);
});

app.put("/friends/:id", (req, res) => {
  const friendId = parseInt(req.params.id);
  const friend = friends.find((item) => item.id === friendId);
  if (!friendId || !req.body.name) {
    return res.status(404).json({
      error: "there was not friends with this Info",
    });
  }
  friend.name = req.body.name;
  res.send(friend);
});

app.delete("/friends/:id", (req, res) => {
  const friendId = parseInt(req.params.id);
  const friendIndex = friends.findIndex((item) => item.id === friendId);
  if (friendIndex === -1) {
    return res.status(404).json({ error: "Friend not found" });
  }
  const deletedFriend = friends.splice(friendIndex, 1);
  res.json(deletedFriend[0]);
});
const PORT = 3100;
app.listen(PORT, (err, res) => {
  console.log(`server run in ${PORT}`);
});
