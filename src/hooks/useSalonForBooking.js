import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useSalonForBooking = () => {
    const [salon, setSalon] = useState(null);
    const getSalon = async (salonId) => {
        const salonDocRef = doc(db, "salons", salonId);

        let salonFromDB = {};
        const docSnapshot = await getDoc(salonDocRef);
        if (docSnapshot.exists()) {
            salonFromDB = { ...docSnapshot.data(), docId: docSnapshot.id };
            setSalon(salonFromDB);
        }

        return salonFromDB;
    };

    // getSalon("JvoUjTkdjV2MOdaknb8t")

    return { getSalon };
};
