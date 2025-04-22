// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDidz3aUv7FB9GZZXRNai_eZHlu4-MFdkw",
  authDomain: "users-9c13c.firebaseapp.com",
  databaseURL: "https://users-9c13c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "users-9c13c",
  storageBucket: "users-9c13c.firebasestorage.app",
  messagingSenderId: "541100053396",
  appId: "1:541100053396:web:5b012297d2f40846297581",
  measurementId: "G-PDN5DXE67Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);