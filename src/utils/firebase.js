// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_PUBLIC_FIREBASE_API_KEY
const authDomain = import.meta.env.VITE_PUBLIC_FIREBASE_AUTH_DOMAIN
const projectId = import.meta.env.VITE_PUBLIC_FIREBASE_PROJECT_ID
const storageBucket = import.meta.env.VITE_PUBLIC_FIREBASE_STORAGE_BUCKET
const messagingSenderId = import.meta.env.VITE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_PUBLIC_FIREBASE_APP_ID
const measurementId = import.meta.env.VITE_PUBLIC_FIREBASE_MEASUREMENT_ID


const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
const analytics = getAnalytics(app);