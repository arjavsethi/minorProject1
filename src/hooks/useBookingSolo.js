import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useBookingSolo = () => {
	const [booking, setBooking] = useState(null);
    const getBooking = async (bookingId) => {
        const bookingDocRef = doc(db, "bookings", bookingId);
        let bookingFromDB = {};
        const docSnapshot = await getDoc(bookingDocRef);
        if (docSnapshot.exists()) {
            bookingFromDB = { ...docSnapshot.data(), docId: docSnapshot.id };
            setBooking(bookingFromDB);
        }
        return bookingFromDB;
    };

    // getSalon("JvoUjTkdjV2MOdaknb8t")

    return { getBooking };
}
