// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import specifically for auth
import firebase from 'firebase/compat/app'; // Use 'compat' for older syntax compatibility

const firebaseConfig = {
  apiKey: "AIzaSyBPW3A-_SkjKand6PCe8OPxMrrlKrpEKp4",
  authDomain: "resume-d1573.firebaseapp.com",
  projectId: "resume-d1573",
  storageBucket: "resume-d1573.appspot.com",
  messagingSenderId: "795683378301",
  appId: "1:795683378301:web:2f989e9eba13d7efa74d14",
  measurementId: "G-SJC1ST1P98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth object
export const auth = getAuth(app);
