import { useState } from "react";
import axios from "axios";

export const useCloudinary = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const uploadImage = async (userImage) => {
        setError(null);
        setIsPending(true);
        try {
            const formData = new FormData();
            formData.append("file", userImage);
            formData.append("upload_preset", "bizupreach_public_preset");

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/bizupreach/image/upload",
                formData
            );
            // console.log(response.data.url);
            // console.log(response.data.public_id);
            return {
                url: response.data.url,
                publicId: response.data.public_id,
            };
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    };

    return { uploadImage, isPending, error };
};
