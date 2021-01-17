import firebase from "firebase";
import "firebase/storage";

// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAgfKTjwO__a3EYthWIUc_lGPzh5hZpgQ",
  authDomain: "makestories-test.firebaseapp.com",
  projectId: "makestories-test",
  storageBucket: "makestories-test.appspot.com",
  messagingSenderId: "74310216796",
  appId: "1:74310216796:web:8522a7d523046f5b354a99"
};

const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { fire, storage };
