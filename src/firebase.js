import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDFopDvsZxQ494GAl1j4OWge_rH59Pu6sE",
  authDomain: "store-wood-d96ce.firebaseapp.com",
  projectId: "store-wood-d96ce",
  storageBucket: "store-wood-d96ce.appspot.com",
  messagingSenderId: "1019409906178",
  appId: "1:1019409906178:web:b8900860b518a44576451b",
  measurementId: "G-V446M04RGD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();