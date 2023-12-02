const { app } = require("@src/firebase");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const auth = getAuth(app);

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
    // You can redirect or perform additional actions after successful sign-in.
    return user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    return null;
  }
};

module.exports = handleSignIn;
