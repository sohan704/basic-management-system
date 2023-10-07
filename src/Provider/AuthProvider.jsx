import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const createUser = (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () => {
     return signOut(auth);
  }

  useEffect(()=>{
    const observe = onAuthStateChanged(auth,createUser => {
     console.log('shifted',createUser);
     setUser(createUser);
    })
    return () => {
      observe();
    }
  },[])

  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    setLoggedIn,
    loggedIn
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;