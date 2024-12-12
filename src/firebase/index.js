import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyC0hiRVfQuoHp9aSAVFq89da6XkX2G_TeM",
  authDomain: "youngkillan-eee4e.firebaseapp.com",
  projectId: "youngkillan-eee4e",
});

export const db = getFirestore(firebaseApp);
