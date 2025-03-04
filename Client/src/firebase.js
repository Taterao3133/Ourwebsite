import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

//  apiKey: 'AIzaSyA_oohPsxlHg_DiOt1xRc5UxI2Q8KKPu4k',
//   authDomain: process.env.REACT_APP_Firebase_Auth_Domain,
//   projectId: process.env.REACT_APP_Firebase_ProjectId,
//   storageBucket: process.env.REACT_APP_Firebase_StorageBucket,
//   messagingSenderId: process.env.REACT_APP_Firebase_MessagingSenderId,
//   appId: process.env.REACT_APP_Firebase_AppId,
//   measurementId: process.env.REACT_APP_Firebase_MeasurementId




};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };

