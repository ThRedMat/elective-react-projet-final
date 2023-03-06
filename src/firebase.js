// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBhoA_8WI2RP36KYVbBhR_6xd_sWylKuyA",
  authDomain: "mangalist-93c77.firebaseapp.com",
  projectId: "mangalist-93c77",
  storageBucket: "mangalist-93c77.appspot.com",
  messagingSenderId: "359155840001",
  appId: "1:359155840001:web:2b6b9d190d0b5e208a7c00",
  measurementId: "G-29BC3PVQRT"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db, app, getAnalytics, initializeApp, getAuth, getFirestore, firebaseConfig, };
