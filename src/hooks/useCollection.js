import { collection,query,where, onSnapshot, orderBy } from "@firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collectionName, _queryMade, _orderItemsBy) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

	const queryMade = useRef(_queryMade).current
	const orderItemsBy = useRef(_orderItemsBy).current

    useEffect(() => {
        let collectionRef = collection(db, collectionName);

		var q;
		if(queryMade && orderItemsBy){
			q = query(collectionRef, where(...queryMade),orderBy(...orderItemsBy))
		}
		else if(queryMade){
			q = query(collectionRef, where(...queryMade))
		}
		 else {
			q = null;
		}

        const unsubscribe = onSnapshot(
            queryMade ? q : collectionRef,
            (snapshot) => {
                let results = [];
                snapshot.docs.map((doc) =>
                    results.push({ ...doc.data(), id: doc.id })
                );
                setDocuments(results);
            },
            (error) => {
                console.log(error);
                setError(error);
            }
        );

        return () => unsubscribe();
    }, [collectionName, queryMade, orderItemsBy]);

    return { documents, error };
};
