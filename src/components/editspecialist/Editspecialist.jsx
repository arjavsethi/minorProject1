import "./Editspecialist.scss";
import React, { useState } from "react";

import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";

import { useCloudinary } from "../../hooks/useCloudinary";

const EditSpecialist = (props) => {
  const { specialist, editSpecialistAtIndex, index } = props;

  const { uploadImage } = useCloudinary();

  const [photoChange, setPhotoChange] = useState(false);

  const [specialistName, setSpecialistName] = useState(specialist.name);
  const [specialistPhoto, setSpecialistPhoto] = useState(specialist.image);
  const [specialistServices, setSpecialistServices] = useState(
    specialist.services
  );
  const [specialistServiceTemp, setSpecialistServiceTemp] = useState(
    specialist.services[0]
  );
  const [specialistGender, setSpecialistGender] = useState(specialist.gender);
  const [specialistDescription, setSpecialistDescription] = useState(
    specialist.description
  );

  const handlePhotoChange = (e) => {
    setPhotoChange(true);
    setSpecialistPhoto(e.target.files[0]);
  };

  const handleSpecialistSave = async () => {
    const imageObject = photoChange ? await uploadImage(specialistPhoto) : null;

    let newSpecialistObject = photoChange
      ? {
          image: {
            ...imageObject,
          },
          name: specialistName,
          gender: specialistGender,
          description: specialistDescription,
          services: specialistServices,
        }
      : {
          name: specialistName,
          gender: specialistGender,
          description: specialistDescription,
          services: specialistServices,
        };

    editSpecialistAtIndex(index, newSpecialistObject);

    return props.fun(false);
  };

  return (
    <>
      <div className="editCon">
        <button className="cancel" onClick={() => props.fun(false)}>
          X
        </button>
        <div className="container-fluid editdata card-edit-services">
          <div className="row">
            <div className="col-xl-6 col-lg-6 imgsection">
              <img src={specialist.image.url} alt="" />
              <input type="file" id="file" onChange={handlePhotoChange} />

              <div className="services-wrapper-specialist">
                {specialist.services && (
                  <>
                    <ul className="specialist-edit-services-card-ul">
                      {specialist.services.map((service) => (
                        <>
                          <li>{service}</li>
                        </>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 data">
              <p className="input-label-edit">Services name</p>
              <input
                type="text"
                name=""
                id=""
                placeholder={specialist.name}
                value={specialistName}
                onChange={(e) => setSpecialistName(e.target.value)}
              />

              <div className="conatiner price">
                <div className="row">
                  <div className="col-6">
                    <p className="input-label-edit">Services</p>
                    <div className="input-wrapper-edit-specialists">
                      <input
                        type="text"
                        className="service-input"
                        name=""
                        placeholder={specialist.services[0]}
                        value={specialistServiceTemp}
                        onChange={(e) =>
                          setSpecialistServiceTemp(e.target.value)
                        }
                      />
                      <div
                        onClick={() =>
                          setSpecialistServices((prev) => [
                            ...prev,
                            specialistServiceTemp,
                          ])
                        }
                        className="add-service add-btn-edit-specialist"
                      >
                        <AddIcon fontSize="large" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="input-label-edit">Gender</p>
                    <input
                      type="text"
                      name=""
                      placeholder={specialist.gender}
                      value={specialistGender}
                      onChange={(e) => setSpecialistGender(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <p className="input-label-edit text">Description</p>
              <textarea
                name=""
                id=""
                cols="48"
                rows="3"
                placeholder={specialist.description}
                value={specialistDescription}
                onChange={(e) => setSpecialistDescription(e.target.value)}
              ></textarea>

              <div>
                <button
                  onClick={handleSpecialistSave}
                  className="btn btn-primary"
                >
                  <SaveIcon fontSize="small" /> Save
                </button>
                <button
                  onClick={() => props.fun(false)}
                  className="btn btn-dark"
                >
                  <CancelIcon fontSize="small" /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSpecialist;
