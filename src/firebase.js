import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBPug_K3KcRGqzNCmZKsJBRn5BAbJ4qkMc",
        authDomain: "facebook-clone-f46eb.firebaseapp.com",
        projectId: "facebook-clone-f46eb",
        storageBucket: "facebook-clone-f46eb.appspot.com",
        messagingSenderId: "773331039090",
        appId: "1:773331039090:web:96f9e6e7cea297bf7523eb",
        measurementId: "G-X19HLXKP9X"
});

const db = firebaseApp.firestore();

export default db;