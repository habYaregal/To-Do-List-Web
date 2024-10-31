import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkj1qpKg2IJPHoach3CYtjkE2pp-oIKw4",
  authDomain: "to-do-web-c7aeb.firebaseapp.com",
  projectId: "to-do-web-c7aeb",
  storageBucket: "to-do-web-c7aeb.appspot.com",
  messagingSenderId: "468036472136",
  appId: "1:468036472136:web:a642b600fb6daf2169f77d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to LOCAL.");
  })
  .catch((error) => {
    console.error("Failed to set persistence:", error);
  });