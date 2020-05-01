import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCk8tRUBCtbSd-o6tRPZx_lhTyB8rCnIqc",
    authDomain: "crown-62ccd.firebaseapp.com",
    databaseURL: "https://crown-62ccd.firebaseio.com",
    projectId: "crown-62ccd",
    storageBucket: "crown-62ccd.appspot.com",
    messagingSenderId: "40205448803",
    appId: "1:40205448803:web:2833cc6ed0692070186a56"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase