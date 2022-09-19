import React, { useState } from "react";
import "./Editservices.scss";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

import { useCloudinary } from "../../hooks/useCloudinary";

const Editservices = (props) => {
    const { service, editServiceAtIndex, index } = props;

	const { uploadImage } = useCloudinary();

	const [photoChange, setPhotoChange] = useState(false)

    const [serviceName, setServiceName] = useState(service.name);
    const [servicePhoto, setServicePhoto] = useState(service.image);
    const [serviceOriginalPrice, setServiceOriginalPrice] = useState(service.price.original);
    const [serviceDiscountedPrice, setServiceDiscountedPrice] = useState(service.price.discounted);
    const [serviceDescription, setServiceDescription] = useState(service.description);

	const handlePhotoChange = (e) => {
		setPhotoChange(true)
		setServicePhoto(e.target.files[0])

	}

    const handleServiceSave = async () => {
        const imageObject = photoChange ? await uploadImage(servicePhoto) : null

        let newServiceObject = photoChange
            ? {
                  image: {
                      ...imageObject,
                  },
                  name: serviceName,
                  price: {
                      discounted: serviceDiscountedPrice,
                      original: serviceOriginalPrice,
                  },
                  description: serviceDescription,
              }
            : {
                  name: serviceName,
                  price: {
                      discounted: serviceDiscountedPrice,
                      original: serviceOriginalPrice,
                  },
                  description: serviceDescription,
              };

        editServiceAtIndex(index, newServiceObject);

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
                            <img src={service.image.url} alt="" />
                            <input
                                type="file"
                                id="file"
                                onChange={handlePhotoChange}
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 data">
                            <p className="input-label-edit">Services name</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder={service.name}
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />

                            <div className="conatiner price">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="input-label-edit">
                                            Price
                                        </p>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder={service.price.original}
                                            value={serviceOriginalPrice}
                                            onChange={(e) =>
                                                setServiceOriginalPrice(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <p className="input-label-edit">
                                            Discounted Price
                                        </p>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder={
                                                service.price.discounted
                                            }
                                            value={serviceDiscountedPrice}
                                            onChange={(e) =>
                                                setServiceDiscountedPrice(
                                                    e.target.value
                                                )
                                            }
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
                                placeholder={service.description}
                                value={serviceDescription}
                                onChange={(e) =>
                                    setServiceDescription(e.target.value)
                                }
                            ></textarea>

                            <div>
                                <button
                                    onClick={handleServiceSave}
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

export default Editservices;
