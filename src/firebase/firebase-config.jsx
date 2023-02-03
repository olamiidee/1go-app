// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2Sx2BpxQu9VPyjxoRTWFFtq-B5rrPBY",
  authDomain: "go-webapp-dfc87.firebaseapp.com",
  projectId: "go-webapp-dfc87",
  storageBucket: "go-webapp-dfc87.appspot.com",
  messagingSenderId: "724435962481",
  appId: "1:724435962481:web:84480cc640068e4d42a9d0",
  measurementId: "G-SE246N3R8F",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
