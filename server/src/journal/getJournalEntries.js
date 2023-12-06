const { doc, collection, getDocs } = require("firebase/firestore");
const { db } = require("../firebase");

const colRef = collection(db, "users");

const getJournalEntries = async (userID) => {
  // Reference to the specific user document
  const userDocRef = doc(colRef, userID);

  // Reference to the "orders" subcollection within the user document
  const journalCollection = collection(userDocRef, "journalHistory");

  try {
    const querySnapshot = await getDocs(journalCollection);

    // Extract data from each document in the query snapshot
    const journalEntries = querySnapshot.docs.map((doc) => doc.data());

    // Log or return the retrieved data
    console.log("Journal Entries:", journalEntries);

    return journalEntries;
  } catch (error) {
    console.error("Error getting journal entries:", error.message);
    return null;
  }
};

module.exports = getJournalEntries;
