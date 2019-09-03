import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9kagZoKIT5rYCSRF9NVXtyUG19oEuxWI",
    authDomain: "cs8803-37c6b.firebaseapp.com",
    databaseURL: "https://cs8803-37c6b.firebaseio.com",
    projectId: "cs8803-37c6b",
    storageBucket: "",
    messagingSenderId: "260462510817",
    appId: "1:260462510817:web:f09d415cddc553d7"
  };
  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;