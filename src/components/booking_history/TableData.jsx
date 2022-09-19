import React from "react";
import { useSalonForCustomer } from "../../hooks/useSalonForCustomer";
import { useUser } from "../../hooks/useUser";

export default function TableData({value, type}) {
	const {user} = useUser(value.bookedBy)

	const {salon} = useSalonForCustomer(value.salonId)

    return (
        <>
            <tr>
                {type === "SalonOwner"
                    ? user && <td>{user.name}</td>
                    : salon && <td>{salon.name}</td>}
                <td>{value.id}</td>
                <td>
                    {value.slot.timeHrs}:{value.slot.timeMins}
                </td>
                <td>{value.price}</td>
                <td className={value.statusCode === -1 ? "cancelled" : "done"}>{value.statusCode}</td>
            </tr>
        </>
    );
}
