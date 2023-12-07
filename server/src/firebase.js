const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const { firebaseAPIConfig, firebaseServiceConfig } = require("../config.json");
const { getFirestore } = require("firebase/firestore");

try {
  const clientApp = initializeApp(firebaseAPIConfig);
  const adminApp = admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceConfig),
  });
  const db = getFirestore();
  module.exports = { clientApp, adminApp, db };
} catch (error) {
  console.error("Firebase initialization error:", error);
}
