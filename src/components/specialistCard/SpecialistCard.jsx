import React, { useState } from "react";
import EditSpecialist from "../editspecialist/Editspecialist";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./SpecialistCard.scss";

const SpecialistCard = ({
  index,
  specialist,
  img,
  deleteSpecialistAtIndex,
  editSpecialistAtIndex,
}) => {
  const [edt, setedt] = useState(false);

  const handleDelete = () => {
    deleteSpecialistAtIndex(index);
  };

  return (
    <>
      <div className="card service-card">
        <div className="img-wrapper">
          <img className="card-img-top" src={specialist.image.url} alt="..." />
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
                    return <li key={index}>{service}</li>;
                  })}
                </ul>
              </>
            )}
          </div>

          <div className="text-mid">
            <p className="card-text">{specialist.description}</p>
          </div>

          <div className="card-buttons">
            <div
              className="button-sj-card edit-button"
              onClick={() => {
                setedt(true);
              }}
            >
              <EditIcon className="icon" />
              <span className="button-text">Edit</span>
            </div>
            <div
              onClick={handleDelete}
              className="button-sj-card delete-button"
            >
              <DeleteIcon className="icon" />
              <span className="button-text">Delete</span>
            </div>
          </div>

          {edt ? (
            <EditSpecialist
              specialist={specialist}
              editSpecialistAtIndex={editSpecialistAtIndex}
              index={index}
              fun={setedt}
              img={img}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SpecialistCard;
