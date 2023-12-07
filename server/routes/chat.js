const express = require("express");
const handleChatMessage = require("@src/chatbot/chatMessaging");

const router = express.Router();

// Route for user signup
router.post("/api/message", async (req, res) => {
  const input = req.body;
  try {
    const answer = await handleChatMessage(input.input);
    if (answer) {
      res.json({ success: true, answer });
    } else {
      res.status(500).json({ success: false, error: "Chat Response failed" });
    }
  } catch (error) {
    console.error("Error during chat response:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
