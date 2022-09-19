import React, { useState } from "react";
import useBuisness from "../../hooks/useBuisness";
import "./editprofile.scss";
import {useAuthContext} from "../../hooks/useAuthContext"
import profile from "../../assets/profile.png";

const Editprofile = (props) => {
    const [businessName, setBuisnessName] = useState("");
    const [businessOwner, setBuisnessOwner] = useState("");
    const [businessGST, setBuisnessGST] = useState("");
    const [businessEmail, setBuisnessEmail] = useState("");
	const {user} = useAuthContext()

	const {addSalon} = useBuisness()

	const handleSubmit = (e) => {
		e.preventDefault()
		addSalon({
			name: businessName,
			owner: {
				uid: user.uid,
				name:user.displayName,
				email:user.email
			},
			gstNo: businessGST,
		})
	}
    return (
        <>
            {props.show ? (
                <div className="loginBox">
                    <form onSubmit={handleSubmit}>
                        <button onClick={() => props.fun(false)}>X</button>

                        <p>Edit Business Profile</p>

                        <img id="proImg" src={profile} alt="" />
                        <div className="upload">Upload Profile Picture</div>
                        <input className="file" type="file" name="" id="" />

                        <section style={{ marginTop: "20px" }}>
                            Business Name
                        </section>
                        <input
                            style={{ backgroundColor: " #F0F0F0" }}
                            type="Text"
                            name="phone"
                            id="pass"
                            placeholder="Enter business name"
                            value={businessName}
                            onChange={(e) => setBuisnessName(e.target.value)}
                        />

                        <section style={{ marginTop: "15px" }}>
                            Owner Name (Name on your ID will be user)
                        </section>
                        <input
                            style={{ backgroundColor: " #F0F0F0" }}
                            type="Text"
                            name="phone"
                            id="pass"
                            placeholder="Enter owner Name"
                            value={businessOwner}
                            onChange={(e) => setBuisnessOwner(e.target.value)}
                        />

                        <section style={{ marginTop: "15px" }}>
                            GSTIN No.
                        </section>
                        <input
                            style={{ backgroundColor: " #F0F0F0" }}
                            type="Text"
                            name="phone"
                            id="pass"
                            placeholder="GSTIN No."
                            value={businessGST}
                            onChange={(e) => setBuisnessGST(e.target.value)}
                        />

                        <section style={{ marginTop: "15px" }}>
                            Email* (Your Oown Email Will be user)
                        </section>
                        <input
                            style={{ backgroundColor: " #F0F0F0" }}
                            type="email"
                            name="phone"
                            id="pass"
                            placeholder="xxxxxxxx@gmail.com"
                            value={businessEmail}
                            onChange={(e) => setBuisnessEmail(e.target.value)}
                        />

                        <div>
                            <button className="btn btn-primary">
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    );
};

export default Editprofile;
