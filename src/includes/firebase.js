import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSl7HD2g2XW7LBcgbatC-slYREdmSFNp0",
  authDomain: "music-3b685.firebaseapp.com",
  projectId: "music-3b685",
  storageBucket: "music-3b685.appspot.com",
  appId: "1:965522235494:web:0aa34ae4a36eb863654da7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
