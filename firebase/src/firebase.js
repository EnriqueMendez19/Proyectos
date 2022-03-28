import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let fireConfig={
    apiKey: "AIzaSyCw62vVXBk4dtc12Rh7mJOmRWsFVLsPfSg",
    authDomain: "clothingapp-f26ec.firebaseapp.com",
    projectId: "clothingapp-f26ec",
    storageBucket: "clothingapp-f26ec.appspot.com",
    messagingSenderId: "895288275402",
    appId: "1:895288275402:web:70ff6c3ced467368219f33",
    measurementId: "G-2YW5G9Z23C"
};
firebase.initializeApp(fireConfig);
export const db=firebase.firestore();