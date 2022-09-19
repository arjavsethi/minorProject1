import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router";
import { Link} from "react-router-dom";

import { MdOpenInNew } from "react-icons/md";

import Footer from "../../components/footer/Footer";

import "./CartCheckout.scss";
import ServiceCardCart from "./ServiceCardCart";

import { useCartContext } from "../../hooks/useCartContext";
import { useAlphaNumericId } from "../../hooks/useAlphaNumericId";
import { useAuthContext } from "../../hooks/useAuthContext";

const CartCheckout = () => {
    const { cart, bookedByUID, bookedSalon, addAllServicesToCart , addServiceFromCart, deleteServiceFromCart } =
        useCartContext();

	const {user:userContext} = useAuthContext()

    const [deletedItems, setDeletedItems] = useState([]);
    const [localCart, setLocalCart] = useState([...cart]);
    const [itemCount, setItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

	const [error, setError] = useState(null)

	const navigate = useNavigate();
	const {generateID} = useAlphaNumericId()

    useEffect(() => {
		
        console.log("Cart: ",cart);
		console.log("Deleted Items: ",deletedItems)
		console.log("Booked Salon: ",bookedSalon)
        setItemCount(cart.length);
        setLocalCart([...cart]);
        const totalAmount = cart.reduce(function (acc, element) {
            acc = acc + parseInt(element.service.price.discounted);
            return acc;
        }, 0);

        console.log(totalAmount);
        setCartTotal(totalAmount);
    }, [bookedSalon, cart, deletedItems]);

	const deleteOneService = (serviceId) => {
		let cartCopy = cart.filter(element => element.service.serviceId !== serviceId)
		let deletedFromCart = cart.filter(element => element.service.serviceId === serviceId)
		setDeletedItems(prev => [...prev, ...deletedFromCart]);
		addAllServicesToCart(cartCopy, bookedSalon);
	}

	const addOneService = (serviceId) => {
		let serviceToAdd = deletedItems.filter(element => element.service.serviceId === serviceId)
		let deletedServicesUpdated = deletedItems.filter(element => element.service.serviceId !== serviceId)
		console.log("To add: ", serviceToAdd)
		let cartCopy = [...cart, ...serviceToAdd];
		setDeletedItems([...deletedServicesUpdated])
		addAllServicesToCart(cartCopy, bookedSalon);
	}

	const handleBookSlot = () => {
		setError(null)

		if(userContext){
			let cartId = generateID(20)
			setError(null)
			return navigate(`/salon/${bookedSalon.id}/bookSlot`, {
		        state: {
		            data: [...cart],
					cartId: cartId,
					userId: bookedByUID,
					salonId: bookedSalon.id
		        },
			})
		} else {
			setError("You must be looged in to book slot");
		}
	}

    return (
        <>
            <div className="cartItems w-full">
				{!userContext && <>
					<div className="cart-top shadow-md bg-white mx-auto max-w-[320px] md:max-w-[80%] p-2 rounded mt-8 md:mt-8">
						<p className="items-count text-red-500 max-w-[320px] md:max-w-[80%] mx-auto text-lg md:text-3xl font-fira font-medium mr-2">
							You must be logged in book slot !!
						</p>
						<Link className="bg-site-500 text-md text-white font-normal py-1 px-2 my-1 rounded" to="/user-flow?click-type=login">Register/Login Now</Link>
					</div>
				</>}
					
                <div className="cart-top text-right mx-auto max-w-[320px] md:max-w-[80%] mt-8 md:mt-8">
                    <p className="items-count md:text-3xl font-fira font-semibold mr-2">
                        Total Items Count: {itemCount} Items
                    </p>
                </div>
                {cart &&
                    cart.map((element, index) => (
                        <ServiceCardCart
							element={element}
                            salon={bookedSalon}
                            key={index}
                            service={element.service}
                            specialist={element.specialist}
							deleteOneService={deleteOneService}
							addOneService={addOneService}
                        />
                    ))}
                <div className="cart-bottom flex justify-between items-center mx-auto max-w-[320px] md:max-w-[80%] mt-6">
                    <p className="items-price font-fira md:text-3xl text-lg font-semibold mr-2">
                        Total Amount : ₹ {cartTotal}
                    </p>
					{	userContext ? <>
						<div className="bookSlot-button cursor-pointer text-white  flex items-center py-2 px-3  md:py-4 md:px-6 rounded min-w-[100px] bg-blue-base"
						onClick={handleBookSlot}
					>
                        <span className="font-fira font-medium text-md md:text-2xl mr-1 md:mr-2">
                            Book Slot
                        </span>{" "}
                        <MdOpenInNew className="text-3xl md:text-4xl" />
                    </div>
					</> : <>
					<div className="bookSlot-button cursor-not-allowed text-white  flex items-center py-2 px-3  md:py-4 md:px-6 rounded min-w-[100px] bg-site-300"
					>
                        <span className="font-fira font-medium text-md md:text-2xl mr-1 md:mr-2">
                            Book Slot
                        </span>{" "}
                        <MdOpenInNew className="text-3xl md:text-4xl" />
                    </div>
					</> }
                    
                </div>
				{deletedItems.length > 0 && <>
					<div className="cart-top mx-auto w-full mt-8 md:mt-8">
                    <p className="items-count max-w-[320px] md:max-w-[80%] mx-auto text-xl md:text-3xl font-fira font-semibold mr-2">
                        Recently Deleted Items
                    </p>
					{deletedItems &&
                        deletedItems.map((element, index) => (
                            <ServiceCardCart
								element={element}
                                salon={bookedSalon}
                                key={index}
                                service={element.service}
                                specialist={element.specialist}
								deleteOneService={deleteOneService}
								isDeleted={true}
								addOneService={addOneService}
                            />
                        ))}
                </div>
				</>}
				
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default CartCheckout;
