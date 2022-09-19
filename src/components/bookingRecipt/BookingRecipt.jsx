import React from 'react'

import { BsCheckCircleFill, BsCalendar2CheckFill } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { MdStore } from "react-icons/md";

import loading from "../../assets/loading.jpg";
import pfp from "../../assets/namiSquare.jpg";
import b3 from "../../assets/b3.jpg";

export default function BookingRecipt({booking}) {
  return <>
	  <div className="flex absolute z-100 items-start justify-center w-screen h-screen md:items-center loading-page bg-site-100">
                <div className=" mt-6 md:-mt-20 min-w-[300px] max-w-[320px] min-h-[400px] max-h-auto text-center bg-white rounded-md shadow-lg sm:w-[60%] sm:max-w-[960px] loading-card">
                    <div className="recipt-top font-outfit bg-site-500 rounded-t-md flex justify-between p-4 text-white">
                        <div className="reciptHead text-left">
                            <p className="headig font-outfit text-3xl md:text-6xl font-medium">
                                Recipt
                            </p>
                            <p className="bookedAt font-outfit text-lg md:text-2xl font-normal">{`${
                                booking.dateBooked.date
                            }/${booking.dateBooked.month + 1}/${
                                booking.dateBooked.year
                            }`}</p>
                        </div>
                        <div className="orderDetails text-right">
                            <p className="slotPrice font-outfit mt-1 text-2xl md:text-5xl font-light">
                                ₹ {booking.price}
                            </p>
                            <div className="orderID font-outfit md:flex md:flex-row-reverse md:items-center">
                                <p className="text-lg md:text-3xl font-outfit">
                                    {booking.order_id}
                                </p>
                                <p className="text-sm md:text-xl md:mr-4 font-outfit opacity-50">
                                    Order ID
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="recipt-content">
                        <div className="userAndSlot px-2 md:px-5 mt-3 flex justify-between">
                            <div className="bookedByUser flex md:items-center">
                                <div className="userImgWrapper md:w-[90px] md:h-[90px] w-[50px] h-[50px] overflow-hidden rounded-full border-white hover:border-blue-base border-2 md:border-4">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={
                                            booking.user &&
                                            booking.user.profileImage
                                                ? booking.user.profileImage.url
                                                : pfp
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="userInfo md:ml-2 text-left">
                                    <p className="userName font-outfit text-lg md:text-3xl">
                                        {booking.user && booking.user.name}
                                    </p>
                                    <p className="userNumber font-outfit text-md md:text-xl opacity-70 -mt-1">
                                        {booking.user &&
                                        booking.user.phoneNumber
                                            ? booking.user.phoneNumber
                                            : "+91 0000000000"}
                                    </p>
                                </div>
                            </div>
                            <div className="slotDetails md:flex md:justify-center md:flex-col text-right">
                                <p className="slotDate font-outfit text-lg md:text-3xl">
                                    {`${booking.slot.day}/${
                                        booking.slot.month
                                    }/${booking.slot.year}`}
                                </p>
                                <p className="slotTime font-outfit text-md md:text-xl opacity-70 -mt-1">
                                    {booking.slot && `${booking.slot.timeHrs}:${booking.slot.timeMins}`}
                                </p>
                            </div>
                        </div>
                        <div className="salonRecipt flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-5 mt-3">
                            <p className="salonName flex items-center font-outfit text-xl md:text-2xl mx-auto md:mx-0">
                                <MdStore className="text-5xl md:text-7xl" /> {booking.salon.name}
                            </p>
                            <div className="paymentStatusDiv flex justify-between px-5 md:px-0">
                                <p className="paymentStatus font-outfit text-lg md:text-2xl md:mr-2 opacity-70">
                                    Payment :{" "}
                                </p>
                                <p className={`recievedOrNot font-outfit text-xl md:text-2xl ${booking.status === "Success" ? "text-green-500" : "text-red-500"} font-semibold`}>
                                    {booking.paymentStatus}
                                </p>
                            </div>
                        </div>
						{booking.bookingData && booking.bookingData.map((booking) => <>
							<div key={booking.service.serviceId} className="sericeCardRecipt px-2 mt-3 w-full flex items-center">
                            <div className="serviceImgWrapper w-[20%] md:h-[80px] h-[40px] rounded-md overflow-hidden">
                                <img
                                    className="w-full object-cover object-center h-full"
                                    src={booking.service.image && booking.service.image.url}
                                    alt=""
                                />
                            </div>
                            <div className="serviceContent p-2 w-[80%] flex justify-between">
                                <div className="serviceInfo">
                                    <p className="serviceNam font-outfit text-lg md:text-2xl ml-2">
                                        {booking.service.name}
                                    </p>
                                </div>
                                <div className="servicePrice">
                                    <p className="price-recipt text-site-500 font-outfit text-xl md:text-3xl">
										₹ {booking.service.price.discounted}
                                    </p>
                                </div>
                            </div>
                        </div>
						</>)}
                        
                        <div className="allTotal relative px-2 md:px-5 pt-1 mt-3 flex justify-end md:justify-between items-center">
                            <div className="totalHr absolute -top-1 md:-top-2 opacity-10 left-50% translate-x-[-10%] md:translate-x-20 w-[80%] h-[2px] bg-black rounded"></div>
                            <p className="totalText font-outfit text-xl md:ml- md:text-3xl mr-10">
                                Total
                            </p>
                            <p className="totalAmount font-outfit text-site-500 pr-2 text-xl md:text-3xl">
								₹ {booking.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
  </>
}
