import { createContext, useEffect, useReducer, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import { useUserType } from "../hooks/useUserType";

export const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_SERVICE_TO_CART":
			return {...state, cart: [...action.payload.cart], bookedSalon: action.payload.bookedSalon }
		case "DELETE_SERVICE_FROM_CART":
			return {...state, cart: [...action.payload.cart], bookedSalon: action.payload.bookedSalon }
		case "ADD_ALL_SERVICE_TO_CART":
			return {...state, cart: [...action.payload.cart], bookedSalon: action.payload.bookedSalon }
		case "USER_UPDATE":
			return {...state, cart: [...action.payload.cart], bookedByUID: action.payload.bookedByUID, bookedSalon: action.payload.bookedSalon }
		case "CLEAR_CART":
			return {...state, cart: [...action.payload.cart], bookedByUID: action.payload.bookedByUID, bookedSalon: action.payload.bookedSalon }
		default:
			return {...state}
	}
}

export function CartContextProvider({ children }) {

	const {user:userContext,authIsReady} = useAuthContext()
	const {getUserType} = useUserType()
	const {updateDocument} = useFirestore("users")


	const [cartInitialUpdate, setCartInitialUpdate] = useState(false)
	const [cartWasUpdated, setCartWasUpdated] = useState(false)
	const [userFromDB,setUserFromDB] = useState(null)
	const [state, dispatch] = useReducer(cartReducer, {cart:[], bookedByUID:"", bookedSalon:{}})

	useEffect(() => {
		const fetchUser = async () => {
			let user = await getUserType(userContext.uid)
			console.log(user)
			setUserFromDB(user);
			dispatch({type:"USER_UPDATE", payload:{cart:[...user.cart],bookedSalon:{...user.bookedSalon},bookedByUID:userContext.uid}})
		}
		if(!cartInitialUpdate){
			if(authIsReady){
				if(userContext && !userFromDB){
					fetchUser()
				}else{
					dispatch({type:"USER_UPDATE", payload:{cart: [], bookedByUID:""}})
				}
				setCartInitialUpdate(true)
			}
		}

		if(cartInitialUpdate && cartWasUpdated && userContext && userFromDB){
			updateDocument({cart: state.cart, bookedSalon:state.bookedSalon}, userFromDB.userDocId);
		}
		
	}, [userContext, authIsReady, userFromDB, getUserType, cartInitialUpdate, cartWasUpdated, updateDocument, state.cart, state.bookedSalon])
	

	useEffect(() => {
		const fetchUser = async () => {
			let user = await getUserType(userContext.uid)
			console.log(user)
			setUserFromDB(user);
		}
		if(authIsReady && cartWasUpdated){
			if(userContext){
				fetchUser()
				setCartWasUpdated(false)
			}
		}
	}, [authIsReady, cartWasUpdated, getUserType, state.cart, userContext])

	const clearCart = () => {
		console.log("Clearing User Cart")
		dispatch({type: "CLEAR_CART", payload: {cart: [],bookedSalon: {},bookedByUID:""}})
		if(userContext && userFromDB){
			updateDocument({cart: [], bookedSalon:{}}, userFromDB.userDocId);
			setCartWasUpdated(true)
		}
	}

	const addAllServicesToCart = (servicesSelected, bookedSalon) => {
		console.log(servicesSelected)
		if(servicesSelected.length === 0){
			dispatch({type: "ADD_ALL_SERVICE_TO_CART", payload: {cart: [...servicesSelected],bookedSalon:{}}})
		} else {
			dispatch({type: "ADD_ALL_SERVICE_TO_CART", payload: {cart: [...servicesSelected],bookedSalon}})
		}
		
		if(userContext && userFromDB){
			if(servicesSelected.length === 0){
				updateDocument({cart: [], bookedSalon:{}}, userFromDB.userDocId);
			} else {
				updateDocument({cart: [...servicesSelected], bookedSalon:{...bookedSalon}}, userFromDB.userDocId);
			}
			setCartWasUpdated(true)
		}
	}

	const addServiceToCart = (serviceSelected, bookedSalon) => {
		// console.log(serviceId)
		let cartArray = state.cart
		cartArray.push({...serviceSelected})
		// console.log(cartArray)
		dispatch({type: "ADD_SERVICE_TO_CART", payload: {cart: [...cartArray], bookedSalon}})
		if(userContext && userFromDB){
			updateDocument({cart: [...cartArray], bookedSalon:{...bookedSalon}}, userFromDB.userDocId);
			setCartWasUpdated(true)
		}
	}

	const deleteServiceFromCart = (serviceId, bookedSalon) => {
		let cartArray = state.cart.filter((element) => element.service.serviceId !== serviceId)
		dispatch({type: "DELETE_SERVICE_FROM_CART", payload: {cart: [...cartArray], bookedSalon}})
		if(userContext && userFromDB){
			updateDocument({cart: [...cartArray], bookedSalon:{...bookedSalon}}, userFromDB.userDocId);
			setCartWasUpdated(true)
		}
	}

    return (
        <CartContext.Provider value={{...state, addServiceToCart, deleteServiceFromCart, addAllServicesToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
