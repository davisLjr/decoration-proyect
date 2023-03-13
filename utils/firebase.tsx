import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgKABSabS7X1Yp6ZNBU9sVMioTOO-ewMs",
  authDomain: "ale-deco.firebaseapp.com",
  projectId: "ale-deco",
  storageBucket: "ale-deco.appspot.com",
  messagingSenderId: "568853008936",
  appId: "1:568853008936:web:a43f8307d646cc01755b1d",
  measurementId: "G-0LPHRKMQR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export { db };

