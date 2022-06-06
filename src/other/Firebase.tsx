import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

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

export interface Test {
    id: string,
    data: any
}

export const checkLogin = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is signed in");
            // https://firebase.google.com/docs/reference/js/firebase.User
        } else {
            console.log("User is signed out");
        }
    });
}

export const registerWithEmail = (email: string, password: string) => {
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

export const loginWithEmail = (email: string, password: string) => {
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

export const logout = () => {
    // Get user: User from globalstate
    console.log("Logging out");
    //signOut(user);
}

/*export const useGetMessages = async (collectionName: string) => {

    //const { bookings, setBookings } = useContext(GlobalStateContext);
    // return getDocs(collection(db, collectionName));

    //return collection(db, collectionName);
    let messages: Test[] = [];

    await getDocs(collection(db, collectionName)).then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            const el = { id: doc.id, data: doc.data() };
            messages.push(el);
        })
    })

    //console.log("end", [...bookings, messages])
    return messages;
}*/
