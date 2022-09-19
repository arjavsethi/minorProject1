import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Add } from "@material-ui/icons";

import "./SpecialistCardBooking.scss";

const SpecialistCardBooking = ({
    index,
    specialist,
    deleteSpecialistById,
    addSpecialistById,
    bottom,
}) => {

    const handleDelete = () => {
        deleteSpecialistById(specialist.specialistId);
    };
	const handleAdd = () => {
        addSpecialistById(specialist.specialistId);
    };

    return (
        <>
            <div className="card service-card specialist-card-booking">
                <div className="img-wrapper">
                    <img
                        className="card-img-top"
                        src={specialist.image.url}
                        alt="..."
                    />
                </div>

                <div className="card-body">
                    <div className="body-top-ul">
                        <h5 className="card-title">{`${specialist.name}`}</h5>
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

                    <div className="text-mid">
                        <p className="card-text">{specialist.description}</p>
                    </div>

                    <div className="card-buttons">
                        {bottom ? (
                            <>
                                <div
                                    className="button-sj-card edit-button booking-btn cursor-pointer" 
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
                                    className="button-sj-card delete-button booking-btn cursor-pointer"
                                >
                                    <DeleteIcon className="icon" />
                                    <span className="button-text">Delete</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialistCardBooking;
