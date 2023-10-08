// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-FMzUsT3W72D69ecS4hiXPqWWQyFO0Y",
  authDomain: "management-service-ea792.firebaseapp.com",
  projectId: "management-service-ea792",
  storageBucket: "management-service-ea792.appspot.com",
  messagingSenderId: "665083880799",
  appId: "1:665083880799:web:3ad9aaa0650fd9d40bc2ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;