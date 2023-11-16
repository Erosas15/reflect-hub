const { app, db } = require("./firebase");
const { pushToDB } = require("./userdb");
const { encryptName, decryptName } = require("./encrypt");
const admin = require("firebase-admin");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const auth = getAuth(app);

// Function to handle user signup
const handleSignUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    userData = {
      name: encryptName(name),
      email: encryptName(email),
    };
    pushToDB((userID = user.uid), (userData = userData));

    return user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    return null;
  }
};

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

const handleSignOut = async (uid) => {
  try {
    // Revoke the refresh tokens for the specified user
    await admin.auth().revokeRefreshTokens(uid);

    // Inform the user that they have been signed out
    console.log(`User with UID ${uid} has been signed out.`);
  } catch (error) {
    // Handle the error if it is an auth error
    if (error instanceof admin.auth.AuthError) {
      console.error(`Error signing out user: ${error}`);
    } else {
      // Handle other types of errors
      console.error(`Unexpected error: ${error}`);
    }
  }
};