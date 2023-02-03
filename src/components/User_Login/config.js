
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMTLaPTPYe0al0dhZJ4XbE0YHFCqAx494",
  authDomain: "reminder-app-95f04.firebaseapp.com",
  projectId: "reminder-app-95f04",
  storageBucket: "reminder-app-95f04.appspot.com",
  messagingSenderId: "937378119577",
  appId: "1:937378119577:web:b8982cb2717fbdf7c91d08",
  measurementId: "G-PC3MMJZPN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providere = new OAuthProvider('microsoft.com');

export { auth, provider, providere };