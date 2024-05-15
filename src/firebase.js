
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const Key = import.meta.env.VITE_API_KEY_FIREBASE



const firebaseConfig = {
    apiKey: Key,
    authDomain: "vue-desk-8f81a.firebaseapp.com",
    projectId: "vue-desk-8f81a",
    storageBucket: "vue-desk-8f81a.appspot.com",
    messagingSenderId: "273744217385",
    appId: "1:273744217385:web:8a0e67f69c696224036338"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {
    db
}