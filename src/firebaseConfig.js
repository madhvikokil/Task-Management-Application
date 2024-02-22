// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQVmb06VnExbB8Lo1sg4PHgKHV9SwlveE",
  authDomain: "todo-application-fdf67.firebaseapp.com",
  projectId: "todo-application-fdf67",
  storageBucket: "todo-application-fdf67.appspot.com",
  messagingSenderId: "622548308593",
  appId: "1:622548308593:web:75c40809ac2f4c5456c1d0",
  measurementId: "G-E2EDCVX801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);