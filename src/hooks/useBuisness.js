import { useFirestore } from "./useFirestore";
import { useAuthContext } from "./useAuthContext";
import { useState, useEffect } from "react";
import { useUserType } from "./useUserType";

export default function useBuisness() {
    const { addDocument } = useFirestore("salons");
    const { user: userContext } = useAuthContext();

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const [userDocId, setUserDocId] = useState(null);
    const { updateDocument } = useFirestore("users");
    const { getUserType: getUser } = useUserType();
    useEffect(() => {
        const fetchUser = async (userId) => {
            const userFromDB = await getUser(userId);
            if (userFromDB) {
				console.log(userFromDB)
                setUserDocId(userFromDB.userDocId);
            }
        };

        return () => {
            if (userContext) {
                fetchUser(userContext.uid);
            }
        };
    }, [getUser, userContext]);

    const addSalon = async (buisness) => {
        let addedSalon = await addDocument({ ...buisness });

        setError(null);
        setIsPending(true);

        try {
			console.log(addedSalon)
			console.log(userDocId)
            await updateDocument({ salonOwned : addedSalon.document.id }, userDocId);
			

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

    return { addSalon };
}
