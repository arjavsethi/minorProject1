import React, { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import "./Auth.scss";
import { useNavigate, useLocation } from "react-router";
const SignUpWithNumber = () => {
  //query :-
  const location = useLocation();
  const queryString = location.search;
  const queryParams = new URLSearchParams(queryString);
  const userType =
    queryParams.get("user-type") === "buisness" ? "salonOwner" : "customer";
  const [phone, setphone] = useState();
  const [otp, setotp] = useState();

  const [error, setError] = useState(null);

  const [otpSent, setOtpSent] = useState(false);
  const [otpPending, setOtpPending] = useState(false);

  const navigate = useNavigate();
  const handleRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };
  const handleSubmitNumber = (e) => {
    e.preventDefault();
    setOtpPending(true);

    if (phone >= 10) {
      console.log(phone);
      handleRecaptcha();
      const phoneNumber = "+91" + phone;
      const appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          // ...
          setOtpSent(true);
          setOtpPending(false);
          console.log("otp sent");
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          setOtpPending(false);
          setError(error.message);
          console.log(error + "SMS not sent");
        });
    }
  };
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    const x = window.confirmationResult;

    x.confirm(code)
      .then((result) => {
        // User signed in successfully.
        const { isNewUser } = getAdditionalUserInfo(result);
        console.log(result);
        if (isNewUser) {
          // New user - sign up
          navigate("/saveUserDetails", {
            state: {
              userType: userType,
              phoneNumber: `+91${phone}`,
            },
          });
          console.log("Create New user");
        } else {
          // Existing user - log in
          const user = result.user;
          // alert(user);
          navigate("/");
        }
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert("Please Enter Correct OTP");
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "phone":
        setphone(value);
        break;
      case "otp":
        setotp(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <div id="login-form">
          <p className="login-title">Login/Register</p>
          <div className="login-hr" />

          <>
            <form onSubmit={handleSubmitNumber}>
              <div id="sign-in-button"></div>
              <div className="form-group login-sj">
                <label htmlFor="exampleInputEmail1">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Phone Number"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn-auth-sj btn btn-primary cursor-pointer"
              >
                Get OTP
              </button>
            </form>
            {otpPending && (
              <p className="error-text text-neutral-900 opacity-[0.5] text-lg font-semibold mt-2">
                Please wait while we send your OTP.....
              </p>
            )}
            {error && (
              <p className="error-text text-red-400 text-lg font-semibold mt-2">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmitOtp}>
              <div className="form-group login-sj">
                <label htmlFor="exampleInputPassword1">OTP</label>
                <input
                  type="number"
                  className="form-control"
                  name="otp"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {otpSent ? (
                  <>
                    <button
                      type="submit"
                      className="btn-auth-sj mt-3 mb-[5%] btn btn-primary cursor-pointer"
                    >
                      Submit OTP
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled
                      className="cursor-disabled mt-3 btn-auth-sj mb-[5%] btn btn-primary cursor-pointer"
                    >
                      Submit OTP
                    </button>
                  </>
                )}
              </div>
            </form>
          </>
        </div>
      </div>
    </>
  );
};

export default SignUpWithNumber;
