import {
    collection,
    query,
    where,
    onSnapshot,
    orderBy,
	getDocs
} from "@firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export const useBookings = (collectionName) => {
    const [salonId, setSalonId] = useState(null);
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // const queryMade = useRef(_queryMade).current;
    // const orderItemsBy = useRef(_orderItemsBy).current;

    // useEffect(() => {
    //     let collectionRef = collection(db, collectionName);

    //     let q = query(collectionRef, where("salonId", "==", salonId));

    //     const unsubscribe = onSnapshot(
    //         q,
    //         (snapshot) => {
    //             let results = [];
    //             snapshot.docs.map((doc) =>
    //                 results.push({ ...doc.data(), id: doc.id })
    //             );
    //             setDocuments(results);
    //         },
    //         (error) => {
    //             console.log(error);
    //             setError(error);
    //         }
    //     );

    //     return () => unsubscribe();
    // }, [collectionName, salonId]);
	// useEffect(() => {
	// 	if(documents){
	// 		console.log(documents)
	// 	}
		
	// }, [documents])

    const getBookingsBySalonId = async(salonId) => {
		let collectionRef = collection(db, collectionName);

        let q = query(collectionRef, where("salonId", "==", salonId));

        let bookings = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
			bookings.push({...doc.data(), docId: doc.id})
        });
		// console.log(bookings)
		setDocuments(bookings)

		return bookings
	};
	const getBookingsByUserId = async(userId) => {
		let collectionRef = collection(db, collectionName);

        let q = query(collectionRef, where("bookedBy", "==", userId));

        let bookings = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
			bookings.push({...doc.data(), docId: doc.id})
        });
		// console.log(bookings)
		setDocuments(bookings)

		return bookings
	};

	// getBookingsBySalonId("JvoUjTkdjV2MOdaknb8t")

    return {getBookingsBySalonId, getBookingsByUserId};
};
