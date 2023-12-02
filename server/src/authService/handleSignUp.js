const { app, db } = require("@src/firebase");
const { encryptName } = require("@src/utils/encrypt");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { doc, setDoc } = require("firebase/firestore");

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

    const colRef = collection(db, "users");
    const users = doc(colRef, user.uid);

    try {
      // Use setDoc to set the data in the document
      await setDoc(users, userData);
    } catch (error) {
      console.error("Error adding document:", error.message);
    }

    return user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    return null;
  }
};

module.exports = handleSignUp;
