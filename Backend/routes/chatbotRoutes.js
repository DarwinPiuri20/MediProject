const express = require("express");
const authMiddlewares= require("../middlewares/authMiddlewares");
const chatbotControllers = require("../controllers/chatBotControllers");



const router = express.Router();

router.post("/consultation", authMiddlewares, chatbotControllers.consultationChatbot);


router.get("/history", authMiddlewares, chatbotControllers.consultationHistory);

module.exports = router;
