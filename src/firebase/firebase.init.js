// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRzbErh_TkSoaSQg-xrDqutqvcm0tpswo",
  authDomain: "smart-deals-6768c.firebaseapp.com",
  projectId: "smart-deals-6768c",
  storageBucket: "smart-deals-6768c.firebasestorage.app",
  messagingSenderId: "954044857203",
  appId: "1:954044857203:web:15cda9eff195bb88e0a306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);