import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword
} from 'firebase/auth'; 

import {
    getFirestore, 
    doc, 
    getDoc, 
    setDoc
} from 'firebase/firestore'; 

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
export const signInWithGooglePopup = () => 
  signInWithPopup(auth, provider); 
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, provider); 

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth) return; 

  const userDocRef = doc(db, 'users', userAuth.uid); 
  const userSnapShot = await getDoc(userDocRef); 

  if(!userSnapShot.exists()){
      const { displayName, email } = userAuth; 
      const createdAt = new Date(); 

      try{
          await setDoc(userDocRef, {
              displayName, 
              email, 
              createdAt 
          }); 
      } catch (error) {
          console.log('error creating the user', error.message); 
      }
  }
    return userDocRef; 
}; 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return; 

  return await createUserWithEmailAndPassword(auth, email, password) 
}; 
