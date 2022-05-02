import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBycX798QB855FcZSriCopTjmqOHxXwWYQ",
  authDomain: "clone-78cd1.firebaseapp.com",
  projectId: "clone-78cd1",
  storageBucket: "clone-78cd1.appspot.com",
  messagingSenderId: "103460943196",
  appId: "1:103460943196:web:1891d8616191c417d57d99"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };