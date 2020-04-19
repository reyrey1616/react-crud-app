import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkjKuFYdRxg-YrNBzdZXQ92inf3TycvKk",
  authDomain: "crud-app-b4db1.firebaseapp.com",
  databaseURL: "https://crud-app-b4db1.firebaseio.com",
  projectId: "crud-app-b4db1",
  storageBucket: "crud-app-b4db1.appspot.com",
  messagingSenderId: "1033128353925",
  appId: "1:1033128353925:web:5107f23512caf3bcdc09ec",
  measurementId: "G-5R467DE5H1",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
