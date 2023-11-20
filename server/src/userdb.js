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

const addJournalEntry = async (userID, time, entry) => {
  // Reference to the specific user document
  const userDocRef = doc(colRef, userID);

  // Reference to the "orders" subcollection within the user document
  const journalCollection = collection(userDocRef, "journalHistory");

  // Data to add to the "orders" subcollection
  const journalData = {
    timeStamp: time,
    entry: entry,
  };

  // Use addDoc to add a new document to the "orders" subcollection
  addDoc(journalCollection, journalData)
    .then((newDocRef) => {
      console.log(
        `Document added to orders subcollection with ID: ${newDocRef.id}`
      );
      // You can perform additional actions after adding the document if needed
    })
    .catch((error) => {
      console.error(
        "Error adding document to orders subcollection:",
        error.message
      );
    });
};

module.exports = { pushToDB, getFromDB, addJournalEntry };
