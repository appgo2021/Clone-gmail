import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBH9IeYdhzes5dX2EdoKjS7LXkmOztsQtA",
  authDomain: "clone-3dfe0.firebaseapp.com",
  projectId: "clone-3dfe0",
  storageBucket: "clone-3dfe0.appspot.com",
  messagingSenderId: "450885225104",
  appId: "1:450885225104:web:e372bb3c4d52e27353e615"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };