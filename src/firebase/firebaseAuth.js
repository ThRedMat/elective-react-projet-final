import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  // votre configuration Firebase ici
  apiKey: "AIzaSyBhoA_8WI2RP36KYVbBhR_6xd_sWylKuyA",
  authDomain: "mangalist-93c77.firebaseapp.com",
  projectId: "mangalist-93c77",
  storageBucket: "mangalist-93c77.appspot.com",
  messagingSenderId: "359155840001",
  appId: "1:359155840001:web:2b6b9d190d0b5e208a7c00",
  measurementId: "G-29BC3PVQRT"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;
