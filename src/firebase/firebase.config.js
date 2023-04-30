// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa7Pa2qO0KJgLyTEO5Ju2bC3nEJOocU2o",
  authDomain: "the-news-dragon-6ef3d.firebaseapp.com",
  projectId: "the-news-dragon-6ef3d",
  storageBucket: "the-news-dragon-6ef3d.appspot.com",
  messagingSenderId: "555192829317",
  appId: "1:555192829317:web:9899a16e624d7a57b670ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;