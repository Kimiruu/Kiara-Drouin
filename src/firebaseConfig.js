// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwQtu56dT0oL42O85IUzurzDlATr8tSnc",
  authDomain: "monportefolio-e9a4e.firebaseapp.com",
  projectId: "monportefolio-e9a4e",
  storageBucket: "monportefolio-e9a4e.firebasestorage.app",
  messagingSenderId: "73390335951",
  appId: "1:73390335951:web:15c02070459b61db6e14ba",
  measurementId: "G-YGQM6PBGFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);