import React, { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useUser } from "./useUser";

export const useTypeCheck = () => {
    const { user: userContext, authIsReady } = useAuthContext();

    const [waitingUser, setWaitingUser] = useState(null);
    useEffect(() => {
        setError(null);
        if (authIsReady) {
            if (userContext && waitingUser === null) {
                setWaitingUser(userContext);
                setError(null);
            }
            setError("No user available");
        }
    }, [userContext, authIsReady, waitingUser]);

    const { getUser } = useUser(waitingUser ? waitingUser.uid : null);

    const [userDB, setUserDB] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const [userType, setUserType] = useState(null);

    useEffect(() => {
        if (userDB === null && userContext) {
            setIsPending(true);
            setError(null);

            const fetchUser = async () => {
                try {
                    const userFromDB = await getUser();
                    // console.log(userFromDB)
                    if (userFromDB) {
                        setUserDB(userFromDB);
                        setUserType(userFromDB.type);
                    }
                    setIsPending(false);
                    setError(null);
                } catch (err) {
                    setIsPending(false);
                    setError(err.message);
                }
            };

            if (authIsReady) {
                fetchUser();
            }
        }
    }, [getUser, userDB, authIsReady, userContext]);

    return { userType, userDB, isPending, error };
};
