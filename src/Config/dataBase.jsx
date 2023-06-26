import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA9Vb-O-tbSHYZ8tSSCcS1X6JDhxip2Ne4",
    authDomain: "crud-e0e99.firebaseapp.com",
    projectId: "crud-e0e99",
    storageBucket: "crud-e0e99.appspot.com",
    messagingSenderId: "1086110366757",
    appId: "1:1086110366757:web:71fc8b315acc90ed6e13cc"
  };
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)