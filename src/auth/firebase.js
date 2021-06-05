import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDuxlHeO4BrvW2WYczO_HHR4igJbtyrmBs',
  authDomain: 'movie-app-d4051.firebaseapp.com',
  projectId: 'movie-app-d4051',
  storageBucket: 'movie-app-d4051.appspot.com',
  messagingSenderId: '717847514570',
  appId: '1:717847514570:web:2ba1eb601a4ae0f5b8d333',

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.EACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.EACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.EACT_APP_FIREBASE_MESSAGE_SENDER,
  // appId: process.env.EACT_APP_FIREBASE_API_ID,
});

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName: displayName });
  } catch (error) {
    alert('The email address is already in use by another account!');
  }
};

export const signIn = async (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('LOGIN', user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
};

export const signOut = () => firebase.auth().signOut();

export const auth = firebaseApp.auth();
export default firebaseApp;
