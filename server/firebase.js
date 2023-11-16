const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const { firebaseAPIConfig, firebaseServiceConfig } = require("./config.json");
const { getFirestore } = require("firebase/firestore");

// Initialize the client-side Firebase App
const clientApp = initializeApp(firebaseAPIConfig);

// Initialize the server-side Firebase Admin SDK
const adminApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceConfig),
  databaseURL: firebaseAPIConfig.databaseURL,
});

const db = getFirestore();

module.exports = { clientApp, adminApp, db };
