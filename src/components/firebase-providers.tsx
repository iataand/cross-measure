// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuZ9xdd0zjo1d0Hkly5vMGsuvPckHuKfY",
  authDomain: "cross-measure-dev.firebaseapp.com",
  projectId: "cross-measure-dev",
  storageBucket: "cross-measure-dev.firebasestorage.app",
  messagingSenderId: "6919624612",
  appId: "1:6919624612:web:45a5516694702049ecd331",
  measurementId: "G-TWQLHTH0BW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
