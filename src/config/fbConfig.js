import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPlvpjjpagpDDsnI8FBZXR8ZVxhatS9fs",
  authDomain: "react-redux-firebase-38d30.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-38d30.firebaseio.com",
  projectId: "react-redux-firebase-38d30",
  storageBucket: "react-redux-firebase-38d30.appspot.com",
  messagingSenderId: "440985998730",
  appId: "1:440985998730:web:edd4c5aa1df2dc32816473",
  measurementId: "G-S0FFTZGQQC"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

export default firebase;
