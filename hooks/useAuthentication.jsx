import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

const useAuthentication = () => {

    const [userAuth, setUserAuth] = useState()

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if (!user) {
                setUserAuth()
            }
            
            setUserAuth(user)
        })

        return () => unsuscribe()
    }, [])

    return userAuth
}
 
export default useAuthentication;