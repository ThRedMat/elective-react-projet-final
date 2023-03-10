import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  // Votre configuration Firebase
  apiKey: "AIzaSyBhoA_8WI2RP36KYVbBhR_6xd_sWylKuyA",
  authDomain: "mangalist-93c77.firebaseapp.com",
  projectId: "mangalist-93c77",
  storageBucket: "mangalist-93c77.appspot.com",
  messagingSenderId: "359155840001",
  appId: "1:359155840001:web:2b6b9d190d0b5e208a7c00",
  measurementId: "G-29BC3PVQRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const createUserAndStoreToken = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Enregistrer le token utilisateur dans Firebase Firestore
    const tokenRef = doc(db, 'tokenuser', user.uid);
    await setDoc(tokenRef, { token: user.accessToken });

    return user;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
};

export default app;
