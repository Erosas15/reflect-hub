const { getAuth, onAuthStateChanged } = require("firebase/auth");
const { clientApp } = require("@src/firebase");

const auth = getAuth(clientApp);

const authSignIn = (uid) => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user && user.uid === uid) {
          console.log(`User with UID ${uid} is signed in.`);
          unsubscribe(); // Unsubscribe to stop listening for changes
          resolve(user);
        } else {
          console.log(`User with UID ${uid} is not signed in.`);
          unsubscribe(); // Unsubscribe to stop listening for changes
          reject(new Error(`User with UID ${uid} is not signed in.`));
        }
      } catch (error) {
        console.error("Error in authentication:", error.message);
        reject(error);
      }
    });
  });
};

module.exports = authSignIn;
