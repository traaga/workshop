import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const config = {
    apiKey: "AIzaSyAYkgC3RfnQFmlZIiBYzBLcdr_hgOiY3O0",
    authDomain: "fellini-tookoda.firebaseapp.com",
    projectId: "fellini-tookoda",
    storageBucket: "fellini-tookoda.appspot.com",
    messagingSenderId: "28684165989",
    appId: "1:28684165989:web:4bab9a707b3773732e778c",
    measurementId: "G-2EHBE8WRN6"
};

// Initialize Firebase
const app = initializeApp(config);
const auth = getAuth(app);

export const db = getFirestore(app);

export const CheckLogin = () => {
    const { setAuthenticated } = useContext(GlobalStateContext);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is signed in");

            // Additional user info
            // https://firebase.google.com/docs/reference/js/firebase.User

            setAuthenticated(true);
        } else {
            console.log("User is signed out");
            setAuthenticated(false);
        }
    });
}

export const CreateUserWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const LoginWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const SendPasswordResetEmail = (email: string) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const LogOut = () => {
    // Get user: User from globalstate
    console.log("Logging out");
    //signOut(user);
}
