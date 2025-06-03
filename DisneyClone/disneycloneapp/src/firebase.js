
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDa1m9nWsQ3g8TT7IH-4biUzdo-qezZCdI",
  authDomain: "disneyplusconsole.firebaseapp.com",
  projectId: "disneyplusconsole",
  storageBucket: "disneyplusconsole.firebasestorage.app",
  messagingSenderId: "911222004872",
  appId: "1:911222004872:web:0d4fdece07f8d13b99d33d",
  measurementId: "G-MEGT3XCZ45"
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase services
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();

export{auth,provider,storage};
export default db;