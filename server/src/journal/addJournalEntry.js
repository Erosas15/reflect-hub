const { doc, collection, addDoc } = require("firebase/firestore");
const { db } = require("../firebase");

const colRef = collection(db, "users");

// This function would return the entry id. 
const addJournalEntry = async (userID, time, entry, title) => {
  // Reference to the specific user document
  const userDocRef = doc(colRef, userID);

  // Reference to the "orders" subcollection within the user document
  const journalCollection = collection(userDocRef, "journalHistory");

  // Data to add to the "orders" subcollection
  const journalData = {
    timeStamp: time,
    entry: entry,
    title: title
  };

  // Use addDoc to add a new document to the "orders" subcollection
  addDoc(journalCollection, journalData)
    .then((newDocRef) => {
      console.log(
        `Document added to orders subcollection with ID: ${newDocRef.id}`
      );
      return newDocRef.id;
      // You can perform additional actions after adding the document if needed
    })
    .catch((error) => {
      console.error(
        "Error adding document to orders subcollection:",
        error.message
      );
      return null;
    });
};

addJournalEntry('AKwydTjTi1eJjs1mVXlSfLdS5Ia2', Date.now(), 'testing entry', 'testing title')

module.exports = addJournalEntry;
