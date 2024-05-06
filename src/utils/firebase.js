// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-58f07.firebaseapp.com",
  projectId: "blog-58f07",
  storageBucket: "blog-58f07.appspot.com",
  messagingSenderId: "1080698272614",
  appId: "1:1080698272614:web:4e54fa59aeea31d8fb66a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);