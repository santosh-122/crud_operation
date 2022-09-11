import firebase from "firebase/compat/app";
 import {getFirestore} from '@firebase/firestore';
 import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyB84Sb1sk_zGx6kRhZOFnBr0fIoM8KOPs0",
  authDomain: "santosh-38794.firebaseapp.com",
  databaseURL: "https://santosh-38794-default-rtdb.firebaseio.com",
  projectId: "santosh-38794",
  storageBucket: "santosh-38794.appspot.com",
  messagingSenderId: "830683212236",
  appId: "1:830683212236:web:5eeefb1503efb400911569"
  };
  
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = firebase.database();
  //  export const db = getFirestore();
  
  // export default app.database().ref();
  export default app;