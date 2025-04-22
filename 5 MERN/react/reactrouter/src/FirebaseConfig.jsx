// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW_G8YyqriSmzZdgB_lUh0UxaBSgGpDwQ",
  authDomain: "login-20f41.firebaseapp.com",
  projectId: "login-20f41",
  storageBucket: "login-20f41.firebasestorage.app",
  messagingSenderId: "556701945920",
  appId: "1:556701945920:web:3e61a5f1fbb7433d534fa5",
  measurementId: "G-Y374CGJLHH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);