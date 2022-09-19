import React from 'react'
import { useFirestore } from './useFirestore'

export const useBookingStatus = () => {

	const {updateDocument} = useFirestore("bookings")

	const changeStatus = async (status, bookingId) => {
		let documentUpdated = await updateDocument({statusCode:status}, bookingId)
		console.log(documentUpdated)
	}

  return {changeStatus}
}
