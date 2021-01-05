import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC6Z3Rb23M_I3sPGBtT0zTAiLSsrlpfsBA",
  authDomain: "linkedin-clone-6869a.firebaseapp.com",
  projectId: "linkedin-clone-6869a",
  storageBucket: "linkedin-clone-6869a.appspot.com",
  messagingSenderId: "1079552370362",
  appId: "1:1079552370362:web:9c8efbccb58076e90e0483",
  measurementId: "G-KQCM1LKH3Y"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};