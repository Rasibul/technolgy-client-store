
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBg4QJAoMNSyF2ayDTaEypiK9KXdHEf05g",
  authDomain: "technology-client-store.firebaseapp.com",
  projectId: "technology-client-store",
  storageBucket: "technology-client-store.appspot.com",
  messagingSenderId: "994009320137",
  appId: "1:994009320137:web:fb7fed043495aa4b5d1b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);