import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
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

export default function useFirebase () {

    // Initialize Firebase
    const app = initializeApp(config);
    const auth = getAuth(app);

    const db = getFirestore(app);

    const { setUser } = useContext(GlobalStateContext);

    const checkLogin = async () => {

        await onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is signed in");

                // Additional user info
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user);
            } else {
                console.log("User is signed out");
                setUser(null);
            }
        });
    }

    const createUserWithEmail = async (firstName: string, lastName: string, email: string, phone: string, password: string) => {

        const name = firstName + " " + lastName;
        const photo = "images/avatar" + Math.floor(Math.random() * 6 + 1) + ".jpg";

        try {
            await createUserWithEmailAndPassword(auth, email, password).catch((error) =>
                console.log(error)
            ).then(async () => {
                if (auth.currentUser) {
                    await sendEmailVerification(auth.currentUser)
                        .catch((error) => console.log(error));

                    await updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                        .catch((error) => console.log(error));
                }
            }).catch((error) => console.log(error)).finally(() => setUser(auth.currentUser));
        } catch (error) {
            console.log(error);
        }
    };

    const loginWithEmail = async (email: string, password: string) => {

        await signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.log(error)
            }).finally(() => {
                setUser(auth.currentUser);
            });
    }

    const sendForgotPasswordResetEmail = async (email: string) => {
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Sent password reset email!");
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const logOut = async () => {

        await signOut(auth).then(() => {
            console.log("Logging out!");
        })
            .catch((error) => {
                console.log(error)
            }).finally(() => {
                setUser(auth.currentUser);
            });
    }

    return { checkLogin, createUserWithEmail, loginWithEmail, sendForgotPasswordResetEmail, logOut, db }
}
