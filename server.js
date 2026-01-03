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

app.get("/friends/:id", (req, res) => {
  const param = req.params.id;
  const frendId = friends.find((item) => item.id == param);
  if (!frendId) {
    return res.status(404).json({ error: "Friend not found" });
  }
  res.send(frendId);
});

const PORT = 3100;
app.listen(PORT, (err, res) => {
  console.log(`server run in ${PORT}`);
});
