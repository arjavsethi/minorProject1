import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { useNavigate, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";

import { FaUserCheck, FaUserClock, FaUserTimes, FaCheck } from "react-icons/fa";

// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/config";

import { useUserType } from "../../hooks/useUserType";
import { useBookingStatus } from "../../hooks/useBookingStatus";
import { useSalonForBooking } from "../../hooks/useSalonForBooking";

import { PortalSJ } from "../portalSJ/PortalSJ";

import profile from "../../assets/profile.png";
import moreOptions from "../../assets/moreOptions.png";
import statusChange from "../../assets/statusChange.png";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function BookingRowSolo({ booking, salonOwner }) {
  const [status, setStatus] = useState(booking ? booking.statusCode : 0);
  const [displayStatus, setDisplayStatus] = useState(status);
  const [actionMenuShow, setActionMenuShow] = useState(false);
  const [bookedUser, setBookedUser] = useState(null);
  const [bookedSalon, setBookedSalon] = useState(null);

  const [extra, setExtra] = useState(false);
  const navigate = useNavigate();
  const { user: userContext } = useAuthContext();

  const { getUserType } = useUserType();
  const { changeStatus } = useBookingStatus();
  const { getSalon } = useSalonForBooking();

  const [statusChangePopup, setStatusChangePopup] = useState(false);

  useEffect(() => {
    console.log(booking);
    if (booking) {
      if (booking.order_id) {
        console.log("Extra Exists");
        setExtra(true);
      }
    }
    if (booking && bookedUser === null) {
      const fetchUser = async () => {
        let userFromDB = await getUserType(booking.bookedBy);
        if (userFromDB) {
          setBookedUser(userFromDB);
        }
      };
      fetchUser();
    }
    if (booking && bookedSalon === null) {
      let fetchSalon = async () => {
        let salonFromDB = await getSalon(booking.salonId);
        if (salonFromDB) {
          // console.log(salonFromDB)
          setBookedSalon(salonFromDB);
        }
      };
      fetchSalon();
    }
  }, [bookedSalon, bookedUser, booking, getSalon, getUserType]);

  const [refernceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(refernceElement, popperElement, {
    placement: "top",
  });

  const [refMore, setRefMore] = useState(null);
  const [popperMore, setPopperMore] = useState(null);

  const { styles: stylesMore, attributes: attributesMore } = usePopper(
    refMore,
    popperMore,
    {
      placement: "top",
    }
  );

  useEffect(() => {
    // console.log(status);
  }, [status]);

  const handleStatusChange = async () => {
    await changeStatus(status, booking.docId);
    setDisplayStatus(status);
    setStatusChangePopup(false);
  };
  console.log(booking.order_id);
  var id = booking.order_id;
  console.log(id);
  const bookingInfo = (id) => {
    console.log(id);
    navigate(`/bookinginfo/${id}`);
  };
  const StatusButton = () => {
    switch (displayStatus) {
      case -1:
        return <button className="btn-cancelled">Cancelled</button>;
      case 0:
        return <button className="btn-pending">Pending</button>;
      case 1:
        return <button className="btn-done">Done</button>;
      default:
        return <button>Status</button>;
    }
  };
  const StatusChangeMenu = () => {
    return (
      <>
        <div className="status-change-menu-inner">
          <div className="status-menu-top">
            <p className="status-head">Set Booking Status</p>
          </div>
          <div className="status-checkbox-wrapper">
            {/* <FaUserTimes
                            onClick={() => setStatus(-1)}
                            className={`fa-cancel-icon fa-icon ${
                                status === -1 ? "active-status" : null
                            }`}
                        /> */}

            <FaUserClock
              onClick={() => setStatus(0)}
              className={`fa-pending-icon fa-icon ${
                status === 0 ? "active-status" : null
              }`}
            />
            <FaUserCheck
              onClick={() => setStatus(1)}
              className={`fa-check-icon fa-icon ${
                status === 1 ? "active-status" : null
              }`}
            />
          </div>

          <div
            onClick={handleStatusChange}
            className="status-change-menu-bottom"
          >
            <FaCheck className="fa-check-bottom" />
          </div>
        </div>
      </>
    );
  };

  const MoreOptionsMenu = () => {
    return (
      <>
        <div className="more-options-menu-inner">
          <div className="options-menu-body">
            <ul className="options-ul">
              {extra && (
                <li className="option-solo">
                  <NavLink to={`/bookingDetails/${booking.bookingId}`}>
                    Booking Recipt
                  </NavLink>
                  <li
                    onClick={() => {
                      var id = booking.order_id;
                      console.log(booking);
                      navigate(`/bookinginfo/${id}`);
                    }}
                  >
                    More Info
                  </li>
                </li>
              )}
              {userContext &&
                !salonOwner &&
                bookedUser &&
                userContext.uid === bookedUser.uid && (
                  <>
                    <li>Cancel Booking</li>
                  </>
                )}
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="booking-solo-row">
        <div className="customer">
          {salonOwner ? (
            <>
              {bookedUser && (
                <>
                  <div className="w-[40px] h-[40px] mr-2 md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={
                        bookedUser.profileImage
                          ? bookedUser.profileImage.url
                          : profile
                      }
                      alt=""
                    />
                  </div>
                  <div className="customer-info">
                    <p className="customer-name">{bookedUser.name}</p>
                    {extra ? (
                      <>
                        <p className="customer-number">+91 EXTRA00069</p>
                      </>
                    ) : (
                      <>
                        <p className="customer-number">+91 7000019112</p>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {bookedSalon && (
                <>
                  <div className="customer-image-wrapper">
                    {/* <img
                                    src={
                                        bookedUser.profileImage
                                            ? bookedUser.profileImage.url
                                            : profile
                                    }
                                    alt=""
                                /> */}
                  </div>
                  <div className="customer-info">
                    <p className="customer-name">{bookedSalon.name}</p>
                    {extra ? (
                      <>
                        <p className="customer-number">+91 EXTRA00069</p>
                      </>
                    ) : (
                      <>
                        <p className="customer-number">+91 7000019112</p>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="booking-status">
          <StatusButton />
          {salonOwner && (
            <>
              {displayStatus === 1 || displayStatus === -1 ? (
                <></>
              ) : (
                <>
                  <div
                    onClick={() => setStatusChangePopup(true)}
                    ref={setReferenceElement}
                    className="change-status-icon-wrapper"
                  >
                    <img src={statusChange} alt="" />
                  </div>
                  {statusChangePopup && (
                    <>
                      <PortalSJ>
                        <div
                          className="status-change-menu"
                          ref={setPopperElement}
                          style={styles.popper}
                          {...attributes.popper}
                        >
                          <StatusChangeMenu />
                        </div>
                      </PortalSJ>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div className="booking-date">
          <p className="booking-time-inner">
            {booking && `${booking.slot.timeHrs} : ${booking.slot.timeMins}`}
          </p>
          <p className="booking-date-inner">
            {booking &&
              `${booking.slot.day}/${booking.slot.month}/${booking.slot.year}`}
          </p>
        </div>
        <div className="mt-2 mx-10">
          <p className="booking-time-inner">
            {" "}
            {booking.bookingData[0].service.name}
          </p>
          <p className="booking-time-inner">
            {booking.bookingData[0].specialist.name}
          </p>
        </div>
        <div className="booking-action">
          <div
            className="more-icon-wrapper"
            ref={setRefMore}
            onClick={() => setActionMenuShow(true)}
          >
            <img src={moreOptions} alt="" />
          </div>
          {actionMenuShow && (
            <>
              <PortalSJ>
                <div
                  className="options-menu"
                  ref={setPopperMore}
                  style={stylesMore.popper}
                  {...attributesMore.popper}
                  onClick={() => setActionMenuShow(false)}
                >
                  <MoreOptionsMenu />
                </div>
              </PortalSJ>
            </>
          )}
        </div>
      </div>
    </>
  );
}
