import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'; 

 const firebaseConfig = {
    apiKey: "AIzaSyCOmDMLmsk7aNugJPYhoQ85xtAPkprgeY8",
    authDomain: "vintage-shop-db.firebaseapp.com",
    projectId: "vintage-shop-db",
    storageBucket: "vintage-shop-db.appspot.com",
    messagingSenderId: "979376901589",
    appId: "1:979376901589:web:5b368b8eb20b20c1d7415c"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 

  provider.setCustomParameters({
    prompt: "select_account"
  }); 

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 