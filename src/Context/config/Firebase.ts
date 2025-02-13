// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVg477oJ_3i6IuNxHqVj9DNJamRgJhkmI",
  authDomain: "melonpay-95788.firebaseapp.com",
  projectId: "melonpay-95788",
  storageBucket: "melonpay-95788.firebasestorage.app",
  messagingSenderId: "115614263693",
  appId: "1:115614263693:web:a2dba78c06adceb4e335c4",
  measurementId: "G-B47XVWRDHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { app, auth, analytics }; 