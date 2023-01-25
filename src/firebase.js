import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHbFJ9Pmqc8YnjxEePJXSNX-xNEHmJuaQ",
  authDomain: "strength-shop.firebaseapp.com",
  projectId: "strength-shop",
  storageBucket: "strength-shop.appspot.com",
  messagingSenderId: "832817582494",
  appId: "1:832817582494:web:d9a4ec9c7485a5f928868f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
