
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC445m4-rK2X0hhYEqlqQ1bGnmQIlczKaE",
  authDomain: "laundary-app-557aa.firebaseapp.com",
  projectId: "laundary-app-557aa",
  storageBucket: "laundary-app-557aa.appspot.com",
  messagingSenderId: "439896012198",
  appId: "1:439896012198:web:463a284b0fd334115f0b67",
  measurementId: "G-4TK2E2DE36"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};