// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB6I6wWd3F2QgHH5PmWVt-ahDz4VPS77g",
  authDomain: "north-test-ed4a0.firebaseapp.com",
  projectId: "north-test-ed4a0",
  storageBucket: "north-test-ed4a0.firebasestorage.app",
  messagingSenderId: "281037186667",
  appId: "1:281037186667:web:6377e7646f0c986a70332e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);