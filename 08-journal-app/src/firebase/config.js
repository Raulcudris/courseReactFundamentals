// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzKHcxmxrtFsg8ukI_HuPLkAmTrZIOU_M",
  authDomain: "react-cursos-ac1e5.firebaseapp.com",
  projectId: "react-cursos-ac1e5",
  storageBucket: "react-cursos-ac1e5.appspot.com",
  messagingSenderId: "359626110339",
  appId: "1:359626110339:web:f1ffd1b8210a59dd4fb2b6"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp);
export const FirebaseDB   =  getFirestore( FirebaseApp);