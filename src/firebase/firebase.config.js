// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1HgqkrAGEoAcrzmLefWc5ZMBBbyTESZE",
  authDomain: "car-doctor-59dfe.firebaseapp.com",
  projectId: "car-doctor-59dfe",
  storageBucket: "car-doctor-59dfe.appspot.com",
  messagingSenderId: "721421703057",
  appId: "1:721421703057:web:b565406b91e39ae6e5ec30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;