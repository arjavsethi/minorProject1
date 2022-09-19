import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBookSlot } from "../../hooks/useBookSlot";

import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import arrowPrev from "../../assets/arrow-prev.png";
import arrowNext from "../../assets/arrow-next.png";
import logo from "../../assets/img1.png";
import hourglass from "../../assets/hourglass.png";
import tickCircle from "../../assets/tickCircle.png";

import Slider from "react-slick";
import "./BookSlot.scss";
import { ModalSJ } from "../../components/modalSJ/ModalSJ";
import LoadingBookSlot from "../../components/loading/LoadingBookSlot";
export default function BookSlot() {
  const location = useLocation();
  const navigate = useNavigate();

  const [datesArray, setDatesArray] = useState([]);
  // const [servicesArray, setServicesArray] = useState(
  //     location.state.services ? location.state.services : []
  // );
  // const [specialistsArray, setSpecialistsArray] = useState(
  //     location.state.specialists ? location.state.specialists : []
  // );

  const { salonId } = useParams();
  const { user } = useAuthContext();
  const { bookSlot, isPending, isSuccessfull } = useBookSlot();

  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  const [isSlotBookedOnce, setIsSlotBookedOnce] = useState(false);

  const [slot, setSlot] = useState(null);
  const [isSlotBooked, setIsSlotBooked] = useState(false);
  const [slotDate, setSlotDate] = useState("");
  const [slotMonth, setSlotMonth] = useState("");
  const [slotYear, setSlotYear] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [slotPrice, setSlotPrice] = useState("");
  const [slotPaymentID, setSlotPaymentID] = useState(null);
  const [slotCheck, setSlotCheck] = useState(false);
  const [slotLoading, setSlotLoading] = useState(false);
  const [slotModal, setSlotModal] = useState(true);

  const [bookingId, setBookingId] = useState(null);
  const [ccavCheck, setCCAVCheck] = useState(false);

  let currentRunningDate = new Date();
  const [currentDate, setCurrentDate] = useState({
    date: currentRunningDate.getDate(),
    month: currentRunningDate.getMonth(),
    year: currentRunningDate.getFullYear(),
  });

  const [modalShow, setModalShow] = useState(false);

  const ccavFormRef = useRef();

  useEffect(() => {
    if (!location.state.data) {
      return navigate(-1);
    } else {
      console.log(location.state.data);
      setBookingData(location.state.data);
      const totalAmount = location.state.data.reduce(function (acc, element) {
        acc = acc + parseInt(element.service.price.discounted);
        return acc;
      }, 0);

      console.log(totalAmount);
      setSlotPrice(totalAmount);
    }
  }, [location.state, navigate]);

  const getDateInfo = useCallback(
    (date, month, year) => {
      let dayLong = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let dayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let today = new Date(year, month, date);

      let isDisabled = false;
      if (
        date < currentDate.date &&
        month <= currentDate.month &&
        year <= currentDate.year
      ) {
        isDisabled = true;
      }

      let dayInfo = {
        date: {
          month: today.getMonth() + 1,
          date: today.getDate(),
          year: today.getFullYear(),
        },
        day: {
          full: dayLong[today.getDay()],
          short: dayShort[today.getDay()],
          index: today.getDay(),
        },
        isDisabled: isDisabled,
      };
      return dayInfo;
    },
    [currentDate.date, currentDate.month, currentDate.year]
  );

  const getDaysInMonth = useCallback(
    (month, year) => {
      var date = new Date(year, month, 1);
      var days = [];
      while (date.getMonth() === month) {
        days.push(
          getDateInfo(date.getDate(), date.getMonth(), date.getFullYear())
        );
        date.setDate(date.getDate() + 1);
      }
      console.log(days);
      setDatesArray(days);
    },
    [getDateInfo]
  );

  useEffect(() => {
    if (datesArray.length === 0) {
      // console.log("Here");
      let today = new Date();
      // console.log(today.getMonth());
      getDaysInMonth(today.getMonth(), today.getFullYear());
    }
    // let today = new Date("2022","05","1");
    // console.log(today.getMonth())

    // console.log(selectedDate);
  }, [datesArray, getDaysInMonth, selectedDate]);

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  const handleMonthSelect = (e) => {
    setSlotMonth(e.target.value);
    let changedMonth = parseInt(e.target.value.substr(5, 2)) - 1;
    let changedYear = e.target.value.substr(0, 4);
    let dateObject = new Date(changedYear, changedMonth);
    getDaysInMonth(dateObject.getMonth(), dateObject.getFullYear());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
    setModalShow(true);
    setSlotLoading(true);

    if (bookingData && slotDate && slotTime) {
      let date = new Date(slotDate);
      let slot = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        timeHrs: slotTime.substr(0, 2),
        timeMins: slotTime.substr(3, 2),
      };
      setSlot(slot);
      console.log("location.state.data", location.state.data);
      setSlotCheck(true);
      console.log("Booked");
      setIsSlotBooked(false);
      let bookingID = await bookSlot({
        slot,
        salonId,
        bookedBy: user.uid,
        price: slotPrice,
        statusCode: 0,
        paymentStatus: "Not Recieved",
        bookingData: bookingData,
        cartId: location.state.cartId,
      });
      setBookingId(bookingID);
      setIsSlotBooked(true);
      // alert("Slot is booked");
    } else {
      throw new Error("No Services/Time/Date");
    }
  };

  useEffect(() => {
    if (bookingId && !ccavCheck) {
      // (false)
      setSlotLoading(false);
      setCCAVCheck(true);
      ccavFormRef.current.submit();
      console.log("CCAV Submitted");
    }
  }, [bookingId, ccavCheck]);

  const afterSlideChange = (index) => {
    if (!datesArray[index].isDisabled) {
      setSelectedDate(datesArray[index]);

      setSlotDate(
        `${datesArray[index].date.year}-${datesArray[index].date.month}-${datesArray[index].date.date}`
      );
    } else {
      setSelectedDate(null);
    }
  };

  const isTab = useMediaQuery({ maxWidth: 800 });
  const isMobile = useMediaQuery({ maxWidth: 500 });
  var x = new Date().getDate();

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: isTab ? (isMobile ? 2 : 4) : 7,
    draggable: true,
    speed: 300,
    afterChange: afterSlideChange,
    focusOnSelect: true,
    initialSlide: x,
  };

  // const loadScript = (src) => {
  //     return new Promise((resolve) => {
  //         const script = document.createElement("script");
  //         script.src = src;

  //         script.onload = () => {
  //             console.log("script loaded");
  //             resolve(true);
  //         };
  //         script.onerror = () => {
  //             resolve(false);
  //         };

  //         document.body.appendChild(script);
  //     });
  // };

  // const displayRazorPay = async () => {
  //     const res = await loadScript(
  //         "https://checkout.razorpay.com/v1/checkout.js"
  //     );

  //     if (!res) {
  //         alert("Failed to load payment gateway. Are you online?");
  //         return;
  //     }

  //     const options = {
  //         // key: "rzp_live_DIoaw4Hqkb1bRR", live mode
  //         key: "rzp_test_fJ20l6ZR0FurJd",
  //         // key_secret: "E7ezbkvRxQdqfZmHVFKSh0EQ",
  //         key_secret: "bwnw0bu6oDFZkGZl8LAJtucT",
  //         currency: "INR",
  //         amount: slotPrice * 100,
  //         name: "SundaraTest",
  //         description: "Test Transaction",
  //         image: { logo },
  //         handler: async function (response) {
  //             if (response) {
  //                 setSlotPaymentID(response.razorpay_payment_id);
  //             }
  //         },
  //         prefill: {
  //             name: "Abhimanyu",
  //             email: "abhimanyu@gmail.com",
  //             mobile: "7000019111",
  //         },
  //         notes: {
  //             address: "RazorPay Office",
  //         },
  //         theme: {
  //             color: "#28acea",
  //         },
  //     };

  //     const paymentObject = new window.Razorpay(options);
  //     paymentObject.open();
  // };

  const ConfirmationModal = () => {
    return (
      <>
        <ModalSJ custom={true} isOpen={modalShow} closeOption={false}>
          <LoadingBookSlot />
        </ModalSJ>
      </>
    );
  };

  return (
    <>
      <ConfirmationModal />
      <div className="bookslot-page-wrapper">
        <div className="wrapper">
          <div className="top-wrapper">
            <h6 className="page-head">Schedule Your Appointment</h6>
            <div className="month-input-wrapper">
              <label>
                Month :
                <input
                  type="month"
                  value={slotMonth}
                  onChange={handleMonthSelect}
                />
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <>
              <div className="dates-slider-wrapper">
                <Slider {...settings}>
                  {datesArray &&
                    datesArray.map((date, index) => (
                      <>
                        <div
                          className={`date-solo-slide ${
                            date.isDisabled ? "disabled" : null
                          }`}
                        >
                          <div className="date-day-wrapper">
                            <h4 className="date-date">{date.date.date}</h4>
                            <p className="date-day">{date.day.full}</p>
                          </div>
                        </div>
                      </>
                    ))}
                </Slider>
              </div>
              <p className="warning">
                *The dates in red are not available for booking
              </p>
            </>
            <>
              <div className="schedule-mid-wrapper">
                <div className="total-amount-wrapper">
                  <h6 className="slot-price">
                    Total Amount To be Payed in Rupees :
                  </h6>
                  <p className="amount">
                    {/* ₹ {slotPrice} + {0.18 * slotPrice}{" "}
                    <span className="text-lg font-normal">(18%gst*)</span> = ₹ */}
                    {/* {slotPrice + slotPrice * 0.18} */}₹ {slotPrice}
                  </p>
                </div>
                <div className="form-group grp-sj time-input-bookslot">
                  <label htmlFor="exampleInputTime">Time : {` `}</label>
                  <input
                    type="time"
                    className="form-control inputSJ"
                    id="exampleInputDate"
                    aria-describedby="emailHelp"
                    placeholder="Enter Time"
                    value={slotTime}
                    onChange={(e) => setSlotTime(e.target.value)}
                  />
                </div>
              </div>
            </>

            <div className="select-specialists"></div>

            <div className="button-wrapper-book">
              {/* Submits the form below, which redirects to CCAvenue pages */}
              <button
                className="button-booking cursor-pointer"
                type="submit"
                // form="ccav-request-form"
              >
                Book Slot & {isMobile && <br />}Proceed to pay
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* TODO: Hide this form */}
      <form
        style={{ display: "none", visibility: "hidden" }}
        method="POST"
        ref={ccavFormRef}
        id="ccav-request-form"
        name="customerData"
        action={process.env.REACT_APP_CCAV_REQUEST_URL}
      >
        <table>
          <tr>
            <td>
              <input type="text" name="language" id="language" value="EN" />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="booking_data"
                id="language"
                value={JSON.stringify(location.state.data)}
              />
            </td>
            <td>
              <input
                type="text"
                name="salon_id"
                id="language"
                value={JSON.stringify({ salonId })}
              />
            </td>
            <td>
              <input
                type="text"
                name="cart_id"
                id="language"
                value={JSON.stringify(location.state.cartId)}
              />
            </td>
            <td>
              <input
                type="text"
                name="user_id"
                id="language"
                value={JSON.stringify(location.state.userId)}
              />
            </td>
            <td>
              <input
                type="text"
                name="booking_id"
                id="language"
                value={JSON.stringify(bookingId)}
              />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}
