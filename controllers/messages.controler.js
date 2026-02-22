function postMessagesById(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "message not found",
    });
  }
  res.send("massege resived");
}

function messages(req, res) {
  res.send("Hello from Express.js");
}

module.exports = { postMessagesById, messages };
