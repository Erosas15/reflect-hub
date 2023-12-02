const { doc, collection, addDoc } = require("firebase/firestore");
const { db } = require("../src/firebase");

const colRef = collection(db, "groups");

const addGroup = async (group, userID) => {
  const group = doc(colRef, group);
  const user = doc(colRef, userID);

  try {
    await addDoc(group, userID); // adds user to group
    return true;
  } catch (error) {
    console.error("Error adding document:", error.message);
    return false;
  }
};
