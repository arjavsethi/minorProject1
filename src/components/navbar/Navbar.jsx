import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./navbar.scss";

import PersonIcon from "@material-ui/icons/Person";
import {FaShoppingCart} from "react-icons/fa"
import Sidebar from "../sidebar/Sidebar"

import logo from "../../assets/img1.png";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import { Dropdown } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useUser } from "../../hooks/useUser";
import { useTypeCheck } from "../../hooks/useTypeCheck";
import { useUserType } from "../../hooks/useUserType";
import Loading from "../loading/Loading";

const Navbar = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [userFromDB, setUserFromDB] = useState(null);
	const [loggedOut, setLoggedOut] = useState(false)

    const { user: userContext } = useAuthContext();
    const { logout } = useLogout();
    const [show, setShow] = useState(false);
    const { user, children } = props;

    const { getUserType } = useUserType();
    const [isSalonOwner, setIsSalonOwner] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 500 });
    console.log(isMobile);

    useEffect(() => {
        // console.log(isSalonOwner, userContext, userFromDB)
        if (userContext && !userFromDB) {
            const fetchUser = async () => {
                let userFromDB = await getUserType(userContext.uid);
                if (userFromDB) {
                    setUserFromDB(userFromDB);
                    console.log(userFromDB);
                    if (userFromDB.type === "salonOwner") {
                        setIsSalonOwner(true);
						return navigate("dashboard")
                    }
                }
            };
            fetchUser();
        }
    }, [getUserType, isSalonOwner, navigate, userContext, userFromDB]);

    const queryString = location.search;
    const queryParams = new URLSearchParams(queryString);
    const clickType = queryParams.get("click-type");

	const logoutUser = (value) => {
		setLoggedOut(value)
	}

	// const handleLogout = async () => {
    //     await logout();
    //     return navigate("/");
    // };

	console.log(userContext)

    return (
        <>
		{loggedOut ? <Loading logoutUser={logoutUser} refreshPage={true}/> : <>
			{isSalonOwner ? userContext && 
                <>
					<Sidebar logoutUser={logoutUser} userContext={userContext}>{children}</Sidebar>
				</>
             : (
                <>
                    <nav className={`${isMobile ? "nav-papa-mobile" : null}`}>
                        <div onClick={() => navigate("/")} className="brand cursor-pointer">
                            <div
                                className={`brand-wrapper ${
                                    isMobile ? "brand-mobile" : null
                                }`}
                            >
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div
                            className={`navigation ${
                                isMobile ? "nav-mobile" : null
                            } ${isSalonOwner ? "salonOwnerBar" : null}`}
                        >
                            {!isSalonOwner && (
                                <>
                                    {isMobile ? (
                                        <>
                                            <div className="link-wrapper customer cursor-pointer">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            location.pathname ===
                                                            "/"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Home
                                                    </p>
                                                </NavLink>
                                            </div>
                                            <div className="link-wrapper customer cursor-pointer">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/salonsNearby"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            location.pathname ===
                                                            "/salonsNearby"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Salons Nearby
                                                    </p>
                                                </NavLink>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="link-wrapper customer cursor-pointer">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            location.pathname ===
                                                            "/"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Home
                                                    </p>
                                                </NavLink>

                                                <div
                                                    className={`hr ${
                                                        location.pathname ===
                                                        "/"
                                                            ? "active"
                                                            : null
                                                    }`}
                                                ></div>
                                            </div>
                                            <div className="link-wrapper customer cursor-pointer">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/salonsNearby"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            location.pathname ===
                                                            "/salonsNearby"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Home Stay Nearby
                                                    </p>
                                                </NavLink>

                                                <div
                                                    className={`hr ${
                                                        location.pathname ===
                                                        "/salonsNearby"
                                                            ? "active"
                                                            : null
                                                    }`}
                                                ></div>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        {!userContext ? (
                            <>
                                {isMobile ? (
                                    <>
                                        <div className="no-user isMobile">
                                            {/* <div className="link-wrapper ">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/user-flow?click-type=signup"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            clickType ===
                                                            "signup"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Signup
                                                    </p>
                                                </NavLink>

                                                <div
                                                    className={`hr ${
                                                        clickType === "signup"
                                                            ? "active"
                                                            : null
                                                    }`}
                                                ></div>
                                            </div>
                                            <hr className="signup" /> */}
                                            <div className="link-wrapper cursor-pointer">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/user-flow?click-type=login"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            clickType ===
                                                            "login"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Login
                                                    </p>
                                                </NavLink>

                                                <div
                                                    className={`hr ${
                                                        clickType === "login"
                                                            ? "active"
                                                            : null
                                                    }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="no-user">
                                            {/* <div className="link-wrapper">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/user-flow?click-type=signup"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            clickType ===
                                                            "signup"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Signup
                                                    </p>
                                                </NavLink>

                                                <div
                                                    className={`hr ${
                                                        clickType === "signup"
                                                            ? "active"
                                                            : null
                                                    }`}
                                                ></div>
                                            </div> */}
                                            {/* <hr className="signup" /> */}
                                            <div className="link-wrapper cursor-pointer">
                                                <NavLink
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                        // margin: "0px 10px 0px 10px",
                                                    }}
                                                    to="/user-flow?click-type=login"
                                                >
                                                    <p
                                                        className={`nav-link-text ${
                                                            clickType ===
                                                            "login"
                                                                ? "active"
                                                                : null
                                                        }`}
                                                    >
                                                        Login
                                                    </p>
                                                </NavLink>

                                                <div
                                                    className={`hr ${
                                                        clickType === "login"
                                                            ? "active"
                                                            : null
                                                    }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="profile cursor-pointer">
                                    <NavLink
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            // margin: "0px 10px 0px 10px",
                                        }}
                                        to={`/profile/${userContext.uid}`}
                                    >
                                        {userContext.photoURL ? (
                                            <>
                                                <div className=" w-[35px] h-[35px] md:w-[55px] md:h-[55px] profile-wrapper shadow-sm rounded-full overflow-hidden">
                                                    <img
														className="object-cover w-full h-full"
                                                        src={
                                                            userContext.photoURL
                                                        }
                                                        alt="Profile"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="profile-wrapper">
                                                    <img
                                                        src={profile}
                                                        alt="Profile"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </NavLink>

                                    <hr className="signup md:ml-2" />
									<NavLink to="/cartCheckout">
										<div className="cartIconWrapper mx-2 md:mx-4">
											<FaShoppingCart className="drop-shadow-sm text-2xl md:text-4xl hover:text-site-500"/>
										</div>
									</NavLink>
									
                                </div>
                            </>
                        )}
                    </nav>
					<>{children}</>
                </>
            )}
		</>}
            
        </>
    );
};

export default Navbar;
