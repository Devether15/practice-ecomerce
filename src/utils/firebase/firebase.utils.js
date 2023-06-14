import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC8w0JiuVQ6GsJCUwESPys5vg6PO1FFHk",
    authDomain: "practice-ecomerce.firebaseapp.com",
    projectId: "practice-ecomerce",
    storageBucket: "practice-ecomerce.appspot.com",
    messagingSenderId: "711112717353",
    appId: "1:711112717353:web:c408bf3d25afa71ce9d838"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
