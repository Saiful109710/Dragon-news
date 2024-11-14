import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { Navigate } from 'react-router-dom';
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(loading)
    console.log(user)

    const createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser = (email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    

    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }

    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

  

    const authInfo={
        user,
        setUser,
        createNewUser,
        logOut,
        logInUser,
        loading,
        updateUserProfile
    }

    useEffect(()=>{
     const unsubscribe =    onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
  return (
   <AuthContext.Provider value={authInfo}>
        {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
