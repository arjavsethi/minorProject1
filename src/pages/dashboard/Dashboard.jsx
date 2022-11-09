import React, { useCallback, useEffect, useRef, useState } from "react";
import Chart from "../../components/Chart/Chart";
import Footer from "../../components/footer/Footer";
import "./dashboard.scss";
import ServiceCardDashboard from "../../components/serviceCardDashboard/ServiceCardDashboard";
import SpecialistCardDashboard from "../../components/specialistCardDashboard/SpecialistCardDashboard";

import j1 from "../../assets/j1.png";
import j2 from "../../assets/j2.png";
import j3 from "../../assets/j3.png";

import { useUser } from "../../hooks/useUser";
import { useSalon } from "../../hooks/useSalon";
import { useSalonData } from "../../hooks/useSalonData";
import { useNavigate } from "react-router";
import { useTypeCheck } from "../../hooks/useTypeCheck";
import Loading from "../../components/loading/Loading";

const Dashboard = ({ userFromContext }) => {
    const { salon } = useSalon(userFromContext.uid);
    const {
        userType,
        userDB,
        isPending: userFetchIsPending,
        error: userFetchError,
    } = useTypeCheck();

    const [userFromDB, setUserFromDB] = useState(null);
    const [monthToDisplay, setMonthToDisplay] = useState("");
    const [show, setShow] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const navigate = useNavigate();

    // const _getUser = useCallback(() => getUserFromDB(), [getUserFromDB]);
    // const _navigate = useCallback(() => navigate(), [navigate]);

    // console.log(_getUser)
    // console.log(_navigate)

    // useEffect(() => {
    //   console.log(userType, userDB)
    // }, [userType, userDB])

    useEffect(() => {
        if (userFetchIsPending === false && userFetchError === null && userDB) {
            console.log(userType, userDB.uid);
            setUserFromDB(userDB);
			setIsFetched(true)
        }
    }, [userType, userDB, userFetchIsPending, userFetchError]);

    const [gallery, setgallery] = useState(false);
    const [specialist, setspecialist] = useState(false);
    const [categorys, setcategorys] = useState(false);

    const { monthlyEarnings, monthlyCustomers, monthlyBookings } = useSalonData(
        monthToDisplay ? monthToDisplay : "2022-05",
        salon ? salon : null
    );
    const getFullMonth = (monthToDisplay) => {
        const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const d = new Date(monthToDisplay);
        return month[d.getMonth()];
    };
    const getMonth = (monthToDisplay) => {
        var date = new Date(monthToDisplay);
        return date.getMonth() + 1;
    };
    const getYear = (monthToDisplay) => {
        var date = new Date(monthToDisplay);
        return date.getFullYear();
    };

    return (
        <>
		{isFetched ? <>
			<div className="dashboard-wrapper">
                <div className="dashboard-top-wrapper">
                    <div className="month-input-wrapper">
					<label>
						Month :
                        <input
                            type="month"
                            value={monthToDisplay}
                            onChange={(e) => {
                                setShow(true);
                                return setMonthToDisplay(e.target.value);
                            }}
                        />
						</label>
                    </div>

                    {show && (
                        <div className="table-responsive chartBox">
                            {salon && (
                                <Chart
                                    salon={salon}
                                    monthToDisplay={getMonth(monthToDisplay)}
                                    yearToDisplay={getYear(monthToDisplay)}
                                />
                            )}
                        </div>
                    )}

                    <div className="conatiner journey">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 boxCon">
                                <div className="box">
                                    <img src={j1} alt="" />
                                    <p>{monthlyEarnings}</p>
                                    <section className="mt-2">
                                        {" "}
                                        {getFullMonth(monthToDisplay)} Earnings
                                    </section>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 boxCon">
                                <div className="box">
                                    <img src={j2} alt="" />
                                    <p>{monthlyCustomers}</p>
                                    <section className="mt-2">Total Customer</section>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 boxCon">
                                <div className="box">
                                    <img src={j3} alt="" />
                                    <p>{monthlyBookings}</p>
                                    <section className="mt-2">Room Booked</section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="dash-seperate-hr">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<div className="dashboard-mid-wrapper">
						<div onClick={() => navigate("/addPaymentDetails")} className="cursor-pointer button-dash-wrapper">
							<button>Add/Edit Payment Details</button>
						</div>
						<div onClick={() => navigate("/addBuisnessDetails")} className="cursor-pointer button-dash-wrapper">
							<button>Add/Edit Buisness Details</button>
						</div>
						<div onClick={() => navigate("/addSalonTimings")} className="cursor-pointer button-dash-wrapper">
							<button>Add/Edit Home Stay Timings</button>
						</div>
				</div>
				<div className="dash-seperate-hr">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
                <div className="dashboard-bottom-wrapper">
                    <div className="subdash-top-wrapper">
                        <div className="subdash-heading">
                            <p className="subheading dash-heading">Rooms</p>
                            <div className="login-hr small-one-hr dash-heading" />
                        </div>
						<div onClick={() => navigate("/addSalonServices")} className="cursor-pointer button-dash-wrapper">
							<button>Add/Edit Rooms</button>
						</div>
                    </div>

                    <div className="servicesCatalogue grid grid-cols-1 px-2 mt-3 md:grid-cols-3 gap-4 md:gap-4">
                        {salon && salon.services &&
                            salon.services.map((service, index) => (
                                <>
                                    <ServiceCardDashboard
                                        service={service}
                                        key={service.serviceId}
                                        // bottom={true}
                                        // addServiceById={addServiceById}
                                        // deleteServiceById={deleteServiceById}
                                    />
                                </>
                            ))}
                    </div>
                </div>
				
				<div className="dash-seperate-hr">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<div className="dashboard-bottom-wrapper">
                    <div className="subdash-top-wrapper">
                        <div className="subdash-heading">
                            <p className="subheading dash-heading">Services</p>
                            <div className="login-hr small-one-hr dash-heading" />
                        </div>
						<div onClick={() => navigate("/addSalonSpecialists")} className="cursor-pointer text-white bg-site-500 font-fira text-md px-2 rounded w-5/12 md:text-lg md:w-auto">
							<button className=" md:px-[7px] md:py-[10px]">Add/Edit Services</button>
						</div>
                    </div>

                    <div className="servicesCatalogue grid grid-cols-1 px-2 mt-3 md:grid-cols-3 gap-4 md:gap-4">
                        {salon && salon.specialists && 
                            salon.specialists.map((specialist, index) => (
                                <>
                                    <SpecialistCardDashboard
                                        specialist={specialist}
                                        key={specialist.specialistId}
                                        // bottom={true}
                                        // addServiceById={addServiceById}
                                        // deleteServiceById={deleteServiceById}
                                    />
                                </>
                            ))}
                    </div>
                </div>
            </div>
		</> : <><Loading/></>}
            
        </>
    );
};

export default Dashboard;
