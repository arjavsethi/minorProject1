import "./AddPaymentDetails.scss";

import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useBuisness from "../../hooks/useBuisness";
import { useNavigate } from "react-router";
import { useUserType } from "../../hooks/useUserType";

import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";
import Loading from "../../components/loading/Loading";

export default function AddPaymentDetails() {
    const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");
    const navigate = useNavigate();

    const [beneficiaryName, setBeneficiaryName] = useState("");
    const [ifscCode, setIFSCCode] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [upiAddress, setUPIAddress] = useState("");

    const [isFetched, setIsFetched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let paymentDetails = {
            name: beneficiaryName,
            ifscCode: ifscCode,
            accountNo: accountNo,
            mobileNo: mobileNo,
            upiAddress: upiAddress,
        };
        // console.log(buisnessData)
        updateDocument(
            {
                paymentDetails,
            },
            salon.id
        );

        return navigate("/termsNew");
    };

    const [_userFromDB, set_UserFromDB] = useState(null);
    const [_isSalonOwner, set_IsSalonOwner] = useState(false);
    const { user: _userContext } = useAuthContext();
    const { getUserType: _getUserType } = useUserType();

    useEffect(() => {
        if (_userContext && !_userFromDB) {
            const fetchUser = async () => {
                let userFromDB = await _getUserType(_userContext.uid);
                if (userFromDB) {
                    set_UserFromDB(userFromDB);
                    if (userFromDB.type === "salonOwner") {
                        set_IsSalonOwner(true);
						setIsFetched(true)
                    } else {
                        return navigate("/");
                    }
                }
            };
            fetchUser();
        }
    }, [_getUserType, _userContext, _userFromDB, navigate]);

    return (
        <>
            {isFetched ? 
                <>
                    <div className="form-wrapper">
                        <>
                            <div id="login-form">
                                <p className="login-title">
                                    Add Payment Details
                                </p>
                                <div className="login-hr" />
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputBuisnessName">
                                            Beneficiary Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputBuisnessName"
                                            placeholder="Your Name as in Bank Account"
                                            required
                                            value={beneficiaryName}
                                            onChange={(e) =>
                                                setBeneficiaryName(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputBuisnessName">
                                            IFSC Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputBuisnessName"
                                            placeholder="IFSC Code"
                                            value={ifscCode}
                                            onChange={(e) =>
                                                setIFSCCode(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputBuisnessName">
                                            Account Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputBuisnessName"
                                            placeholder="Account Number"
                                            value={accountNo}
                                            onChange={(e) =>
                                                setAccountNo(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputBuisnessName">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputBuisnessName"
                                            placeholder="Mobile Number"
                                            value={mobileNo}
                                            onChange={(e) =>
                                                setMobileNo(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group login-sj">
                                        <label htmlFor="exampleInputBuisnessName">
                                            UPI Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputBuisnessName"
                                            placeholder="Your UPI Address"
                                            value={upiAddress}
                                            onChange={(e) =>
                                                setUPIAddress(e.target.value)
                                            }
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-auth-sj btn btn-primary"
                                    >
                                        Add Payment Details
                                    </button>
                                </form>
                            </div>
                        </>
                    </div>
                </> : <><Loading/></>
            }
        </>
    );
}
