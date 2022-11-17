import React from "react";
import "./footer.scss";

import { MdLocationOn } from "react-icons/md";

import Facebook from "@material-ui/icons/Facebook";
import Insta from "@material-ui/icons/Instagram";
import Youtube from "@material-ui/icons/YouTube";
import Call from "@material-ui/icons/Call";
import Mail from "@material-ui/icons/Mail";
import AddLocationAltIcon from "@material-ui/icons/AddLocation";
import { Copyright } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div
                className="container-fluid mt-5 px-0"
                id="cardcontainer"
                // data-aos='fade-up'
            >
                <div className="footer w-100">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h1 style={{ color: "White" }}>
                                        Home Stay
                                    </h1>
                                </div>
                                <p className="card-text">
                                    Get the best room service
                                </p>
                                <div className="social mt-2 mb-3">
                                    <a className="fa" href="/" target="1">
                                        <Facebook />
                                    </a>
                                    <a className="fa" href="/" target="1">
                                        <Insta />
                                    </a>
                                    <a className="fa" href="/">
                                        <Youtube />
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            <h5 className="heading">Policies</h5>

                            <ul>
                                <li>
                                    <NavLink className="footer-tnc" to="/">
                                        <p>Terms & Conditions</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="footer-tnc"
                                        to="/"
                                    >
                                        <p>Privacy Policy</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="footer-tnc"
                                        to="/"
                                    >
                                        <p>Cancellation Policy</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-md-3 col-sm-3 col-xs-3">
                            <h5 className="heading">Popular Services</h5>

                            <ul>
                                <li>Haircut && color</li>
                                <li>
                                    <a href="/">Nail</a>
                                </li>
                                <li>
                                    <a href="/">Massage</a>
                                </li>
                                <li>
                                    <a href="/#Sponsors">Sponsors</a>
                                </li>
                                <li>Beard</li>
                                <li>facial</li>
                            </ul>
                        </div> */}
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            <h5 className="heading">Contact Info</h5>
                            <ul className="card-text">
                                <li>
                                    <a href="/">
                                        <Call /> Minor Project created By Arjav, Atharva , Devesh and Bhushan
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <Mail /> contact@homestay.com
                                    </a>
                                </li>
                                <li>
                                    <MdLocationOn /> Plot No. ,00 ABCXYZ,
                                    Residency , Indore, Madhya
                                    Pradesh, India, 452009
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="pull">
                        <p>
                            <Copyright fontSize="small" /> 2022 All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
