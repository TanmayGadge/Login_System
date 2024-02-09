// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE6eU79LydZiH6zedXaijrOpkquFL9MeE",
  authDomain: "login-system-ccee9.firebaseapp.com",
  projectId: "login-system-ccee9",
  storageBucket: "login-system-ccee9.appspot.com",
  messagingSenderId: "75029258382",
  appId: "1:75029258382:web:4981f16b3b6dd6c4e5e9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//Exporting the auth object
export {auth};

