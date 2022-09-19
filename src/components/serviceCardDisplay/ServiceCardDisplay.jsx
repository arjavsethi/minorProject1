import React from "react";

import "./ServiceCardDisplay.scss";



const ServiceCardDisplay = ({service}) => {

    return (
        <>
            <div className="serviceCardBooking bg-white shadow-md max-w-[300px] md:max-h-[22rem] rounded">
                <div className="imgWrapper w-full h-44 overflow-hidden rounded-t">
                    <img
                        className="cardImgTop w-full h-full object-cover object-center"
                        src={service.image.url}
                        alt="..."
                    />
                </div>

                <div className="cardBody p-4">
                    <div className="bodyTop flex justify-between items-center">
                        <h5 className="cardTitle font-fira font-semibold text-2xl">{`${service.name}`}</h5>
                        <div className="priceSide flex">
                            <div className="actualPrice font-fira text-xl font-semibold text-site-500 mr-2 md:mr-1">
                                ₹{service.price.discounted}
                            </div>
                            <div className="originalPrice line-through font-fira text-xl font-semibold">
                                ₹{service.price.original}
                            </div>
                        </div>
                    </div>

                    <div className="textMid mt-2">
                        <p className="cardText font-roboto text-lg leading-5 text-black opacity-40">{service.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCardDisplay;
