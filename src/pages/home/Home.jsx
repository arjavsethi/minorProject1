import React from "react";
import CarouselHome from "../../components/carouselHome/CarouselHome";
import "./home.scss";
import p1 from "../../assets/p1.png";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import e1 from "../../assets/e1.jpg";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.jpg";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import r6 from "../../assets/r6.png";
import r7 from "../../assets/r7.png";
import calendar from "../../assets/calendar.png";
import icon from "../../assets/Icon.jpg";
import icon1 from "../../assets/Icon1.jpg";
import shaver from "../../assets/shaver.png";
import p23 from "../../assets/p23.jpg";
import Slider from "../../components/slider/Slider";

import r1 from "../../assets/r1.png";
import Footer from "../../components/footer/Footer";
import { useCartContext } from "../../hooks/useCartContext";

const Home = () => {
    return (
        <>
            {/* <CarouselHome /> */}

            <div className="container mainCon">
                <div className="row features">
                    <div className="col-xl-6 col-lg-6">
                        <h2 className="subheading-home">Our Best Features</h2>
                        <div className="login-hr home-sub-hr" />

                        <p className="sub-feature-text">
                         Our Goal is to create  a homestay ecosystem for the tourism buisness which must be consistent with enviroment and society. We are working on a platform that will help the tourism buisness to grow and help the local community to earn a living.
                        </p>

                        <div className="container-fluid part">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="sub-feature-wrapper">
                                        <img src={calendar} alt="" />
                                        <p>Easy way to Book</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="sub-feature-wrapper">
                                        <img src={calendar} alt="" />
                                        <p>Best Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid part">
                            <div className="row">
                                <div
                                    className="col-md-6 col-lg-6 col-xl-6"
                                    id="p1"
                                >
                                    <div className="sub-feature-wrapper">
                                        <img src={icon1} alt="" />
                                        <p>Good discount</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="sub-feature-wrapper">
                                        <img src={icon} alt="" />
                                        <p>Happy Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 imgsection">
                        <img src={p1} alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid about">
                <div className="row correction-class">
                    <div className="col-xl-6 col-lg-6 imgsection1">
                        <img src={p23} alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-6 aboutdata">
                        <h4 id="head1">About us</h4>
                        <h2 className="subheading-home">Welcome To Home Stay</h2>
                        <div className="login-hr home-sub-hr" />
                        <p className="sub-about-us-text">
                            We will help you find the best homestay at your
                            location and enable you to book instantly.
                            Search and book your favorite homestay
                             with the most trusted platform in the country.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
