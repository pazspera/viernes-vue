import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSfUJy2mzoSgZPciQKGDd62QVeV5uUHL0",
  authDomain: "viernes-vue.firebaseapp.com",
  projectId: "viernes-vue",
  storageBucket: "viernes-vue.appspot.com",
  messagingSenderId: "916349536258",
  appId: "1:916349536258:web:f7bb1298c92c8ac86c3f1b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
