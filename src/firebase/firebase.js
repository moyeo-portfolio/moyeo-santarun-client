// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL6W15Uc9pHIH0JQ0CKxdNNNRqSPS0Cwc",
  authDomain: "hackathon-35910.firebaseapp.com",
  projectId: "hackathon-35910",
  storageBucket: "hackathon-35910.appspot.com",
  messagingSenderId: "1018241991291",
  appId: "1:1018241991291:web:bf92a5d5ef3408eceb18de",
  measurementId: "G-GFVPQD0YKN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

