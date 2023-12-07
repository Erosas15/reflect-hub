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
    const signUpResult = await handleSignUp(name, email, password);

    if (signUpResult.success) {
      // If signup is successful, include additional data in the response
      res.json({
        success: true,
        userId: signUpResult.userId,
        username: signUpResult.username,
        // Add other relevant information you want to send to the client
      });
    } else {
      // If signup fails, provide an appropriate error message
      res.status(401).json({ success: false, error: signUpResult.error });
    }
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route for user sign-in
router.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const signInResult = await handleSignIn(email, password);

    if (signInResult.success) {
      // If sign-in is successful, include additional data in the response
      res.json({
        success: true,
        userId: signInResult.userId,
        username: signInResult.username,
        // Add other relevant information you want to send to the client
      });
    } else {
      // If sign-in fails, provide an appropriate error message
      res.status(401).json({ success: false, error: signInResult.error });
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
