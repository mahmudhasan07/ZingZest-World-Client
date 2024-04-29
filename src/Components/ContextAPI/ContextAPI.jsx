import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from "../User/firebase.config";
import useAxios, { AxiosSource } from "../Axios/useAxios";

export const Context = createContext()
const ContextAPI = ({ children }) => {
    const auth = getAuth(app)
    const [loading,setloading] = useState(true)
    const [user, setUser] = useState()
    const axiosLink = useAxios(AxiosSource)
    
    const createUser =  (email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signUser = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setloading(true)
        return signOut(auth)
    }

    const updateInfo =(name,photo)=>{
        setloading(true)
        return updateProfile(auth.currentUser,{
            displayName : name, photoURL : photo
        })
    }


    useEffect(()=>{
        onAuthStateChanged (auth,(customer)=>{
            setUser(customer)
            setloading(false)
            const email = customer?.email
            if(email){
                axiosLink.post("/jwt", {email})
                .then(res=>{
                    // console.log(res.data);
                })
                .catch(error=>{
                    console.log(error);
                })
            }

        })
    },[auth,axiosLink])

    const data = {createUser,signUser, logOut, updateInfo,  user, loading}

    return <Context.Provider value={data}>
        {children}
    </Context.Provider>
};

export default ContextAPI;