const { db } = require("../firebase");
const { collection, addDoc } = require("firebase/firestore");

const sendMessage = async (senderId, content) => {
  const messagesRef = collection(db, "messages");
  const newMessage = {
    senderId,
    content,
    timestamp: new Date(), // can use serverTimestamp() if you prefer server-side timestamp
  };

  try {
    const docRef = await addDoc(messagesRef, newMessage);
    console.log("Message added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};

//sendMessage("k2tefNYNW2QnnHTkZJwZJ3DW5yt2", "test #4");

module.exports = sendMessage;
