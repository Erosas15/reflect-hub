const { app } = require("./firebase");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const auth = getAuth(app);
// Function to handle user signup
const signUp = async (email, password) => {
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

// Example usage:
const email = "test@email.com";
const password = "examplepassword";

// Call the signup function
signUp(email, password);
