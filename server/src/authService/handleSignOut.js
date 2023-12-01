const { app } = require("../src/firebase");
const admin = require("firebase-admin");
const { getAuth } = require("firebase/auth");

const auth = getAuth(app);

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

module.exports = handleSignOut;
