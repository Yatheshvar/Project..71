import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAsmzvtGAmNS4l_wrywhw7Be7w3ABorO6E",
  authDomain: "e-ride-e6f31.firebaseapp.com",
  projectId: "e-ride-e6f31",
  storageBucket: "e-ride-e6f31.appspot.com",
  messagingSenderId: "730538285419",
  appId: "1:730538285419:web:c1f3b7a0748b6831ff542e"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
