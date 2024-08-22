import {useEffect} from 'react'
import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from 'firebase/analytics'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoryy6AQg2DlI6nEdDNm6mZGuknAG3e4A",
    authDomain: "tour-agency-b818d.firebaseapp.com",
    projectId: "tour-agency-b818d",
    storageBucket: "tour-agency-b818d.appspot.com",
    messagingSenderId: "598011905783",
    appId: "1:598011905783:web:f6b3be373e871d4d33b5f2",
    measurementId: "G-RZ802ZVNDM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app);

// const StyledFirebaseAuth = () => {
//   useEffect(() => {

//   const unregisterAuthObserver = onAuthStateChanged(
//    getAuth(),
//    async (user) => {
//      console.log('user', user);
//    },
//  );
//   });
// }
const auth = getAuth();

const provider = new GoogleAuthProvider();

export {auth, provider, signInWithPopup, signOut, GoogleAuthProvider, db };
