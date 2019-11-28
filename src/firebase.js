import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBO4wajRc-6ENLZ_Hnd91mcSJRVT5xL8iQ",
    authDomain: "stock-vue-app-de4ab.firebaseapp.com",
    databaseURL: "https://stock-vue-app-de4ab.firebaseio.com",
    projectId: "stock-vue-app-de4ab",
    storageBucket: "stock-vue-app-de4ab.appspot.com",
    messagingSenderId: "175429948771",
    appId: "1:175429948771:web:12ef04aef6c2336d8aaf56"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
