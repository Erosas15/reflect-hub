const { db } = require("@src/firebase");
const { collection, getDocs, where, orderBy } = require("firebase/firestore");

const getMessages = async () => {
    const messagesRef = collection(db, "messages");
    const query = orderBy("timestamp", "asc");
  
    try {
      const querySnapshot = await getDocs(query);
      const messages = querySnapshot.docs.map((doc) => doc.data());
      return messages;
    } catch (error) {
      console.error("Error getting messages:", error.message);
      return [];
    }
  };

  module.exports() = getMessages;