// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2MjL7Y_d-unmtvoH3O8jMQVf4Xwmsmo",
  authDomain: "whatapp-2-c7a17.firebaseapp.com",
  projectId: "whatapp-2-c7a17",
  storageBucket: "whatapp-2-c7a17.appspot.com",
  messagingSenderId: "399435198113",
  appId: "1:399435198113:web:67a2d4bb77e11eeae10ae0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };