import {initializeApp} from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc, 
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    deleteDoc,
} from 'firebase/firestore'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDVNxWOM-JvCCCIPPiPX2ODxDaKy596cK4",
    authDomain: "construction-305f4.firebaseapp.com",
    projectId: "construction-305f4",
    storageBucket: "construction-305f4.appspot.com",
    messagingSenderId: "1007930834841",
    appId: "1:1007930834841:web:97809cd029f5b17e101d08",
    measurementId: "G-GE1905B2X3"
  };
  
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  export const auth = getAuth()

  export const db = getFirestore()

  export const storage = getStorage();