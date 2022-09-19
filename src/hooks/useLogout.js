import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const [isCancelled, setIsCancelled] = useState(false);

	const navigate = useNavigate()

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            await signOut(auth);

            dispatch({ type: "LOGOUT" });
            if (!isCancelled) {
                setError(null);
                setIsPending(false);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log("Error : ", err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { logout, error, isPending };
};
