
import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyD8D5wiDQDreK3lUoYbiQwHUE_hhOzckdQ",
    authDomain: "kosikart-firebase.firebaseapp.com",
    projectId: "kosikart-firebase",
    storageBucket: "kosikart-firebase.appspot.com",
    messagingSenderId: "252364480062",
    appId: "1:252364480062:web:f6a72cff6e641706f7bb6f",
    measurementId: "G-25VM0WZQ7F"
};
let FirebaseConfig;
if(!firebase.apps.length){
    FirebaseConfig = firebase.initializeApp(firebaseConfig);
}
export  {FirebaseConfig};

