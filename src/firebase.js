// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCZ0Iaz-3sHsz1ks_3aojdtExVQZ9eL318",
  authDomain: "disney2-45f42.firebaseapp.com",
  databaseURL: "https://disney2-45f42-default-rtdb.firebaseio.com",
  projectId: "disney2-45f42",
  storageBucket: "disney2-45f42.appspot.com",
  messagingSenderId: "975938095941",
  appId: "1:975938095941:web:227b22ab6f4ac74d430c2c",
  measurementId: "G-96NT7KMRTQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
