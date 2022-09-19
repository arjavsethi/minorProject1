import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, updatePhoneNumber} from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

//Database
import { db } from "../firebase/config";
import { useFirestore } from "./useFirestore";


export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext();

    //Storing User Into DB
    const { addDocument, response } = useFirestore("users");
	

    const signup = async (email, password, displayName, userType) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(res.user);

            if (!res) {
                throw new Error("Could not complete signUp");
            }
			// debugger;

            await updateProfile(res.user, { displayName });
            // const resPhone = await updatePhoneNumber(auth.currentUser, phoneCrediential );
			// console.log(resPhone)

            dispatch({ type: "LOGIN", payload: res.user });
			console.log(res.user)


            addDocument({
                name: res.user.displayName,
                email: res.user.email,
                uid: res.user.uid,
				type: userType,
            });

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
    };

	

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { signup, error, isPending };
};
