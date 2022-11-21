import "./BookingData.scss";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePopper } from "react-popper";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

import { FaUserCheck, FaUserClock, FaUserTimes, FaCheck } from "react-icons/fa";

import { useUserType } from "../../hooks/useUserType";

import { PortalSJ } from "../portalSJ/PortalSJ";

import profile from "../../assets/profile.png";
import moreOptions from "../../assets/moreOptions.png";
import statusChange from "../../assets/statusChange.png";
import BookingRowSolo from "./BookingRowSolo";
import { useBookings } from "../../hooks/useBookings";

export default function BookingData({ userContext }) {
    const { getUserType } = useUserType();
    const [userFromDB, setUserFromDB] = useState(null);
    const [salonDB, setSalonDB] = useState(null);
    const [salonBookings, setSalonBookings] = useState(null);
    const [customerBookings, setCustomerBookings] = useState(null);

    const [isSalonOwner, setIsSalonOwner] = useState(null);

    const [statusChangePopup, setStatusChangePopup] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 500 });
    const { getBookingsBySalonId, getBookingsByUserId } =
        useBookings("bookings");

    useEffect(() => {
        const fetchBookingsBySalon = async () => {
            let bookings = await getBookingsBySalonId(salonDB.salonId);
            if (bookings) {
                console.log("By Salon :", bookings);
            }
            setSalonBookings(bookings);
        };
        const fetchBookingsByUser = async () => {
            let bookings = await getBookingsByUserId(userFromDB.uid);
            if (bookings) {
                console.log("By user", bookings);
            }
            setCustomerBookings(bookings);
        };

        if (isSalonOwner && salonDB && salonBookings === null) {
            fetchBookingsBySalon();
        } else if (userFromDB && customerBookings === null) {
            fetchBookingsByUser();
        }
    }, [
        customerBookings,
        getBookingsBySalonId,
        getBookingsByUserId,
        isSalonOwner,
        salonBookings,
        salonDB,
        userFromDB,
    ]);

    useEffect(() => {
        if (userContext && !userFromDB) {
            const fetchUser = async () => {
                let userFromDB = await getUserType(userContext.uid);
                if (userFromDB) {
                    setUserFromDB(userFromDB);
                    // console.log(userFromDB);
                    if (userFromDB.type === "salonOwner") {
                        setIsSalonOwner(true);
                        const colRef = collection(db, "salons");
                        const q = query(
                            colRef,
                            where("owner.uid", "==", userFromDB.uid)
                        );

                        let salonFromDB = {};
                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            salonFromDB = { ...doc.data(), salonId: doc.id };
                        });
                        // console.log("salon :", salonFromDB);
                        setSalonDB(salonFromDB);
                    }
                }
            };
            fetchUser();
        }
    }, [getUserType, userContext, userFromDB]);

    // useEffect(() => {
    //     // if(userFromDB && isSalonOwner){
    //     // }
    // }, []);

    return (
        <>
            <div className="bookings-data-wrapper">
                <h6 className="table-heading">
                    {isSalonOwner ? "Your Homestay Bookings" : "Your Bookings"}
                </h6>
                <div className="login-hr table-head-hr" />
                <div className="bookings-table">
                    {isSalonOwner
                        ? salonBookings &&
                        salonBookings.map((booking, index) => (
                            <>
                                <BookingRowSolo
                                    booking={booking}
                                    key={index}
                                    salonOwner={true}
                                />
                            </>
                        ))
                        : customerBookings &&
                        customerBookings.map((booking, index) => (
                            <>
                                <BookingRowSolo
                                    booking={booking}
                                    key={index}
                                    salonOwner={false}
                                />
                            </>
                        ))}
                </div>
            </div>
        </>
    );
}
