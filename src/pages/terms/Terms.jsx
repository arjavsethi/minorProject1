import "./Terms.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";

import { useAuthContext } from "../../hooks/useAuthContext";
import TermSolo from "./TermSolo";
import Footer from "../../components/footer/Footer";

export default function Terms() {
    const [isAgreed, setIsAgreed] = useState(false);
	const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");

    const navigate = useNavigate();
const terms = [   {
    subTitle: "Introduction",
    subDetails: [
        {
            title: "Translation of Terms",
            p: [
                {
                    pItem: "HomeStays.com  may provide a translation of the English version of the Terms into other languages. You understand and agree that any translation of the Terms into other languages is just only for your convenience and that the English version shall govern the terms of your relationship with Home Stays . Furthermore, if there are any inconsistencies between the English version of the Terms and its translated version, the English version of the Terms shall prevail over others.",
                },
            ],
        },
        {
            title: "Definitions",
            p: [
                {
                    pItem: 'Definations',
                },
                {
                    pItem: 'The terms "We", "Us", and "Our" shall mean HomeStays.com',
                },
            ],
        },
        {
            title: "Home-stay accommodations",
            p: [
                {
                    pItem: "Our home-stay accommodations take the host's name and contact details from their booking application. While this gives the host an incentive to ensure your home is as clean and safe as",
                },
            ],
        },
    ],
},
]
   

    const template = [
        {
            subTitle: "",
            subDetails: [
                {
                    title: "",
                    p: [
                        {
                            pItem: "",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
    ];

	const handleCheckChange = (e) => {
		setIsAgreed(e.target.checked);
	}

    const handleSubmit = (e) => {
        e.preventDefault();

		if(isAgreed){
			updateDocument(
				{
					agreed: isAgreed
				},
				salon.id
			);
			return navigate(`/profile/${user.uid}`);
		} else {
			alert("You cannot continue Further")
		}
    };

    return (
        <>
            <div className="form-wrapper tnc-form-wrapper">
                <>
                    <div id="login-form">
					<div className="top-wrapper-tnc">
					<p className="login-title">Agreement Form</p>
                        <div className="login-hr tnc-hr" />
					</div>
                        
                        <div className="t-and-c-wrapper">
                            <div className="welcome-top">
                                <h2>Welcome</h2>
                                <p>
                                    Welcome to HOME STAYS. This document is
                                    an electronic record in terms of the
                                    Information Technology Act, 2000 and
                                    published in accordance with the provisions
                                    of Rule 3) of the Information Technology
                                    (Intermediaries guidelines) Rules, 2011
                                    requires publishing the rules and
                                    regulations, privacy policy and Terms and
                                    Conditions of Use for access or usage of
                                    HOME STAYS platform.
                                    <br />
                                    <br />
                                    Your use of the App/Website and the
                                    underlying services and tools offered
                                    through the App/Website are subject to and
                                    governed by the following terms and
                                    conditions including the applicable policies
                                    which are incorporated herein by way of
                                    reference. If you transact on the
                                    App/Website, you shall be subject to the
                                    policies that are applicable to the App for
                                    such transactions.
                                    <br />
                                    <br />
                                    USING OR OTHERWISE ACCESSING THE APP/WEBSITE
                                    INDICATES YOUR AGREEMENT TO ALL THE TERMS
                                    AND CONDITIONS UNDER THESE TERMS OF USE, SO
                                    PLEASE READ THE TERMS AND CONDITIONS
                                    CAREFULLY BEFORE PROCEEDING.
                                    <br />
                                </p>
                            </div>
                            <div className="terms-container">
                                <ol className="terms-section-ol">
                                    {terms.map((term) => (
                                        <TermSolo term={term} />
                                    ))}
                                </ol>
                            </div>
                        </div>
						<div className="login-hr tnc-hr bottom-hr" />

                        <form onSubmit={handleSubmit}>
                            <div className="form-check tnc-div-wrapper">
                                <input
                                    className="form-check-input input-tnc-check"
                                    type="checkbox"
                                    id="flexCheckDefault"
									required
									onChange={handleCheckChange}
                                />
                                <label
                                    className="form-check-label label-tnc-check"
                                    htmlFor="flexCheckDefault"
                                >
									By clicking here, I state that I have read
                                    and understood the terms and conditions.I
                                    agree to the terms and conditions as set out
                                    by the user agreement.
                                </label>
                            </div>
							

                            <button
                                type="submit"
                                className="btn-auth-sj btn btn-primary tnc-button"
                            >
                                Agree and Continue
                            </button>
                        </form>
                    </div>
                </>
            </div>

            <Footer />
        </>
    );
}
