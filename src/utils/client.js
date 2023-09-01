
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child, update } from "firebase/database";

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
const database = getDatabase(firebase);

console.log(firebase)
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

// export default firebase;


export const getUserFromDB = (userEmail) => {
    return new Promise((resolve, reject)=>{
        try{
            let uid = generateUID(userEmail);
            get(child(ref(database), `users/${uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    resolve(snapshot.val());
                } else {
                    resolve();
                }
            })
        } catch (e) {
            reject(e)
        }
    })
}

export const saveDataToDB = (data) => {
    return new Promise((resolve, reject)=>{
        try{
            let uid = generateUID(data.email);
            set(ref(database, 'users/' + uid), data);
            resolve();
        } catch (e) {
            reject(e)
        }
    })
}

export const updateUserInDB = (data) => {
    return new Promise((resolve, reject)=>{
        try{
            let uid = generateUID(data.email);
            update(ref(database, 'users/' + uid), data);
            resolve();
        } catch (e) {
            reject(e)
        }
    })
}
function generateUID(email){
    email = email.toLowerCase();
    email = email.replace(/[^a-z]/g, "")
    
    return email;
}
