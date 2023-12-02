const express = require("express");
const {
  handleSignIn,
  handleSignUp,
  handleSignOut,
} = require("@src/authService/authService");

const router = express.Router();

// Route for user signup
router.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await handleSignUp(name, email, password); // Import handleSignUp
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(500).json({ success: false, error: "Sign-up failed" });
    }
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route for user sign-in
router.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await handleSignIn(email, password);
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(500).json({ success: false, error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route for user sign-out
router.post("/api/signout", async (req, res) => {
  const { uid } = req.body;
  try {
    await handleSignOut(uid);
    res.json({ success: true });
  } catch (error) {
    console.error("Error during sign-out:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
