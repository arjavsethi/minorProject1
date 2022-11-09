import "./AddBuisnessDetails.scss";

import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useBuisness from "../../hooks/useBuisness";
import { useNavigate } from "react-router";
import { useUserType } from "../../hooks/useUserType";
import Loading from "../../components/loading/Loading";

export default function AddBuisnessDetails() {
  const [businessName, setBuisnessName] = useState("");
  const [businessAddress, setBuisnessAddress] = useState({});
  const [businessAddressLineOne, setBuisnessAddressLineOne] = useState("");
  const [businessAddressLandmark, setBuisnessAddressLandmark] = useState("");
  const [businessAddressCity, setBuisnessAddressCity] = useState("");
  const [businessAddressCityPinCode, setBuisnessAddressCityPinCode] =
    useState("");
  const [businessAddressState, setBuisnessAddressState] = useState("");
  const [businessAddressCountry, setBuisnessAddressCountry] = useState("");

  const [businessGST, setBuisnessGST] = useState("");
  const [businessType, setBuisnessType] = useState("");
  const [businessPanNumber, setBuisnessPanNumber] = useState("");

  const [isFetched, setIsFetched] = useState(true);

  const { addSalon } = useBuisness();
  const { user } = useAuthContext();
//   console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    let buisnessData = {
      name: businessName,
      owner: {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      },
      address: {
        line1: businessAddressLineOne,
        landmark: businessAddressLandmark,
        city: businessAddressCity,
        pincode: businessAddressCityPinCode,
        state: businessAddressState,
        country: businessAddressCountry,
      },
      gstNo: businessGST,
      panNo: businessPanNumber,
      type: businessType,
    };
    console.log(buisnessData);
    await addSalon(buisnessData);

    return navigate("/addSalonServices", { state: { userId: user.uid } });
  };

  const [userFromDB, setUserFromDB] = useState(null);
  const [isSalonOwner, setIsSalonOwner] = useState(false);
  const { user: userContext } = useAuthContext();
  const { getUserType } = useUserType();
  const navigate = useNavigate();

  useEffect(() => {
      if (userContext && !userFromDB) {
          const fetchUser = async () => {
              let userFromDB = await getUserType(userContext.uid);
              if (userFromDB) {
                  setUserFromDB(userFromDB);
                  if (userFromDB.type === "salonOwner") {
                      setIsSalonOwner(true);
  					setIsFetched(true)
                  } else {
                      return navigate("/");
                  }
              }
          };
          fetchUser();
      }
  }, [getUserType, isSalonOwner, navigate, userContext, userFromDB]);

  return (
    <>
      {isFetched ? (
        <>
          <div className="form-wrapper">
            <>
              <div id="login-form">
                <p className="login-title">Add Buisness Details</p>
                <div className="login-hr" />
                <form onSubmit={handleSubmit}>
                  {/* <div className="form-group login-sj">
                                <label htmlFor="exampleInputBuisnessName">
                                    Upload Buisness Photo
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleInputBuisnessName"
                                    placeholder="Password"
                                    value={businessName}
                                    onChange={(e) =>
                                        setBuisnessName(e.target.value)
                                    }
                                />
                            </div> */}

                  <div className="form-group login-sj">
                    <label htmlFor="exampleInputBuisnessName">
                      Buisness Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputBuisnessName"
                      placeholder="Indore Homestay"
                      required
                      value={businessName}
                      onChange={(e) => setBuisnessName(e.target.value)}
                    />
                  </div>
                  <h6>Buisness Address</h6>
                  <div className="address-input" style={{ marginLeft: "30px" }}>
                    <div className="form-group login-sj">
                      <label htmlFor="exampleInputBuisnessName">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBuisnessName"
                        placeholder="204, Bengali Colony"
                        value={businessAddressLineOne}
                        required
                        onChange={(e) =>
                          setBuisnessAddressLineOne(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group login-sj">
                      <label htmlFor="exampleInputBuisnessName">Landmark</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBuisnessName"
                        placeholder="Indian Coffee House"
                        value={businessAddressLandmark}
                        onChange={(e) =>
                          setBuisnessAddressLandmark(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group login-sj">
                      <label htmlFor="exampleInputBuisnessName">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBuisnessName"
                        placeholder="Jabalpur"
                        value={businessAddressCity}
                        required
                        onChange={(e) => setBuisnessAddressCity(e.target.value)}
                      />
                    </div>
                    <div className="form-group login-sj">
                      <label htmlFor="exampleInputBuisnessName">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBuisnessName"
                        placeholder="402552"
                        value={businessAddressCityPinCode}
                        required
                        onChange={(e) =>
                          setBuisnessAddressCityPinCode(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group login-sj">
                      <label htmlFor="exampleInputBuisnessName">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBuisnessName"
                        placeholder="Madhya Pradesh"
                        value={businessAddressState}
                        required
                        onChange={(e) =>
                          setBuisnessAddressState(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group login-sj">
                      <label htmlFor="exampleInputBuisnessName">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBuisnessName"
                        placeholder="India"
                        value={businessAddressCountry}
                        required
                        onChange={(e) =>
                          setBuisnessAddressCountry(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group login-sj">
                    <label htmlFor="exampleInputBuisnessName">GSTIN</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputBuisnessName"
                      placeholder="Your GSTIN Number (Optional)"
                      value={businessGST}
                      onChange={(e) => setBuisnessGST(e.target.value)}
                    />
                  </div>
                  <h6>Your Stay Type</h6>
                  <div className="salon-gender-type">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Men"
                        onClick={(e) => setBuisnessType(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Single
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Women"
                        onClick={(e) => setBuisnessType(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Couple
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Unisex"
                        onClick={(e) => setBuisnessType(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Family
                      </label>
                    </div>
                  </div>
                  <div className="form-group login-sj">
                    <label htmlFor="exampleInputBuisnessName">PAN Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputBuisnessName"
                      placeholder="PAN Number"
                      value={businessPanNumber}
                      onChange={(e) => setBuisnessPanNumber(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-auth-sj btn btn-primary"
                    // onClick={() => navigate("/addSalonServices")}
                  >
                    Register Home Stay and Proceed
                  </button>
                </form>
              </div>
            </>
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
