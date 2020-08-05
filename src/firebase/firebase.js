import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAjiJ65jeKdT7IXFIWyR-BOoj2ZQ0C0ozA",
  authDomain: "test-8ca33.firebaseapp.com",
  databaseURL: "https://test-8ca33.firebaseio.com",
  projectId: "test-8ca33",
  storageBucket: "test-8ca33.appspot.com",
  messagingSenderId: "827251985889"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export {
	firebase,
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
