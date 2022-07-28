import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANRN1Ai3Ox1VFf007x6wMswmKgMZOhvtA",
  authDomain: "intern-task-2fb2e.firebaseapp.com",
  projectId: "intern-task-2fb2e",
  storageBucket: "intern-task-2fb2e.appspot.com",
  messagingSenderId: "19198269144",
  appId: "1:19198269144:web:41d474e2ee1c2afc2d69ad"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth ;