// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
 apiKey: "AIzaSyACo2ogYTwX-bkCkaAGWtPCQIbqw2hs4r0",
 authDomain: "manufacturer-website-2bcf1.firebaseapp.com",
 projectId: "manufacturer-website-2bcf1",
 storageBucket: "manufacturer-website-2bcf1.appspot.com",
 messagingSenderId: "536617441251",
 appId: "1:536617441251:web:e07e71723b482c7021b2d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;