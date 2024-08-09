// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwzFYUHgBN-RIZ6scnpSYSqaTnb-sG50",
  authDomain: "ai-travel-planner-ce38a.firebaseapp.com",
  projectId: "ai-travel-planner-ce38a",
  storageBucket: "ai-travel-planner-ce38a.appspot.com",
  messagingSenderId: "807974867473",
  appId: "1:807974867473:web:a6d22c19d0eeb6800457b0",
  measurementId: "G-G3JYZHGR9F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);