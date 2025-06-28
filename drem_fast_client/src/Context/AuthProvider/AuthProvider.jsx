import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
         
const googleProvider =new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
    const createUser =(Email,password)=>{
         setLoading(true);
        return createUserWithEmailAndPassword(auth,Email,password)
    }


    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider);

    }

useEffect(()=>{
    const unSubscrive =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
    });
    return()=>{
        unSubscrive()
    }
},[])

    const authinfo ={
        loading,
        user,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }
    return (
       <AuthContext value={authinfo}>
        {children}
       </AuthContext>
       
    );
};

export default AuthProvider;