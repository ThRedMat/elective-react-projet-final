import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
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

// Créer une référence à la collection des mangas favoris
const favoriteMangasCollection = firebase.firestore().collection("favoriteMangas");

export const addFavoriteManga = (manga) => {
  favoriteMangasCollection
    .add(manga)
    .then(() => {
      console.log("Manga ajouté aux favoris avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout du manga aux favoris : ", error);
    });
};
