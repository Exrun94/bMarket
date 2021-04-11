import firebase from "firebase/app";
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDgFOvYBaMi2zHvSXZJ7WTcjmhHDx61Idg",
    authDomain: "softuni-reactjs-project-c80bc.firebaseapp.com",
    projectId: "softuni-reactjs-project-c80bc",
    storageBucket: "softuni-reactjs-project-c80bc.appspot.com",
    messagingSenderId: "325509606954",
    appId: "1:325509606954:web:60f7f15285b864e7fa5d53"
});

export const auth = app.auth();
export default app;