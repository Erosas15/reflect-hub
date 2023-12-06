const { clientApp } = require("@src/firebase");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const auth = getAuth(clientApp);

// Function to handle user sign-in
const handleSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed in:", user.email);

    // Return an object with success, userId, and username properties
    return {
      success: true,
      userId: user.uid,
      username: user.displayName || user.email, // Assuming you have a username or using the email as a fallback
    };
  } catch (error) {
    console.error("Error signing in:", error.message);

    // Return an object with success as false and the error message
    return {
      success: false,
      error: error.message,
    };
  }
};

module.exports = handleSignIn;
