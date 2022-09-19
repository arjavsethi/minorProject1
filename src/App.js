import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Booking from "./pages/booking/Booking";
import Profile from "./pages/profile/Profile";
import { useAuthContext } from "./hooks/useAuthContext";
import BookSlot from "./pages/bookSlot/BookSlot";
import { useUser } from "./hooks/useUser";
import CartCheckout from "./pages/cartCheckout/CartCheckout";
import SalonHome from "./pages/salonhome/SalonHome";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";
import Cancellation from "./pages/cancellation/Cancellation";
import SalonsNearby from "./pages/salonsNearby/SalonsNearby";
import Auth from "./pages/auth/Auth";
import UserFlow from "./pages/userFlow/UserFlow";
import SignUpWithNumber from "./pages/auth/SignUpWithNumber";
import SaveUserDetails from "./pages/auth/SaveUserDetails";

import Loading from "./components/loading/Loading";
import LoadingHome from "./components/loading/LoadingHome";

import "./App.css";
import BookingInfo from "./components/bookingData/BookingInfo"
import AddBuisnessDetails from "./pages/addBuisnessDetails/AddBuisnessDetails";
import AddSalonServices from "./pages/addSalonServices/AddSalonServices";
import AddSalonSpecialists from "./pages/addSalonSpecialists/AddSalonSpecialists";
import AddSalonTimings from "./pages/addSalonTimings/AddSalonTimings";
import AddPaymentDetails from "./pages/addPaymentDetails/AddPaymentDetails";
import { CartContextProvider } from "./context/CartContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProtectedRoutes } from "./components/protectedRoutes/ProtectedRoutes";
import { useUserType } from "./hooks/useUserType";
import TermsDisplay from "./pages/termsDisplay/TermsDisplay";
import { ErrorBoundary } from "react-error-boundary";

import PaymentResponse from "./pages/paymentResponse/PaymentResponse";
import BookingDetails from "./pages/bookingDetails/BookingDetails";

