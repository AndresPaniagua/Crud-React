import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCir_SHYPy9DZQQiVZCIY8xw0M64hQp1No",
    authDomain: "crud-2ca21.firebaseapp.com",
    projectId: "crud-2ca21",
    storageBucket: "crud-2ca21.appspot.com",
    messagingSenderId: "291879754665",
    appId: "1:291879754665:web:aa1c97e0ee19ad376c02b8"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)