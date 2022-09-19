import { useFirestore } from "./useFirestore";
import { useState } from "react";

export const useBookSlot = () => {
    const { addDocument,updateDocument, response } = useFirestore("bookings");
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const bookSlot = async (object) => {
        setIsPending(true);
        setError(null);
        try {
            let resAdd = await addDocument({ ...object });
            // console.log("resAdd: ", resAdd);
			await updateDocument({bookingDocId: resAdd.document.id}, resAdd.document.id);
			// console.log("resUpdate: ", resUpdate)

            if (resAdd.error) {
                setError(error.message);
                setIsPending(false);
                setIsSuccessfull(false);
            } else {
                setIsPending(false);
                setIsSuccessfull(true);
				return resAdd.document.id;
            }
        } catch (error) {
            setIsPending(false);
            setIsSuccessfull(true);
        }
    };

    return { bookSlot, isPending, isSuccessfull };
};
