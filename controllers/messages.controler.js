const path = require("path");

function postMessagesById(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "message not found",
    });
  }
  res.send("massege resived");
}

function messages(req, res) {
  const filePath = path.join(__dirname, "..", "public", "2.jpg");
  res.sendFile(filePath);
}

module.exports = { postMessagesById, messages };
