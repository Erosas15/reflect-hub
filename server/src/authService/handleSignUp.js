const { clientApp, db } = require("@src/firebase");
const { encryptName } = require("@src/utils/encrypt");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { doc, setDoc, collection } = require("firebase/firestore");

const auth = getAuth(clientApp);

const handleSignUp = async (name, email, password) => {
  try {
    // Create a new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Prepare user data for storage
    const userData = {
      name: encryptName(name),
      email: encryptName(email),
    };

    // Create a reference to the "users" collection and the user document
    const colRef = collection(db, "users");
    const userDocRef = doc(colRef, user.uid);

    try {
      // Use setDoc to set the data in the user document
      await setDoc(userDocRef, userData);
    } catch (error) {
      console.error("Error adding document:", error.message);
      // Handle the error accordingly, you might want to throw it again if needed
      throw error;
    }

    // Return an object with success, userId, and username properties
    return {
      success: true,
      userId: user.uid,
      username: name || user.email, // Assuming you have a username or using the email as a fallback
    };
  } catch (error) {
    console.error("Error signing up:", error.message);
    // Handle the error accordingly, you might want to throw it again if needed
    throw error;
  }
};

// Example usage: handleSignUp("John Doe", "john@example.com", "password123");

module.exports = handleSignUp;
