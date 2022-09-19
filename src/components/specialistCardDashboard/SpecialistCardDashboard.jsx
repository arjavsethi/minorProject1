import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Add } from "@material-ui/icons";

import "./SpecialistCardDashboard.scss";

const SpecialistCardDashboard = ({
    index,
    specialist,
    // deleteSpecialistById,
    // addSpecialistById,
    // bottom,
}) => {

    // const handleDelete = () => {
    //     deleteSpecialistById(specialist.specialistId);
    // };
	// const handleAdd = () => {
    //     addSpecialistById(specialist.specialistId);
    // };

    return (
        <>
		<div className="serviceCardBooking bg-white shadow-md max-w-[300px] md:max-h-[22rem] rounded">
                <div className="imgWrapper w-full h-44 overflow-hidden rounded-t">
                    <img
                        className="cardImgTop w-full h-full object-cover object-center"
                        src={specialist.image.url}
                        alt="..."
                    />
                </div>

				<div className="cardBody p-4">
                    <div className="bodyTop">
                        <h5 className="cardTitle font-fira font-semibold text-2xl">{`${specialist.name}`}</h5>
                    </div>

                    <div className="specialist-services-wrapper">
                        {specialist.services && (
                            <>
                                <ul className="specialist-edit-services-card-ul">
                                    {specialist.services.map(
                                        (service, index) => {
                                            return (
                                                <li key={index}>{service}</li>
                                            );
                                        }
                                    )}
                                </ul>
                            </>
                        )}
                    </div>

                    <div className="textMid mt-2">
                        <p className="cardText font-roboto text-lg leading-5 text-black opacity-40">{specialist.description}</p>
                    </div>

                    {/* <div className="card-buttons">
                        {bottom ? (
                            <>
                                <div
                                    className="button-sj-card edit-button booking-btn"
                                    onClick={handleAdd}
                                >
                                    <Add className="icon" />
                                    <span className="button-text">Add</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    onClick={handleDelete}
                                    className="button-sj-card delete-button booking-btn"
                                >
                                    <DeleteIcon className="icon" />
                                    <span className="button-text">Delete</span>
                                </div>
                            </>
                        )}
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default SpecialistCardDashboard;
