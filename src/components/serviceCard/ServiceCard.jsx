import React, { useState } from "react";
import Editservices from "../editservices/Editservices";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ServiceCard.scss";



const ServiceCard = ({index,service, img, deleteServiceAtIndex, editServiceAtIndex }) => {
    const [edt, setedt] = useState(false);

	const handleDelete = () => {
		deleteServiceAtIndex(index)
	}

    return (
        <>
            <div className="serviceCardBooking bg-white shadow-md max-w-[300px] max-h-96  md:max-h-[25rem] rounded">
                <div className="imgWrapper w-full h-3/6 overflow-hidden rounded-t">
                    <img className="cardImgTop w-full h-full object-cover object-center" src={service.image.url} alt="..." />
                </div>

                <div className="cardBody flex flex-col h-3/6 p-4">
                    <div className="bodyTop flex justify-between items-center">
                        <h5 className="cardTitle font-fira font-semibold text-2xl">{`${service.name}`}</h5>
                        <div className="priceSide flex">
                            <div className="actualPrice font-fira text-xl font-semibold text-site-500 mr-2 md:mr-1">₹{service.price.discounted}</div>
                            <div className="originalPrice line-through font-fira text-xl font-semibold">₹{service.price.original}</div>
                        </div>
                    </div>

                    <div className="textMid mt-2">
                        <p className="cardText font-roboto text-lg leading-5 text-black opacity-40">
                            {service.description}
                        </p>
                    </div>

                    <div className="cardButtons flex mt-auto">
                        <div
                            className="w-6/12 mt-3 bg-site-500 hover:bg-green-500 py-2.5 cursor-pointer shadow-md rounded-l-md flex justify-center items-center"
                            onClick={() => {
								
                                setedt(true);
                            }}
                        >
                            <EditIcon className="AddIcon text-white text-2xl" />
                            <span className="buttonText font-fira text-white font-normal text-xl">Edit</span> 
                        </div>
                        <div onClick={handleDelete} className="w-6/12 mt-3 bg-black hover:bg-red-500 py-2.5 cursor-pointer shadow-md rounded-r-md flex justify-center items-center">
                            <DeleteIcon className="AddIcon text-white text-2xl" /><span className="buttonText font-fira text-white font-normal text-xl">Delete</span>
                        </div>
                    </div>

                    {edt ? <Editservices service={service} editServiceAtIndex={editServiceAtIndex} index={index} fun={setedt} img={img} /> : null}
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
