import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import dotenv from 'dotenv';
// dotenv.config();

const firebaseConfig = {
  // apiKey: process.env.APP_Firebase_key,
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_Firebase_Auth_Domain,
  projectId: process.env.REACT_APP_Firebase_ProjectId,
  storageBucket: process.env.REACT_APP_Firebase_StorageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_MessagingSenderId,
  appId: process.env.REACT_APP_Firebase_AppId,
  measurementId: process.env.REACT_APP_Firebase_MeasurementId
};



// const firebaseConfig = {
//   apiKey: "AIzaSyA_oohPsxlHg_DiOt1xRc5UxI2Q8KKPu4k",
//   authDomain: "technonxtgensolution.firebaseapp.com",
//   projectId: "technonxtgensolution",
//   storageBucket: "technonxtgensolution.firebasestorage.app",
//   messagingSenderId: "347419389439",
//   appId: "1:347419389439:web:3bf17f8237980302a28bca",
//   measurementId: "G-HLVDEC6Y1K"
// };

// Initialize Firebase

  
  console.log("API Key:", process.env.REACT_APP_Firebase);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };

