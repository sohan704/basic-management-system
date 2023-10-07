import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState('');
  
  
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () => {
    setLoading(true);
     return signOut(auth);
  }

  
  useEffect(()=>{
    const observe = onAuthStateChanged(auth,createUser => {
     console.log('shifted',createUser);
     setUser(createUser);
     setLoading(false);
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
    loading
   
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;