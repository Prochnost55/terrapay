import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCvUAURRhsGr7zSovw_hFrUHyDri7zUWCA",
    authDomain: "tv-app-c8b26.firebaseapp.com",
    projectId: "tv-app-c8b26",
    storageBucket: "tv-app-c8b26.appspot.com",
    messagingSenderId: "295074138824",
    appId: "1:295074138824:web:6102899e34d051315af3fd",
    measurementId: "G-H9CG0KW6DD"
};

const firebase = initializeApp(firebaseConfig);

// class Firebase {
//     constructor(){
//         this.getInstance();
//     }
//     firebase=null;
//     getInstance(){
//         if(this.firebase){
//             return firebase;
//         }
//         this.firebase = initializeApp(firebaseConfig);
//         return firebase;
//     }
// }

// const firebaseInstance = new Firebase();

export default firebase;
