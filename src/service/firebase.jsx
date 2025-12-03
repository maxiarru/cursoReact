// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN6LERq2YNeTUj0rtmYHYE40ht2Xk8mvw",
  authDomain: "cursoreact-ac72e.firebaseapp.com",
  projectId: "cursoreact-ac72e",
  storageBucket: "cursoreact-ac72e.firebasestorage.app",
  messagingSenderId: "1032032883416",
  appId: "1:1032032883416:web:65d2598140fefe83cc3dad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
