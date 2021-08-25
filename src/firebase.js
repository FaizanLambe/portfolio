import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtDXILHKUVvCWarib2nTxm6Sjvg8RhEFc",
    authDomain: "portfolio-abdc1.firebaseapp.com",
    projectId: "portfolio-abdc1",
    storageBucket: "portfolio-abdc1.appspot.com",
    messagingSenderId: "799525075585",
    appId: "1:799525075585:web:79d6836c9ea634a8ee6b80",
    measurementId: "G-FQL9992X5L"
});

const db = firebaseApp.firestore;


export { db };