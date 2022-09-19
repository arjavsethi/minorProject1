import React from 'react'
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

//Database
import { db } from "../firebase/config";
import { useFirestore } from "./useFirestore";
const usePhoneSignUp = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext();
    const { addDocument, response } = useFirestore("users");
    const { user: userContext } = useAuthContext();
    const signUp = (displayName,phoneNumber, userType, email) => {
        setError(null);
        setIsPending(true);
        try {
            if (userContext) {
                const user = {
                    name: displayName,
                    email: email,
                    uid: userContext.uid,
                    type: userType,
					phoneNumber: phoneNumber,
					cart: []
                }
                console.log(user)
                addDocument({
                    ...user
                });
                // dispatch({ type: "LOGIN", payload: res.user });
            }
            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }


    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);
    return { signUp, error, isPending }
}

export default usePhoneSignUp