import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCU4dqmUJSF-TO3iTQ3CHgWAhmfqs4h8uw",
    authDomain: "whatsapp-clone-f028f.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-f028f.firebaseio.com",
    projectId: "whatsapp-clone-f028f",
    storageBucket: "whatsapp-clone-f028f.appspot.com",
    messagingSenderId: "738995843391",
    appId: "1:738995843391:web:7e98bd1266d5fc2331238a",
    measurementId: "G-4VFJYD7K6K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;