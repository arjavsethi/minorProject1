import { useCloudinary } from "./useCloudinary";
import { auth } from "../firebase/config";
import { updateProfile } from "firebase/auth";

import React, { useEffect, useState } from "react";
import { useFirestore } from "./useFirestore";
import { useUser } from "./useUser";
import { useUserType } from "./useUserType";

export const useUpdateProfilePhoto = (userFromParent) => {
    const { uploadImage } = useCloudinary();
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);

    const [userDocId, setUserDocId] = useState(null);

    const { updateDocument } = useFirestore("users");
    // const { getUser } = useUser(userFromParent.uid);
	const { getUserType:getUser} = useUserType()
    useEffect(() => {

		// console.log(userDocId)
        const fetchUser = async (userId) => {
            const userFromDB = await getUser(userId);
            // console.log(userFromDB)
            if (userFromDB) {
                // console.log(userFromDB)
				setUserDocId(userFromDB.userDocId);
            }
        };

        return () => {
			if(userFromParent){
				fetchUser(userFromParent.uid);

			}
        };
    }, [getUser, userFromParent]);

    const updateProfilePhoto = async (user, userProfilePhoto) => {
        setError(null);
        setIsPending(true);

        try {
            const cloudinaryResponse = await uploadImage(userProfilePhoto);

            const fbRes = await updateProfile(user, {
                photoURL: cloudinaryResponse.url,
            });

            let profileImage = {
                url: cloudinaryResponse.url,
                publicId: cloudinaryResponse.publicId,
            };

            await updateDocument({ profileImage }, userDocId);

            // console.log(fbRes)

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
    return { updateProfilePhoto, error, isPending };
};
