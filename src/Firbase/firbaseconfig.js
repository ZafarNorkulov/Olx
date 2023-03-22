import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAi8ADvoKYIabT1nTLvckQM3Y92kwX1i-k",
    authDomain: "z-olx-644bb.firebaseapp.com",
    projectId: "z-olx-644bb",
    storageBucket: "z-olx-644bb.appspot.com",
    messagingSenderId: "551975818761",
    appId: "1:551975818761:web:a4a093a8b4cad06e750ad8",
    measurementId: "G-K9P29MBGN4"
};
const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
