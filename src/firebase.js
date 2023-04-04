import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQvVP_PGnumqIvP5iKjVFtS8CJNbZZj8Q",
    authDomain: "netflixclone-b3482.firebaseapp.com",
    projectId: "netflixclone-b3482",
    storageBucket: "netflixclone-b3482.appspot.com",
    messagingSenderId: "846711108854",
    appId: "1:846711108854:web:8142c92a50569b99cb68d7",
    measurementId: "G-1C4394BMGD"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);