
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuibZ7InKvmTOYkk2Ej2PZvMMEfh-5ycI",
  authDomain: "guilhermejuliana-edb62.firebaseapp.com",
  projectId: "guilhermejuliana-edb62",
  storageBucket: "guilhermejuliana-edb62.appspot.com",
  messagingSenderId: "133407955632",
  appId: "1:133407955632:web:9c21e3b1fa9bde33dc3975"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
