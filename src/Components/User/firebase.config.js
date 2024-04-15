// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEbnY1AE4D6G5qKRAFDJ131_F1y7xcjIg",
    authDomain: "client-zingzest.firebaseapp.com",
    projectId: "client-zingzest",
    storageBucket: "client-zingzest.appspot.com",
    messagingSenderId: "888070976627",
    appId: "1:888070976627:web:a022d3bf0aeace91de6606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);

export default app