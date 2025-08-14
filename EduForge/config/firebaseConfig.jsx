// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRLpaSts6M25TpMKnXTAIX18a5iqqVS3I",
  authDomain: "eduforge-b974d.firebaseapp.com",
  projectId: "eduforge-b974d",
  storageBucket: "eduforge-b974d.firebasestorage.app",
  messagingSenderId: "228179297128",
  appId: "1:228179297128:web:350dbeb9f864e1e5b9ccdd",
  measurementId: "G-9PVSXT9Q96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db=getFirestore(app)
const analytics = getAnalytics(app);