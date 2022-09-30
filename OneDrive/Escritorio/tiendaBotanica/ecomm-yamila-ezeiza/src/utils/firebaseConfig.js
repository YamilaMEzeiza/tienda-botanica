// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQ_4OnHYMfuMBdTVbPfNFtxcKjcvZCqpA",
  authDomain: "tienda-botanica-ezeiza.firebaseapp.com",
  projectId: "tienda-botanica-ezeiza",
  storageBucket: "tienda-botanica-ezeiza.appspot.com",
  messagingSenderId: "762498597507",
  appId: "1:762498597507:web:0ff5f2889e7455f278d1b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db