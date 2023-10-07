import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
export const AuthContext = createContext(null) //created a context
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user ,setUser] = useState(null)
    
    const createUser = (email,password) => 
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>
    {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = { user,createUser,signIn,logOut}

    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;