function App() {
    const { user, authIsReady } = useAuthContext();
    // const {userType, userDB, isPending: userFetchIsPending, error:userFetchError} = useTypeCheck()
    const [isUpperRole, setIsUpperRole] = useState(false);
    const [login, setlogin] = useState(false);

    const { getUserType } = useUserType();
    const [userFromDB, setUserFromDB] = useState(null);
    const { user: userContext } = useAuthContext();

    useEffect(() => {
        const fetchUser = async () => {
            let _userFromDB = await getUserType(userContext.uid);
            if (_userFromDB) {
                console.log(_userFromDB.type);
                setUserFromDB(_userFromDB);
            }
        };
        if (authIsReady && userContext && userFromDB === null) {
            fetchUser();
        }
        console.log(userFromDB, userContext);
    }, [authIsReady, getUserType, userContext, userFromDB]);

    // useEffect(() => {
    // 	if(userFetchIsPending === false && userFetchError === null && userDB){
    // 		setUserFromDB(userDB)
    // 		if(userType === "salonOwner"){
    // 			setIsAllowed(true)
    // 		}
    // 	}

    // }, [userType,userDB,userFetchIsPending,userFetchError]);

    const ErrorFallback = () => {
        return (
            <Loading errorText="There was an error, please wait while we process it." />
        );
    };

    return (
        <>
            <CartContextProvider>
                <div className="app-wrapper">
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onError={() => console.log("Error")}
                    >
                        {authIsReady ? (
                            <>
								
                                <Navbar user={user} fun={setlogin}>
                                    <Login value={login} fun={setlogin} />
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <>
                                            <Route
                                                element={
                                                    <ProtectedRoutes
                                                        userContext={
                                                            userContext
                                                        }
                                                        type={
                                                            userFromDB
                                                                ? userFromDB.type
                                                                : null
                                                        }
                                                        upperRoleRequired={true}
                                                        redirectPath="/"
                                                    />
                                                }
                                            >
                                                {/* Upper Role Required routes */}

                                                <Route
                                                    path="/dashboard"
                                                    element={
                                                        <Dashboard
                                                            userFromContext={
                                                                user
                                                            }
                                                            userFromDB={
                                                                userFromDB
                                                            }
                                                        />
                                                    }
                                                />
                                            </Route>
                                        </>
                                        <>
                                            <Route
                                                element={
                                                    <ProtectedRoutes
                                                        userContext={
                                                            userContext
                                                        }
                                                        type={
                                                            userFromDB
                                                                ? userFromDB.type
                                                                : null
                                                        }
                                                        upperRoleRequired={
                                                            false
                                                        }
                                                        redirectPath="/"
                                                    />
                                                }
                                            >
                                                {/* No Upper Role Required just user present routes */}
                                                {user && (
                                                    <>
                                                        <Route
                                                            path="/salon/:salonId/booking"
                                                            element={
                                                                <Booking
                                                                    userId={
                                                                        user.uid
                                                                    }
                                                                />
                                                            }
                                                        />
                                                    </>
                                                )}

                                                {user && (
                                                    <>
                                                        <Route
                                                            path="/saveUserDetails"
                                                            element={
                                                                <SaveUserDetails />
                                                            }
                                                            upperRoleRequired={
                                                                false
                                                            }
                                                            redirectPath="/"
                                                        />
                                                    </>
                                                )}
                                                <Route
                                                    path={`/salon/:salonId/bookSlot`}
                                                    element={<BookSlot />}
                                                />
                                            </Route>
                                        </>
                                        <Route
                                            path="/payment_response"
                                            element={<PaymentResponse />}
                                        />
										<Route
                                            path="/bookingDetails/:bookingId"
                                            element={<BookingDetails/>}
                                        />
										<Route
                                            path="/bookinginfo/:id"
                                            element={<BookingInfo />}
                                        />

                                        <Route
                                            path="/addBuisnessDetails"
                                            element={<AddBuisnessDetails />}
                                        />
                                        <Route
                                            path="/addSalonServices"
                                            element={<AddSalonServices />}
                                        />
                                        <Route
                                            path="/addSalonSpecialists"
                                            element={<AddSalonSpecialists />}
                                        />
                                        <Route
                                            path="/addSalonTimings"
                                            element={<AddSalonTimings />}
                                        />
                                        <Route
                                            path="/addPaymentDetails"
                                            element={<AddPaymentDetails />}
                                        />

                                        <Route
                                            path="/user-flow"
                                            element={<UserFlow />}
                                        />

                                        <Route
                                            path="/salonsNearby"
                                            element={<SalonsNearby />}
                                        />
                                        <Route
                                            path={`/salon/:salonId`}
                                            element={<SalonHome />}
                                        />
                                        <Route
                                            path="/profile/:userId"
                                            element={<Profile />}
                                        />
                                        <Route
                                            path="/termsNew"
                                            element={<Terms />}
                                        />
                                        <Route
                                            path="/privacy-policy"
                                            element={<Privacy />}
                                        />
                                        <Route
                                            path="/cancellation-policy"
                                            element={<Cancellation />}
                                        />
                                        <Route
                                            path="/terms"
                                            element={<TermsDisplay />}
                                        />
                                        <Route
                                            path="/auth"
                                            element={<SignUpWithNumber />}
                                        />
										{/* <Route
                                            path="/auth"
                                            element={<Auth />}
                                        /> */}
										<Route
                                            path="/cartCheckout"
                                            element={<CartCheckout />}
                                        />
                                        <Route
                                            path="/loading"
                                            element={<Loading />}
                                        />
                                        <Route
                                            path="/loadingHome"
                                            element={<LoadingHome />}
                                        />

                                        {/* <Route path="/team" element={<Team />} /> */}
                                    </Routes>
                                </Navbar>
                            </>
                        ) : (
                            <>
                                <Loading first={true} />
                            </>
                        )}
                    </ErrorBoundary>
                </div>
            </CartContextProvider>
        </>
    );
}

export default App;
