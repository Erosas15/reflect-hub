const { initializeApp } = require("firebase/app");
import {getDatabase, onValue, ref, set} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2DSgMfXYtXsAd2LGacZ2UylUI2dgpG-o",
  authDomain: "reflect-hub.firebaseapp.com",
  databaseURL: "https://reflect-hub-default-rtdb.firebaseio.com",
  projectId: "reflect-hub",
  storageBucket: "reflect-hub.appspot.com",
  messagingSenderId: "676115168909",
  appId: "1:676115168909:web:086a66cffd76304a6f6cc4",
  measurementId: "G-9JC2VBK1QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();


return { app};
