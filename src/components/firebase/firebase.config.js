// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi-ffdPmIsX1btXWjG_OpM090EzdJ7bxI",
  authDomain: "my-food-village.firebaseapp.com",
  projectId: "my-food-village",
  storageBucket: "my-food-village.appspot.com",
  messagingSenderId: "693965123831",
  appId: "1:693965123831:web:de2034650810e8494d63f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;