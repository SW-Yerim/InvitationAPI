import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqFy8VAr9fkZuLZ7DBS3sVEFc8k2MHnu8",
  authDomain: "invitation-project-69b65.firebaseapp.com",
  projectId: "invitation-project-69b65",
  storageBucket: "invitation-project-69b65.firebasestorage.app",
  messagingSenderId: "938800511358",
  appId: "1:938800511358:web:b1a21f9882fda669b0db2f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
