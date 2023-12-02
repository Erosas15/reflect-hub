const { app, db } = require("@src/firebase");
const { encryptName } = require("@src/utils/encrypt");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { doc, setDoc, collection, addDoc, getDocs, query, where, orderBy, serverTimestamp } = require("firebase/firestore");

module.exports = {
    getMessages,
    sendMessage,
};