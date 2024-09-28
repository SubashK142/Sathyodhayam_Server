import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkR6PjwqYIGoyqrxkf1PGStrXztjZfokQ",
  authDomain: "sathyodhayam-50d9a.firebaseapp.com",
  projectId: "sathyodhayam-50d9a",
  storageBucket: "sathyodhayam-50d9a.appspot.com",  // Ensure correct storage bucket URL
  messagingSenderId: "696545506494",
  appId: "1:696545506494:web:9fa5337c4ae125acf51aef",
  measurementId: "G-V216WKYGQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);

// Firebase Storage instance
export const storage = getStorage(app);


