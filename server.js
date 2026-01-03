const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express.js");
});

app.get("/friends", (req, res) => {
  res.send(`
        <ul
        <li>John</li>
        <li>Jane</li>
        <li>Doe</li>
        </ul>
    `);
});

const PORT = 3100;
app.listen(PORT, (err, res) => {
  console.log(`server run in ${PORT}`);
});
