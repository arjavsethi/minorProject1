//This Component is used to store the Name ,Phone Number Of new User  Which have Registered in SignUp With Number
import "./Auth.scss";
import React, { useState } from "react";
import { updateProfile, updateEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate, useLocation } from "react-router";
import usePhoneSignUp from "../../hooks/usePhoneSignUp";
import { update } from "lodash";

const SaveUserDetails = () => {
  //code to extract userType after navigating from SignUpWithNumber page
  const { state } = useLocation();
  const userType = state.userType;
  console.log(userType);

  // .......
  const {
    signUp,
    error: signupError,
    isPending: signupIsPending,
  } = usePhoneSignUp();

  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const navigate = useNavigate();

  const updateEmailUser = () => {
    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        // ...
        console.log("email Updated");
      })
      .catch((error) => {
        // An error occurred
        console.log("email Updated");

        // ...
        console.log(error);
      });
  };
  const updateUserProfile = () => {
    auth.currentUser.reload().then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          console.log("profile Updated" + name + " " + email);
        })
        .catch((error) => {
          console.log(error + "In update profile");
        });
      updateEmailUser();
    });
  };
//   const updateUserProfile = () => {
//     updateProfile(auth.currentUser, {
//       displayName: name,
//     })
//       .then(() => {
//         console.log("profile Updated" + name + " " + email);
//       })
//       .catch((error) => {
//         console.log(error + "In update profile");
//       });
//     updateEmailUser();
//   };
  const handleSubmit = () => {
    // updateEmailUser();
    updateUserProfile();
    signUp(name,state.phoneNumber, userType, email);
    let path =
      userType === "salonOwner" ? "/addBuisnessDetails" : "/salonsNearby";
    if (signupError) {
      console.log(signupError.message);
    }
    return navigate(path, { replace: true });
  };

  //query function for saloon

  return (
    <>
      <div className="form-wrapper ">
        <div id="register-form">
          <p className="login-title register-title">Complete Your Profile</p>
          <div className="login-hr" />

          <form onSubmit={handleSubmit}>
            <div className="form-group login-sj">
              <label htmlFor="exampleInputName1">Name:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="emailHelp"
                placeholder="Your Name"
                name="displayname"
				required
				value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-group login-sj">
              <label htmlFor="exampleInputEmail2">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
				value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            {/* <div className="form-group login-sj">
            <label htmlFor="exampleInputPassword1"></label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div> */}
            {signupIsPending ? (
              <>
                <button
                  type="submit"
                  className="btn-auth-sj btn btn-primary"
                  disabled
                >
                  Save Details
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="btn-auth-sj btn btn-primary">
                  Save Details
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SaveUserDetails;
