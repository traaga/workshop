import {initializeApp} from "firebase/app";
import {
    doc,
    getDoc,
    setDoc,
    addDoc,
    collection,
    getFirestore,
    updateDoc,
    arrayRemove,
    arrayUnion
} from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {useContext, useState} from "react";
import {GlobalStateContext, User} from "./GlobalStateContext";
import {Project} from "../components/ProjectDisplay";
import {CalendarEvent} from "../components/CalendarEvent";

export const config = {
    apiKey: "AIzaSyAYkgC3RfnQFmlZIiBYzBLcdr_hgOiY3O0",
    authDomain: "fellini-tookoda.firebaseapp.com",
    projectId: "fellini-tookoda",
    storageBucket: "fellini-tookoda.appspot.com",
    messagingSenderId: "28684165989",
    appId: "1:28684165989:web:4bab9a707b3773732e778c",
    measurementId: "G-2EHBE8WRN6"
};

export default function useFirebase() {

    // Initialize Firebase
    const app = initializeApp(config);
    const auth = getAuth(app);

    const db = getFirestore(app);

    const {setUser, user} = useContext(GlobalStateContext);

    const checkLogin = async () => {

        await onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log("SIGNED IN")
                fetchUserData(user.uid)
            } else {
                console.log("SIGNED OUT")
                setUser(null);
            }
        });
    }

    const createUserWithEmail = async (firstName: string, lastName: string, email: string, phone: string, password: string) => {

        const name = firstName + " " + lastName;
        const photo = "images/avatar" + Math.floor(Math.random() * 6 + 1) + ".jpg";

        try {
            await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
                    console.log(error);
                    setUser(null);
                }
            ).then(async () => {
                if (auth.currentUser) {
                    /*await sendEmailVerification(auth.currentUser)
                        .catch((error) => console.log(error));*/

                    /*await updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                        .catch((error) => console.log(error));*/

                    /*if(phone) {
                        await updatePhoneNumber(auth.currentUser, { displayName: name, photoURL: photo })
                            .catch((error) => console.log(error));
                    }*/

                    const user: User = {
                        id: auth.currentUser.uid,
                        email: email,
                        events: [],
                        name: name,
                        phone: phone,
                        photo: photo,
                        projects: [],
                        role: "user"
                    }

                    // TODO: Add user data to users collection

                    setUser(user);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const loginWithEmail = async (email: string, password: string) => {

        await signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.log(error)
                setUser(null);
            }).then(() => {
                if (auth.currentUser)
                    fetchUserData(auth.currentUser.uid);
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
                setUser(null);
            });
    }

    const fetchUserData = async (userId: string) => {

        const usersRef = doc(db, "users", userId);
        const userData = await getDoc(usersRef);
        const userParams = userData.data();

        if (userData.id && userParams) {

            const user: User = {
                id: userData.id,
                email: userParams.email,
                events: userParams.events,
                name: userParams.name,
                phone: userParams.phone,
                photo: userParams.photo,
                projects: userParams.projects,
                role: userParams.role
            }
            setUser(user);
        }
    }

    const unRegisterFromEvent = async (eventId: string) => {

        if (auth.currentUser && user) {
            const usersRef = doc(db, "users", auth.currentUser.uid);

            await updateDoc(usersRef, {
                events: arrayRemove(eventId)
            }).then(async () => {

                const eventsRef = doc(db, "events", eventId);

                await updateDoc(eventsRef, {
                    projects: arrayRemove(...user.projects)
                }).then(() => fetchUserData(user.id));

            });
        }
    }

    const addEvent = async (event: CalendarEvent) => {
        return
        await addDoc(collection(db, "events"), {
            title: event.title,
            start: event.start,
            end: event.end,
            space: event.space,
            color: event.color,
            projects: event.projects,
            description: event.description
        });
    }

    const setEvent = async (eventID: string, eventData: {}) => {
        await setDoc(doc(db, "events", eventID), eventData);
    }

    return {
        checkLogin,
        createUserWithEmail,
        loginWithEmail,
        sendForgotPasswordResetEmail,
        logOut,
        db,
        unRegisterFromEvent,
        user,
        addEvent,
        setEvent
    }
}
