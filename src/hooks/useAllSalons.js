import { useCollection } from "./useCollection";

export const useAllSalons = (userId) => {
    const { documents } = useCollection("salons");

    var salons;
    if (documents) {
        salons =[...documents]
    }

    return { salons };
};
