import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD11vECbjBituOIwfE49r5iGS-l7kSu1h4",
    authDomain: "joblisting-49ac5.firebaseapp.com",
    projectId: "joblisting-49ac5",
    storageBucket: "joblisting-49ac5.appspot.com",
    messagingSenderId: "360886501840",
    appId: "1:360886501840:web:cb66ceeb7965fd2de339d5",
    measurementId: "G-DKV0NY7C1W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
export default db;