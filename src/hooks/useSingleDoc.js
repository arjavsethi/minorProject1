import {
    onSnapshot,
    orderBy,
    doc,
} from "@firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export const useSingleDoc = (collectionName, _docId, _orderItemsBy) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    const docId = useRef(_docId).current;
    const orderItemsBy = useRef(_orderItemsBy).current;

    useEffect(() => {
        let docRef = doc(db, collectionName, docId);

        const unsubscribe = onSnapshot(
            docRef,
            (snapshot) => {
                setDocument({...snapshot.data(), id: snapshot.id});
            },
            (error) => {
                console.log(error);
                setError(error);
            }
        );

        return () => unsubscribe();
    }, [collectionName, docId, orderItemsBy]);

    return { document, error };
};
