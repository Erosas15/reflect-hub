const { db } = require("@src/firebase");
const { collection, addDoc } = require("firebase/firestore");

const sendMessage = async (senderId, receiverId, content) => {
  const messagesRef = collection(db, "messages");
  const newMessage = {
    senderId,
    content,
    timestamp: new Date(), // You can use serverTimestamp() if you prefer server-side timestamp
  };

  try {
    const docRef = await addDoc(messagesRef, newMessage);
    console.log("Message added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};

sendMessage(
  "k2tefNYNW2QnnHTkZJwZJ3DW5yt2",
  "hhTWJ5xrRGMP94qdZW5oyrQ79S62",
  "test #2"
);

module.exports = sendMessage;
