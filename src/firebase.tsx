import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSLrphXajzQi1CKeHOmQbJqVuFtcbF2mA",
  authDomain: "chit-chat-4b6cc.firebaseapp.com",
  projectId: "chit-chat-4b6cc",
  storageBucket: "chit-chat-4b6cc.appspot.com",
  messagingSenderId: "1053030378799",
  appId: "1:1053030378799:web:eb0cb678e7f7639fcc85da",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore();
