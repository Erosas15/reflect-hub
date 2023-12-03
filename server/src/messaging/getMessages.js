const { db } = require("../firebase");
const { collection, getDocs, query, orderBy } = require("firebase/firestore");

const getMessages = async () => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));
  
    try {
        const querySnapshot = await getDocs(q);
        const messages = querySnapshot.docs.map((doc) => doc.data());
        return messages;
    } catch (error) {
        console.error("Error getting messages:", error.message);
        return [];
    }
};

//tester code below
/*(async () => {
    const messages = await getMessages();
    console.log("Messages from the general feed:", messages);
})();*/
  
module.exports = getMessages;
