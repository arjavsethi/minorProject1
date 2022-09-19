import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ServiceCardDashboard.scss";
import { Add } from "@material-ui/icons";

const ServiceCardDashboard = ({
    index,
    service,
    // deleteServiceById,
    // addServiceById,
    // bottom,
}) => {
    // const handleDelete = () => {
    //     deleteServiceById(service.serviceId);
    // };

    // const handleAdd = () => {
    //     addServiceById(service.serviceId);
    // };

    return (
        <>
            <div className="serviceCardBooking bg-white shadow-md max-w-[300px] max-h-96 md:max-h-[22rem] rounded">
                <div className="imgWrapper w-full h-3/6 overflow-hidden rounded-t">
                    <img
                        className="cardImgTop w-full h-full object-cover object-center"
                        src={service.image.url}
                        alt="..."
                    />
                </div>

                <div className="cardBody h-3/6 p-4">
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

                    {/* <div className="cardButtons md:mt-auto">
                        {bottom ? (
                            <>
                                <div
                                    className="w-6/12 mt-3 bg-site-500 hover:bg-green-500 py-2.5 cursor-pointer shadow-md rounded-md flex justify-center items-center"
                                    onClick={handleAdd}
                                    ref={setRef}
                                >
                                    <MdAdd className="AddIcon text-white text-2xl" />
                                    <span className="buttonText font-outfit text-white font-normal text-xl">Add</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    onClick={handleDelete}
                                    className="w-6/12 mt-3 bg-site-500 hover:er:bg-red-500 cursor-pointer py-2.5 shadow-md rounded-md flex justify-center items-center"
                                >
                                    <MdDelete className="deleteIcon text-white text-2xl" />
                                    <span className="buttonText font-outfit text-white font-normal text-xl">Delete</span>
                                </div>
                            </>
                        )}
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default ServiceCardDashboard;
