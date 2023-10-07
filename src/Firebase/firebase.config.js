// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFktN-beNVMq9dkfwfnjyPqVlGof8ofD4",
  authDomain: "event-management-project-b28de.firebaseapp.com",
  projectId: "event-management-project-b28de",
  storageBucket: "event-management-project-b28de.appspot.com",
  messagingSenderId: "919236306534",
  appId: "1:919236306534:web:8fb83faa7d053c39702fa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);
export default app