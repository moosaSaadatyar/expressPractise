const express = require("express");
const massegeControler = require("../controllers/messages.controler");
const messagesRouter = express.Router();

messagesRouter.get("/", massegeControler.messages);

messagesRouter.post("/:messageId", massegeControler.postMessagesById);

module.exports =  messagesRouter ;
