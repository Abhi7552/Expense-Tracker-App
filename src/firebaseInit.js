import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvY7ZTsqnrtfsMMG65jBfPqrH4WmAIZO8",
  authDomain: "expense-tracker-app-163ae.firebaseapp.com",
  projectId: "expense-tracker-app-163ae",
  storageBucket: "expense-tracker-app-163ae.appspot.com",
  messagingSenderId: "833534410256",
  appId: "1:833534410256:web:59d44d1c9c4e34f8fad495"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
