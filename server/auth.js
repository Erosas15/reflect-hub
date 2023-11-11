const { app } = require("./firebase");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getAuthForSignIn, signInWithEmailAndPassword } = require("firebase/auth");
const { getAuthForSignOut, signOut } = require("firebase/auth");


const auth = getAuth(app);
// Function to handle user signup
const handleSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed up:", user);
    // You can perform additional actions here, like sending a verification email.
  } catch (error) {
    console.error("Error signing up:", error.message);
    // Handle error, e.g., display a user-friendly message to the user.
  }
};

const handleSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user.email);
    // You can redirect or perform additional actions after successful sign-in.
  } catch (error) {
    console.error("Error signing in:", error.message);
    // Handle error, e.g., display a user-friendly message to the user.
  }
};

const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
    // You can redirect or perform additional actions after successful sign-out.
  } catch (error) {
    console.error("Error signing out:", error.message);
    // Handle error, e.g., display a user-friendly message to the user.
  }
};

// Example usage:
const email = "test@email.com";
const password = "examplepassword";

// Call the signup function
handleSignOut();
