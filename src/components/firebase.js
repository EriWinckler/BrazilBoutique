import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNLfxfdbBtezaA9f22MBN4DVrhVVp-XNw",
  authDomain: "brazilboutique-ba097.firebaseapp.com",
  databaseURL: "https://brazilboutique-ba097.firebaseio.com",
  projectId: "brazilboutique-ba097",
  storageBucket: "brazilboutique-ba097.appspot.com",
  messagingSenderId: "1083060071040",
  appId: "1:1083060071040:web:64bb83c97073bf23745465",
  measurementId: "G-PJZY2R6Q8X",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
