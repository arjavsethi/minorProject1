import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useLogout } from "../../hooks/useLogout";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/img1.png";
import {ErrorBoundary} from 'react-error-boundary'
import Loading from "../loading/Loading";


const SideBar = ({ children, userContext , logoutUser }) => {
    const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

    const routes = [
        {
            path: "/dashboard",
            name: "Home",
            icon: <FaHome className="fa-icon-sidebar" />,
        },
        {
            path: `/profile/${userContext.uid}`,
            name: "Profile",
            icon: <FaUser className="fa-icon-sidebar" />,
        },

        // {
        //     path: "/dashboard",
        //     name: "Dashboard",
        //     icon: <BiCog className="fa-icon-sidebar" />,
        // },
    ];
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: "auto",
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    const { logout, isPending: outIsPending, error: outError } = useLogout();
    let navigate = useNavigate();

    const handleLogout = async () => {
		logoutUser(true)
        console.log("Before Logout");
        await logout();
        console.log("After Logout");
		// debugger;
        return navigate("/");
    };

    const ErrorFallback = () => {
        return (
            <Loading errorText="There was an error, please wait while we process it." />
        );
    };

    return (
        <>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={() => console.log("Error")}
            >
                <div className="main-container">
                    <motion.div
                        animate={{
                            width: isOpen ? "200px" : "40px",
                            transition: {
                                duration: 0.5,
                                type: "spring",
                                damping: 20,
                            },
                        }}
                        className={`sidebar relative`}
                    >
                        <div className="top_section">
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="logo"
                                    >
                                        <div
                                            className={`brand-wrapper sidebar-logo`}
                                        >
                                            <img src={logo} alt="" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="bars">
                                <FaBars
                                    className="fa-icon-sidebar"
                                    onClick={toggle}
                                />
                            </div>
                        </div>
                        <section className="routes">
                            {routes.map((route, index) => {
                                return (
                                    <NavLink
                                        to={route.path}
                                        key={index}
                                        className="link"
                                        // activeClassName="active-sidebar-link"
                                    >
                                        <div className="icon">{route.icon}</div>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    variants={showAnimation}
                                                    initial="hidden"
                                                    animate="show"
                                                    exit="hidden"
                                                    className="link_text"
                                                >
                                                    {route.name}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </NavLink>
                                );
                            })}
                        </section>
                        <div className="absolute bottom-20 w-[40px] link">
                            <div className="icon" onClick={handleLogout}>
                                <FiLogOut className="fa-icon-sidebar" />
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="link_text"
                                    >
                                        Logout
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <main>{children}</main>
                </div>
            </ErrorBoundary>
        </>
    );
};

export default SideBar;
