import { useSingleDoc } from "./useSingleDoc";

export const useSalonForCustomer = (salonId) => {
    const { document:salon } = useSingleDoc("salons", salonId);

    return { salon };
};
