import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD0jb0wWpqBePjmp00shjJrhFS13DXQ1S8",
  authDomain: "onlineeducation-bca08.firebaseapp.com",
  databaseURL: "https://onlineeducation-bca08.firebaseio.com",
  projectId: "onlineeducation-bca08",
  storageBucket: "onlineeducation-bca08.appspot.com",
  messagingSenderId: "751601510102"
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
