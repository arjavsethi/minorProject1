import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { BsCheckCircleFill, BsCalendar2CheckFill } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { MdStore } from "react-icons/md";
import { ImCross } from "react-icons/im";

import loading from "../../assets/loading.jpg";
import pfp from "../../assets/namiSquare.jpg";
import b3 from "../../assets/b3.jpg";

import "./payment_response.scss";
import { useFirestore } from "../../hooks/useFirestore";
import { useBookingSolo } from "../../hooks/useBookingSolo";
import { useUserType } from "../../hooks/useUserType";
import { useSalonForBooking } from "../../hooks/useSalonForBooking";
import BookingRecipt from "../../components/bookingRecipt/BookingRecipt";
import { useCartContext } from "../../hooks/useCartContext";

const PaymentResponse = ({ userFromContext }) => {
    const { updateDocument,deleteDocument } = useFirestore("bookings");
    const { getBooking } = useBookingSolo();
    const { getUserType } = useUserType();
	const {getSalon} = useSalonForBooking()
	const {clearCart} = useCartContext()


    const [responseFromCCAV, setResponseFromCCAV] = useState(null);
    const [dbUpdated, setDBUpdated] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [paymentCheck, setPaymentCheck] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const [booking, setBooking] = useState(null);
    const [userFromDB, setUserFromDB] = useState(null);
    const [salonFromDB, setSalonFromDB] = useState(null);

    const location = useLocation();

    // TODO: Update the status of order on Firebase according to the status from params
    useEffect(() => {
        const date = new Date();
        var dateBooked = {
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        };
        const search = location.search;
        const params = new URLSearchParams(search);
        if (responseFromCCAV === null && userFromDB === null) {
            const fetchInfo = async () => {
                let resUser = await getUserType(params.get("merchant_param1"));
                setUserFromDB(resUser);
            };
            fetchInfo();
        }
		if (responseFromCCAV === null && salonFromDB === null) {
            const fetchInfo = async () => {
				let resSalon = await getSalon(params.get("merchant_param2"))
				setSalonFromDB(resSalon)
            };
            fetchInfo();
        }
        if (responseFromCCAV === null && userFromDB && salonFromDB && !paymentCheck && !paymentStatus) {
            if (params.get("status") === "Success") {
				setPaymentStatus(true)
                setResponseFromCCAV({
                    status: params.get("status"),
                    order_id: params.get("order_id"),
                    tracking_id: params.get("tracking_id"),
                    ref_no: params.get("ref_no"),
                    userId: params.get("merchant_param1"),
                    salonId: params.get("merchant_param2"),
                    cartId: params.get("merchant_param3"),
                    bookingId: params.get("merchant_param4"),
                    paymentStatus: "Recieved",
                    dateBooked: dateBooked,
                    user: userFromDB,
					salon:salonFromDB
                });
				clearCart()
            } else {
				setPaymentStatus(false)
				const deleteBooking = async () => {
					await deleteDocument(params.get("merchant_param4"));
				}
				deleteBooking()
            }
			setPaymentCheck(true)
        }
        console.log(responseFromCCAV);
    }, [clearCart, deleteDocument, getSalon, getUserType, location.search, paymentCheck, paymentStatus, responseFromCCAV, salonFromDB, userFromDB]);

    useEffect(() => {
        if (responseFromCCAV && !dbUpdated && paymentCheck &&  paymentStatus) {
            updateDocument(responseFromCCAV, responseFromCCAV.bookingId);
            setDBUpdated(true);
        }
        if (responseFromCCAV && dbUpdated && booking === null && paymentCheck &&  paymentStatus) {
            const fetchBooking = async () => {
                const resBooking = await getBooking(responseFromCCAV.bookingId);
                setBooking(resBooking);
				setIsFetched(true)
            };

            return () => {
                fetchBooking();
            };
        }

        console.log(booking);
    }, [booking, dbUpdated, getBooking, paymentCheck, paymentStatus, responseFromCCAV, updateDocument]);

    return (
        <>
		{paymentCheck && paymentStatus && <>
			{booking && <>
				<BookingRecipt booking={booking}/>
			</>}
		</>}
		{paymentCheck && !paymentStatus && <>
			<div className="flex items-start justify-center w-screen h-screen md:items-center loading-page bg-blue-sundara">
                <div className=" mt-6 md:-mt-20 max-w-[320px] min-h-[300px] max-h-[520px] p-4 text-center bg-white rounded-md shadow-sm sm:max-w-[300px] sm:max-h-min loading-card">
                    <div className="overflow-hidden w-[100px] shadow-md mx-auto h-[100px] rounded-full grid place-items-center loading-img-wrapper bg-red-500">
                        <ImCross className="text-white text-4xl "/>
                    </div>
                    <p className="font-semibold text-2xl font-outfit my-2.5 qoute-text ">
                        Oh no, your payment failed.
                    </p>
                    {/* <div className="grid w-12 grid-cols-2 gap-1 mx-auto mt-8 justify-items-center loading-animation">
                        <div className="w-5 h-5 bg-blue-200 animate-[wave_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                        <div className="w-5 h-5 bg-blue-200 animate-[wave2_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                        <div className="w-5 h-5 bg-blue-200 animate-[wave3_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                        <div className="w-5 h-5 bg-blue-200 animate-[wave4_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                    </div> */}
					<p className="px-6 mt-2 font-medium loading-text font-outfit">
                        Don't worry, you can book your slot again from your cart checkout page.
                    </p>
					<NavLink to="/cartCheckout">
						<p className="px-6 mt-2 font-semibold underline loading-text text-xl font-outfit">
                    	    Go to cart checkout
                    	</p>
					</NavLink>
                </div>
            </div>    
		</>}
		
            
        </>
    );
};

export default PaymentResponse;
