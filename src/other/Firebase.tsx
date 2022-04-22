import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const auth = getAuth(app);

export const db = getFirestore(app);

export interface Test {
    id: string,
    data: any
}

export const useGetMessages = async (collectionName: string) => {

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
}
