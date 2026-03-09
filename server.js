const express = require("express");
const path = require("path");

const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/masseges.router");

const app = express();
const PORT = 3100;

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "This Is a Title...!!!",
    caption: "this Is a cation about  you",
  });
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use("/messages", messagesRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, (err, res) => {
  console.log(`server run in ${PORT}`);
});
