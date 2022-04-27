import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW3OhYrQL3CDFlcCds_tBp2VcF0IuNLfE",
  authDomain: "ostracon-31fc7.firebaseapp.com",
  databaseId: "ostracon-31fc7",
  projectId: "ostracon-31fc7",
  storageBucket: "ostracon-31fc7.appspot.com",
  messagingSenderId: "723734934262",
  appId: "1:723734934262:web:66d666d8430fb10c4eb2d7",
  measurementId: "G-VEW3YBP4KQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
