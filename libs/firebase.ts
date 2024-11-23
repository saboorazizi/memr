// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSl2HYGETqaTidbeZoD8FyuF3VBZOztnU",
    authDomain: "memr-opticdev.firebaseapp.com",
    projectId: "memr-opticdev",
    storageBucket: "memr-opticdev.appspot.com",
    messagingSenderId: "483640609530",
    appId: "1:483640609530:web:9373413a4a9f3cadc39743",
    measurementId: "G-887XD0VBXE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
