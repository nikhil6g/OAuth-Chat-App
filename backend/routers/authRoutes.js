const express = require("express");
const { verifyToken } = require("../controllers/authControllers");

const authRouter = express.Router();

authRouter.post("/google", verifyToken);

module.exports = authRouter;
