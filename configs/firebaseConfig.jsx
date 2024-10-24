// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "course-generator-2cc78.firebaseapp.com",
  projectId: "course-generator-2cc78",
  storageBucket: "course-generator-2cc78.appspot.com",
  messagingSenderId: "288257789491",
  appId: "1:288257789491:web:835fef63be2b58c8905d46",
  measurementId: "G-KHKCDBM65C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)