const express = require("express");
const app = express();
const { handleChatMessage } = require("@src/chatbot/chatMessaging");

const router = express.Router();

// Route for user signup
router.post("/api/message", async (req, res) => {
  const input = req.body;
  try {
    const answer = await handleChatMessage(input); // Import handleMessaging
    if (answer) {
      res.json({ success: true, answer });
    } else {
      res.status(500).json({ success: false, error: "Sign-up failed" });
    }
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
