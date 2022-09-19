import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import BookingRecipt from '../../components/bookingRecipt/BookingRecipt';
import Loading from '../../components/loading/Loading';

import { useBookingSolo } from "../../hooks/useBookingSolo";

export default function BookingDetails() {

	const {bookingId} = useParams()
	const { getBooking } = useBookingSolo();
    
	const [bookingFromDB, setBookingFromDB] = useState(null)

	useEffect(() => {
		console.log(bookingId)
		if (bookingFromDB === null) {
            const fetchBooking = async () => {
                const resBooking = await getBooking(bookingId);
                setBookingFromDB(resBooking);
            };
			fetchBooking()
        }
	}, [bookingFromDB, bookingId, getBooking, setBookingFromDB])
	

  return <>
	  {bookingFromDB ? <>
		<BookingRecipt booking={bookingFromDB}/>
	  </> : <>
		  <Loading/>
	  </> }
  </>
}
