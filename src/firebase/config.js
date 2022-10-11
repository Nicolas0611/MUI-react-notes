// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgPoIkeLSVWM4HxpxBDPERoQQka6JRv4c",
  authDomain: "react-mui-687df.firebaseapp.com",
  projectId: "react-mui-687df",
  storageBucket: "react-mui-687df.appspot.com",
  messagingSenderId: "301884631577",
  appId: "1:301884631577:web:a8ed690b7cfbd30b715888",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
