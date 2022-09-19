import React from "react";
import "./login.scss";
import { useState } from "react";
import { auth } from "../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";
import { useNavigate } from "react-router";

const Login = (props) => {
    const {
        signup,
        error: signupError,
        isPending: signupIsPending,
    } = useSignup();
    const { login, error: loginError, isPending: loginIsPending } = useLogin();
    let navigate = useNavigate();

    const tog = () => {
        // console.log("jaadu");
        const l = document.getElementById("toggle1");
        l.style.display = "none";
        const r = document.getElementById("toggle2");
        r.style.display = "block";
    };

    const tog1 = () => {
        // console.log("jaadu");
        const l = document.getElementById("toggle1");
        l.style.display = "block";
        const r = document.getElementById("toggle2");
        r.style.display = "none";
    };

    // //generate recaptcha method

    // const generateRecaptcha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //         "recaptcha-container",
    //         {
    //             size: "invisible",
    //             callback: (response) => {},
    //         },
    //         auth
    //     );
    // };

    // // Sent OTP
    // const signin = () => {
    //     if (myNumber === "" || myNumber.length < 10) return;

    //     generateRecaptcha();
    //     let verify = window.recaptchaVerifier;
    //     signInWithPhoneNumber(auth, `+91${myNumber}`, verify)
    //         .then((result) => {
    //             setFinal(result);
    //             alert("code sent");
    //             setShow(true);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //             window.location.reload();
    //         });
    // };

    // // Validate OTP
    // const validateOtp = () => {
    //     if (otp === null || final === null) return;
    //     final
    //         .confirm(otp)
    //         .then((result) => {
    //             console.log(result.user.uid);
    //         })
    //         .catch((err) => {
    //             alert("Wrong code");
    //         });
    // };

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const checkAndLeave = (error) => {
        if (error) {
            console.log(error.message);
        } else{
			setTimeout(() => props.fun(false), 1000)
            navigate("/");
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        signup(userEmail, userPassword, userName, userPhoneNumber);
        if (!signupIsPending) {
            checkAndLeave(signupError);
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(userEmail, userPassword);
        if (!loginIsPending) {
            checkAndLeave(loginError);
        }
    };

    return (
        <>
            {props.value ? (
                <div className="loginBox">
                    <button
                        className="btn btn-dark btn-cross"
                        onClick={() => props.fun(false)}
                    >
                        X
                    </button>

                    <div id="toggle1">
                        <p className="login-title">Login</p>
                        <div className="login-hr" />
                        <>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group login-sj">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={userEmail}
                                        onChange={(e) =>
                                            setUserEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group login-sj">
                                    <label htmlFor="exampleInputPassword1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        value={userPassword}
                                        onChange={(e) =>
                                            setUserPassword(e.target.value)
                                        }
                                    />
                                </div>
                                {loginIsPending ? (
                                    <>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled
                                        >
                                            Login
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Login
                                        </button>
                                    </>
                                )}
                            </form>
                        </>

                        <div className="account">
                            Don't Have Account?{" "}
                            <button onClick={tog}>Register Now</button>
                        </div>
                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div id="toggle2">
                        <p className="login-title register-title">
                            Register Now
                        </p>
                        <div className="login-hr" />
                        <>
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="form-group login-sj">
                                    <label htmlFor="exampleInputName1">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={userName}
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group login-sj">
                                    <label htmlFor="exampleInputEmail2">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail2"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={userEmail}
                                        onChange={(e) =>
                                            setUserEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group login-sj">
                                    <label htmlFor="exampleInputPassword1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword2"
                                        placeholder="Password"
                                        value={userPassword}
                                        onChange={(e) =>
                                            setUserPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </form>
                        </>

                        <div className="account">
                            Already have an Account?{" "}
                            <button onClick={tog1}>Login Now</button>
                        </div>
                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                </div>
            ) : null}
        </>
    );
};

export default Login;
