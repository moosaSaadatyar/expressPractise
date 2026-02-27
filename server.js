const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/masseges.router");
const express = require("express");
const app = express();
const PORT = 3100;

app.use(express.json());
app.use("/messages", messagesRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, (err, res) => {
  console.log(`server run in ${PORT}`);
});
