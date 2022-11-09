import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Footer from "../../components/footer/Footer";
import ServiceCardBooking from "../../components/serviceCardBooking/ServiceCardBooking";
import { useCartContext } from "../../hooks/useCartContext";
import { useSalonForCustomer } from "../../hooks/useSalonForCustomer";
import { useUser } from "../../hooks/useUser";
import BookSlot from "../bookSlot/BookSlot";
import { useMediaQuery } from "react-responsive";
import "./booking.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

const Booking = ({ userId }) => {
    const { user } = useUser(userId);
    const { salonId } = useParams();
    const navigate = useNavigate();

    const { user: userContext } = useAuthContext();

    const {
        cart,
        addAllServicesToCart,
        deleteServiceFromCart,
        addServiceToCart,
    } = useCartContext();

    const isMobile = useMediaQuery({ maxWidth: 500 });
    const { salon } = useSalonForCustomer(salonId);

    const [servicesSelected, setServicesSelected] = useState([]);
    const [cartCheck, setCartCheck] = useState(false);
    const [cartUpdated, setCartUpdated] = useState(false);

    if (salon) {
        // console.log(salon.services);
    }

    useEffect(() => {
        if (!cartCheck && cart.length > 0 && servicesSelected.length === 0) {
            setServicesSelected([...cart]);
            setCartCheck(true);
        }
    }, [cart, cartCheck, servicesSelected]);

    const addServiceById = (serviceId, specialistId) => {
		setCartUpdated(false);
        if (salon && salon.services && salon.specialists) {
            if (
                !servicesSelected.find(
                    (service) => service.service.serviceId === serviceId
                )
            ) {
                // console.log("Here");
                let serviceFromArray = salon.services.find(
                    (service) => service.serviceId === serviceId
                );
                let specialistFromArray = salon.specialists.find(
                    (specialist) => specialist.specialistId === specialistId
                );
                let serviceObject = {
                    service: serviceFromArray,
                    specialist: specialistFromArray,
                };
                setServicesSelected((prev) => [...prev, { ...serviceObject }]);
            } else {
                alert("You can't select a service twice");
            }
        }
    };

    const deleteServiceById = (serviceId) => {
		setCartUpdated(false);
        if (
            servicesSelected &&
            servicesSelected.find(
                (service) => service.service.serviceId === serviceId
            )
        ) {
            let servicesSelectedArray = servicesSelected.filter(
                (service) => service.service.serviceId !== serviceId
            );
            setServicesSelected(servicesSelectedArray);
        }
    };

    const handleCartUpdate = () => {
        addAllServicesToCart(servicesSelected, salon);
		setCartUpdated(true);
    };

    const handleBookingServices = () => {
        console.log(servicesSelected);
		return navigate(`/cartCheckout`)
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    useEffect(() => {
        // console.log(cart);
        console.log(servicesSelected);
    }, [servicesSelected]);

    console.log(servicesSelected);
    return (
        <>
            <div className="bookingContainer md:px-8 md:pt-8 pt-6">
                <p className="font-fira font-semibold text-xl px-7 md:px-0">
                    Add Room with specification to your wishlist
                </p>
                <div className="login-hr margin-auto" />
                <p className="font-medium font-fira w-8/12 text-center mx-auto md:mx-0 mt-4 md:mt-6">
                    Room Selected {isMobile && <br />}(Your Selected
                    Room will appear here)
                </p>
                <div className="login-hr small-one-hr margin-auto" />
                <div className="servicesCatalogue grid grid-cols-1 px-2 md:grid-cols-3 gap-4 md:gap-4">
                    {servicesSelected &&
                        salon &&
                        servicesSelected.map((service, index) => (
                            <>
                                <ServiceCardBooking
                                    index={index}
                                    service={service.service}
                                    key={service.service.serviceId}
                                    specialists={salon.specialists}
                                    bottom={false}
                                    addServiceById={addServiceById}
                                    deleteServiceById={deleteServiceById}
                                />
                            </>
                        ))}
                </div>
                <p className="subheading  added-services margin-auto mt-4 md:mt-6">
                    Rooms Available
                </p>
                <div className="login-hr small-one-hr margin-auto" />
                <div className="servicesCatalogue grid grid-cols-1 px-2 md:grid-cols-3 gap-4 md:gap-4">
                    {salon &&
                        salon.services.map((service, index) => (
                            <>
                                <ServiceCardBooking
                                    index={index}
                                    service={service}
                                    specialists={salon.specialists}
                                    key={service.serviceId}
                                    bottom={true}
                                    addServiceById={addServiceById}
                                    deleteServiceById={deleteServiceById}
                                />
                            </>
                        ))}
                </div>

                <div className="button-wrapper-book md:flex md:justify-between items-center md:flex-row flex-col">
                    <div
                        className="py-3 bg-blue-base rounded text-center text-[25px] font-[400] text-white font-fira md:w-[48%] w-[100%] cursor-pointer"
                        // onClick={() =>
                        //     navigate(`/salon/${salonId}/booking/bookSlot`, {
                        //         state: {
                        //             data: [...servicesSelected]
                        //         },
                        //     })
                        // }
                        onClick={handleCartUpdate}
                    >
                        Update Wishlist
                    </div>
					{cartUpdated ? <>
						<button
                        className="buttonCheckoutBooking py-3 bg-blue-base rounded text-center text-[25px] font-[400] text-white font-fira md:w-[48%] w-[100%] cursor-pointer"
                        // onClick={() =>
                        //     navigate(`/salon/${salonId}/booking/bookSlot`, {
                        //         state: {
                        //             data: [...servicesSelected]
                        //         },
                        //     })
                        // }
                        onClick={handleBookingServices}
                    >
                        Checkout
                    </button>
					</> : <>
					<button
                        className="buttonCheckoutBooking py-3 bg-blue-base opacity-60 rounded text-center text-[25px] font-[400] text-white font-fira md:w-[48%] w-[100%] cursor-not-allowed"
                        // onClick={() =>
                        //     navigate(`/salon/${salonId}/booking/bookSlot`, {
                        //         state: {
                        //             data: [...servicesSelected]
                        //         },
                        //     })
                        // }
						disabled
                        onClick={handleBookingServices}
                    >
                        Checkout
                    </button>
					</>}
                    
                </div>

				<p className="advice ml-8 my-2">* Update Your Cart Before checkout</p>
            </div>

            {/* <Footer /> */}
        </>
    );
};

export default Booking;
