// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvVUDrvQpxQAronW2w_-Hi7HcY4ebiOVU",
  authDomain: "rn-app-firebaseauth.firebaseapp.com",
  projectId: "rn-app-firebaseauth",
  storageBucket: "rn-app-firebaseauth.appspot.com",
  messagingSenderId: "330875130127",
  appId: "1:330875130127:web:b5ce90b09f7a1c73a92e7a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {

  app = firebase.initializeApp(firebaseConfig);

} else {

  app = firebase.app()

}

const auth = firebase.auth()

export { auth }; 