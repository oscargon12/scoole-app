// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3oDSUoHsXWbjns1NMGEF7lJ07-3IAejE",
  authDomain: "clase-firebase-1d1eb.firebaseapp.com",
  projectId: "clase-firebase-1d1eb",
  storageBucket: "clase-firebase-1d1eb.appspot.com",
  messagingSenderId: "569713541232",
  appId: "1:569713541232:web:649f662f745391ae66b4b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)