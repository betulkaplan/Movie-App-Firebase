import firebase from 'firebase/app';
import 'firebase/app';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EACT_APP_FIREBASE_MESSAGE_SENDER,
  appId: process.env.EACT_APP_FIREBASE_API_ID,
});

export const auth = app.auth();
export default app;
