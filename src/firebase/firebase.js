import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBu3XLb7uUfWpPfBD14O44jUOL-OUccqP4",
  authDomain: "online-education-luckit.firebaseapp.com",
  databaseURL: "https://online-education-luckit.firebaseio.com",
  projectId: "online-education-luckit",
  storageBucket: "online-education-luckit.appspot.com",
  messagingSenderId: "529337483486"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
  });
export {
	firebase,
  database,
  db,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
