const express = require("express");
const { getBotResponse } = require("../controllers/messageControllers");

const messageRouter = express.Router();

messageRouter.post("/get-bot-response", getBotResponse);

module.exports = messageRouter;
