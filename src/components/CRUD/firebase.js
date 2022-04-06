import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCF_-dfukhlPwvPyQ1b7FYMivO3jACTX1I",
  authDomain: "group5-29068.firebaseapp.com",
  projectId: "group5-29068",
  storageBucket: "group5-29068.appspot.com",
  messagingSenderId: "174046096830",
  appId: "1:174046096830:web:f3af8d04fa38c25c909def",
  measurementId: "G-TZDKQ3Y78S"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
