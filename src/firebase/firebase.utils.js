import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2tZFKJbF3uf_qm__kTZuhvomTS4Ts5gc",
  authDomain: "ef-store-3f255.firebaseapp.com",
  projectId: "ef-store-3f255",
  storageBucket: "ef-store-3f255.appspot.com",
  messagingSenderId: "671712683574",
  appId: "1:671712683574:web:a650b14b5e212bda429a97"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;