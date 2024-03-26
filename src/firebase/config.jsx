import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://byte-74f87-default-rtdb.asia-southeast1.firebasedatabase.app/",
  // apiKey: "AIzaSyCAYOYDuMKGGjTSJL5uDzG5hjQ6y_vYPiI",
  // authDomain: "auction-website-b12fc.firebaseapp.com",
  // projectId: "auction-website-b12fc",
  // storageBucket: "auction-website-b12fc.appspot.com",
  // messagingSenderId: "791747024664",
  // appId: "1:791747024664:web:215a222a81c6d0c2aeb06d",
  apiKey: "AIzaSyDAgUgpjiiWjaK96-7wyuuOEX5HDaXeSk0",
  authDomain: "byte-74f87.firebaseapp.com",
  projectId: "byte-74f87",
  storageBucket: "byte-74f87.appspot.com",
  messagingSenderId: "321252351406",
  appId: "1:321252351406:web:2763e7890a2efd335a3c3f",
  measurementId: "G-14P7BQKLHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
