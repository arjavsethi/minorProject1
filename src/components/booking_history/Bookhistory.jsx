import React from "react";
import "./bookhistory.scss";

import SearchIcon from "@material-ui/icons/Search";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useSalon } from "../../hooks/useSalon";
import { useCollection } from "../../hooks/useCollection";
import TableData from "./TableData";

const Bookhistory = ({type}) => {
    const { user } = useAuthContext();

    const { salon } = useSalon(user.uid);

	var queryArr;
	if(type === "SalonOwner"){
		queryArr = salon ? ["salonId", "==", `${salon.id}`] : null
	} else{
		queryArr = user ? ["bookedBy", "==", `${user.uid}`] : null
	}
    const { documents: bookings } = useCollection(
        "bookings", queryArr
    );
    return (
        <>
            <div className="conatiner bookdate">
                {/* <div className="row">
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <div className="box1">
                            <p>Booking History</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <div className="box2">
                            <div>
                                <select name="" id="">
                                    <option value="">DD</option>
                                </select>
                                <select name="" id="">
                                    <option value="">MM</option>
                                </select>
                                <select name="" id="">
                                    <option value="">YY</option>
                                </select>
                            </div>
                            <select name="" id="status">
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 boxCon">
                        <div className="box3">
                            <form className="form-inline">
                                <input
                                    id="sea"
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="table-responsive">
                <table className="fulldata">
                    <thead>
                        <th>{type === "SalonOwner" ? "Customer Name" : "Salon Name"}</th>
                        <th>Booking ID</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings.map((value, index) => (
                                <TableData type={type} key={index} value={value} />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Bookhistory;
