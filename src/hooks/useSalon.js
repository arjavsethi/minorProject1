import { useCollection } from "./useCollection";

export const useSalon = (userId) => {
    const { documents } = useCollection("salons", ["owner.uid", "==", userId]);

    var salon;
    if (documents) {
        salon = {
            ...documents[0],
        };
    }

    return { salon };
};
