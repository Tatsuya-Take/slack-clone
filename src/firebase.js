import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqLYzt0FBN9mCaojLDbEqoOMz_fznoavg",
  authDomain: "slack-clone-879c6.firebaseapp.com",
  databaseURL: "https://slack-clone-879c6.firebaseio.com",
  projectId: "slack-clone-879c6",
  storageBucket: "slack-clone-879c6.appspot.com",
  messagingSenderId: "859179106874",
  appId: "1:859179106874:web:2fca1dd1f877d59ef3ab03",
  measurementId: "G-D699NYZM9M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;