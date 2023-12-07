// Example API endpoints using Express
const express = require("express");
const router = express.Router();
const { getMessages, sendMessage } = require("@src/messaging/messagingService");

// Handle sending a message
router.post("/api/send-message", async (req, res) => {
  const { senderId, content } = req.body;
  await sendMessage(senderId, content);
  res.status(200).json({ message: "Message sent successfully" });
});

// Handle fetching messages
router.get("/api/get-messages", async (req, res) => {
  const messages = await getMessages();
  res.status(200).json(messages);
});

module.exports = router;
