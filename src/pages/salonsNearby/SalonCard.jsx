import React from "react";
import r5 from "../../assets/r5.png";
import star from "../../assets/star.png";
import girl from "../../assets/girl.jpeg";
import arrow from "../../assets/arrow.png";
import locationIcon from "../../assets/locationIcon.png";
import { useNavigate } from "react-router";

export const SalonCard = ({ salon }) => {

	const navigate = useNavigate()

    return (
        <>
            <div className="salon-card-solo">
                <div className="salon-image-wrapper">
                    <img src={r5} alt="" />
                </div>
                <div className="owner-photo-wrapper">
                    <img src={girl} alt="" />
                </div>
                <div className="salon-data">
                    <h2>{salon.name}</h2>
                    <div className="address-wrapper">
                        <div className="icon-wrapper">
                            <img src={locationIcon} alt="" />
                        </div>
                        <p className="address-text">
                            {/* 204, Shaitaan Gali, Shaamsham Ghat Ke
                                piche,Mastana,Jabalpur */}
                            {`${salon.address.line1}, ${salon.address.landmark}, ${salon.address.city}`}
							{/* {salon.address.state} */}
                        </p>
                    </div>

                    <div className="review-container">
                        <div className="review-stars-wrapper">
                            <div className="review-star-img-wrapper">
                                <img src={star} alt="" />
                            </div>
                            <div className="review-star-img-wrapper">
                                <img src={star} alt="" />
                            </div>
                            <div className="review-star-img-wrapper">
                                <img src={star} alt="" />
                            </div>
                            <div className="review-star-img-wrapper">
                                <img src={star} alt="" />
                            </div>
                            <div className="review-star-img-wrapper">
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <div className="review-text-content">
                            <p className="review-text-star-number">(4)</p>
                            <p className="review-text-total">65 reviews</p>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer more-info-salon" onClick={() => navigate(`/salon/${salon.id}`, {replace: true})}>
                    <div className="arrow-icon-wrapper">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
