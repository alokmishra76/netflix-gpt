// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0nBwpp84HwgRG33wm9WUpNaA43GogSKY",
  authDomain: "netflix-gpt-3f800.firebaseapp.com",
  projectId: "netflix-gpt-3f800",
  storageBucket: "netflix-gpt-3f800.appspot.com",
  messagingSenderId: "761312251038",
  appId: "1:761312251038:web:5976e6951b24e04e4cbf8f",
  measurementId: "G-YEEP7WSFCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();