import React, { useState } from "react";
// import EditSpecialist from "../editSpecialist/EditSpecialist";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
import defaultImage from "../../assets/profilePerson.jpg";
import "./SpecialistCardDisplay.scss";

const SpecialistCard = ({ specialist }) => {
  const getRandomNumber = () => {
    let num = Math.floor(Math.random() * 10000000000);
    return num;
  };
  console.log(specialist.image.url);

  return (
    <>
      <div className="card service-card">
        <div className="img-wrapper">
          {specialist.image.url ? (
            <img
              className="card-img-top"
              src={specialist.image.url}
              alt="..."
            />
          ) : (
            <img
              className="card-img-top imgResponsive"
              src={defaultImage}
              alt="..."
            />
          )}
          {/* <img className="card-img-top" src={specialist.image.url} alt="..." /> */}
        </div>

        <div className="card-body">
          <div className="body-top-ul">
            <h5 className="card-title">{`${specialist.name}`}</h5>
          </div>

          <div className="specialist-services-wrapper">
            {specialist.services && (
              <>
                <ul className="specialist-edit-services-card-ul">
                  {specialist.services.map((service, index) => {
                    return <li key={getRandomNumber()}>{service}</li>;
                  })}
                </ul>
              </>
            )}
          </div>

          <div className="text-mid">
            <p className="card-text">{specialist.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistCard;
