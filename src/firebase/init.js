// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "fir-practice-47c06.firebaseapp.com",
  projectId: "fir-practice-47c06",
  storageBucket: "fir-practice-47c06.firebasestorage.app",
  messagingSenderId: "968020631160",
  appId: "1:968020631160:web:fa69541ece1134f4d6578d",
  measurementId: "G-0D5PG6T4JW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();