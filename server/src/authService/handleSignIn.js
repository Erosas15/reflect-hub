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
    console.error("error.code", error.code)

    //check if the error is due to entering a non-valid email
    if (error.code === "auth/invalid-email") {
      return {
        success: false,
        error: "Not a valid email",
      };
    }

    //check if the error is due to an incorrect credential
    if (error.code === "auth/invalid-credential") {
      return {
        success: false,
        error: "Incorrect email or password",
      };
    }

    //check if the error is because the user has signed in too many times
    if (error.code === "auth/too-many-requests") {
      return {
        success: false,
        error: "Too many sign-in attempts",
      };
    }

    // Return an object with success as false and the error message
    return {
      success: false,
      error: error.message,
    };
  }
};

module.exports = handleSignIn;
