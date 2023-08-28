import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  // apiKey: "AIzaSyCx-FgxjdIZ-i5uzEzqX88BHQ_DD4_jk1M",
  // authDomain: "storewood-1a60d.firebaseapp.com",
  // databaseURL: "https://spetsvik1-deepdive-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "storewood-1a60d",
  // storageBucket: "storewood-1a60d.appspot.com",
  // messagingSenderId: "136229372635",
  // appId: "1:136229372635:web:14830966d39b5c98d842fe"

  apiKey: "AIzaSyCx-FgxjdIZ-i5uzEzqX88BHQ_DD4_jk1M",
  authDomain: "storewood-1a60d.firebaseapp.com",
  projectId: "storewood-1a60d",
  storageBucket: "storewood-1a60d.appspot.com",
  messagingSenderId: "136229372635",
  appId: "1:136229372635:web:14830966d39b5c98d842fe",
  measurementId: "G-7V7FB8HW2N"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
