// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJkkW-FTZ82aQeqL-nYUEl63LFdwJuLu0",
  authDomain: "si-perpus-3.firebaseapp.com",
  projectId: "si-perpus-3",
  storageBucket: "si-perpus-3.appspot.com",
  messagingSenderId: "177633489826",
  appId: "1:177633489826:web:b01a935964b6c98e60b8fb",
  measurementId: "G-8HRQN42TN1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
