const { doc, collection, addDoc } = require("firebase/firestore");
const { db } = require("../src/firebase");

const colRef = collection(db, "users");

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

module.exports = { getFromDB, addJournalEntry };
