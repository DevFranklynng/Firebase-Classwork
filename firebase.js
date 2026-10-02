// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhbb7VTOP3IIc9IvI3eIH1U4mRm26-Ii4",
  authDomain: "devfrankio.firebaseapp.com",
  projectId: "devfrankio",
  storageBucket: "devfrankio.firebasestorage.app",
  messagingSenderId: "644323710886",
  appId: "1:644323710886:web:ba00ab4d78f443263da167",
  measurementId: "G-KFHKN5989S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);