import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuthContext } from "./useAuthContext";

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw Error("Out of scope of CartContextProvider");
    }	
    return context
};
