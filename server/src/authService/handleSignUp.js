const { app } = require("../src/firebase");
const { pushToDB } = require("../src/userdb");
const { encryptName } = require("../src/encrypt");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const auth = getAuth(app);

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

module.exports = handleSignUp;
