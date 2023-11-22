import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAPTOOqRibxxSp7RoecPLO2x3REq-Stg1I",
    authDomain: "react-olx-f0405.firebaseapp.com",
    projectId: "react-olx-f0405",
    storageBucket: "react-olx-f0405.appspot.com",
    messagingSenderId: "649293280466",
    appId: "1:649293280466:web:0593f2d351a0b9583ce90b",
    measurementId: "G-3LH11S168H"
  };

  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;