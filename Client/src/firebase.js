import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_oohPsxlHg_DiOt1xRc5UxI2Q8KKPu4k",
    authDomain: "technonxtgensolution.firebaseapp.com",
    projectId: "technonxtgensolution",
    storageBucket: "technonxtgensolution.firebasestorage.app",
    messagingSenderId: "347419389439",
    appId: "1:347419389439:web:3bf17f8237980302a28bca",
    measurementId: "G-HLVDEC6Y1K"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
