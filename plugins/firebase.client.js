import firebase from 'firebase/app'

// only import the individual SDK components we use
import 'firebase/firestore'
// import 'firebase/auth';
// import 'firebase/functions'

if (!firebase.apps.length) {    
  let config = {};
  config = {
    apiKey: "AIzaSyCj2f4GN2Mnv9LV9eiaBdjeuciHBUYke78",
    authDomain: "csabaszabo-dev.firebaseapp.com",
    databaseURL: "https://csabaszabo-dev.firebaseio.com",
    projectId: "csabaszabo-dev",
    storageBucket: "csabaszabo-dev.appspot.com",
    messagingSenderId: "84065176904",
    appId: "1:84065176904:web:4b120c5d746021ea26f77d",
    measurementId: "G-4STD1MZ49D"
  }
  firebase.initializeApp(config);
}

const fireDb = firebase.firestore();
export {fireDb}

// export const Functions = firebase.functions();
// export const Auth = firebase.auth();
// export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase
