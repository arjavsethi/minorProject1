import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const useUserType = () => {
    const [userType, setUserType] = useState(null);
    const getUserType = async (userId) => {
        const userColRef = collection(db, "users");
        const q = query(userColRef, where("uid", "==", userId));

        let userFromDB = {};
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            userFromDB = { ...doc.data(), userDocId: doc.id };
        });

		// console.log(userFromDB)

		return userFromDB
    };

    return { getUserType };
};
