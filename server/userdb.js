const {
  doc,
  setDoc,
  collection,
  getDoc,
  addDoc,
} = require("firebase/firestore");
const { db } = require("./firebase");

const colRef = collection(db, "users");

const pushToDB = async (userID, userData) => {
  const newDocRef = doc(colRef, userID);

  try {
    // Use setDoc to set the data in the document
    await setDoc(newDocRef, userData);
    return true;
  } catch (error) {
    console.error("Error adding document:", error.message);
    return false;
  }
};

const getFromDB = async (userID) => {
  const userDocRef = doc(db, "users", userID);

  getDoc(userDocRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = { id: docSnapshot.id, ...docSnapshot.data() };
        return userData;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
      return null;
    });
};

module.exports = { pushToDB, getFromDB };
