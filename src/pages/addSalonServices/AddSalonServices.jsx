import "./AddSalonServices.scss";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

import ServiceCard from "../../components/serviceCard/ServiceCard";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";


import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useCloudinary } from "../../hooks/useCloudinary";
import { useAlphaNumericId } from "../../hooks/useAlphaNumericId";
import { useUserType } from "../../hooks/useUserType";

export default function AddSalonServices() {
    const navigate = useNavigate();

    const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");
    const { uploadImage } = useCloudinary();
    const { generateID } = useAlphaNumericId();
    if (salon) {
        console.log(salon);
    }

    const [services, setServices] = useState(
        salon && salon.services ? salon.services : []
    );
    const [serviceName, setServiceName] = useState("");
    const [servicePhoto, setServicePhoto] = useState("");
    const [serviceCategory, setServiceCategory] = useState("");
    const [serviceOriginalPrice, setServiceOriginalPrice] = useState("");
    const [serviceDiscountedPrice, setServiceDiscountedPrice] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");

    const [isFetched, setIsFetched] = useState(false);

    const [edit, setedit] = useState(false);

    let tempCardData = {
        name: "Faux Hawk",
        description:
            "It is a long established fact that a re3ader will be distracted by thee readable cotnent of a page when looking",
        price: {
            actual: "₹150",
            original: "₹250",
        },
        serviceId: "U9ioDIpsBXUJF4TDcjoi",
        image: {
            url: "https://res.cloudinary.com/bizupreach/image/upload/v1653482934/sundara/men1_rfvr8s.png",
            publicId: "men1_rfvr8s",
        },
    };

    const deleteServiceAtIndex = (indexToDelete) => {
        setServices(
            services.filter((service, index) => index !== indexToDelete)
        );
    };

    const editServiceAtIndex = (indexToEdit, newServiceObject) => {
        let servicesArrayCopy = [...services];

        let oldServiceObject = servicesArrayCopy[indexToEdit];
        servicesArrayCopy[indexToEdit] = {
            ...oldServiceObject,
            ...newServiceObject,
        };

        setServices(servicesArrayCopy);
    };

    useEffect(() => {
		console.log(services)
        if (services.length === 0) {
            console.log(services);
            if (salon && salon.services) {
                console.log(salon);
                let servicesArrayCopy = [...salon.services];
                console.log(servicesArrayCopy);
                setServices(servicesArrayCopy);
            }
        }
    }, [salon, services]);

    const handleServiceSubmit = async (e) => {
        e.preventDefault();

        const imageObject = await uploadImage(servicePhoto);
        console.log(imageObject);

        setServices((prev) => [
            ...prev,
            {
                image: {
                    ...imageObject,
                },
                name: serviceName,
                serviceId: generateID(20),
                price: {
                    discounted: serviceDiscountedPrice,
                    original: serviceOriginalPrice,
                },
				category: serviceCategory,
                description: serviceDescription,
            },
        ]);

        e.target.reset();
    };

    const handleAllServiceSubmit = async (e) => {
            await updateDocument(
                {
                    services,
                },
                salon.id
            );
        

        return navigate("/addSalonTimings");
    };
    

    const [_userFromDB, set_UserFromDB] = useState(null);
    const [_isSalonOwner, set_IsSalonOwner] = useState(false);
    const { user: _userContext } = useAuthContext();
    const { getUserType: _getUserType } = useUserType();

    useEffect(() => {
        if (_userContext && !_userFromDB) {
            const fetchUser = async () => {
                let userFromDB = await _getUserType(_userContext.uid);
                if (userFromDB) {
                    set_UserFromDB(userFromDB);
                    if (userFromDB.type === "salonOwner") {
                        set_IsSalonOwner(true);
						setIsFetched(true)
                    } else {
                        return navigate("/");
                    }
                }
            };
            fetchUser();
        }
    }, [_getUserType, _userContext, _userFromDB, navigate]);

    const options = [
		{ value: 'Body', label: 'Single' },
		{ value: 'Face', label: 'Couple' },
		{ value: 'Hair', label: 'Shared' },
    { value: 'Facial Hair', label: 'Custom' }
	  ]

    return (
        <>
		{isFetched ? 
		<>
			<div className="header-wrapper">
                <div className="salonCon">Your Home Stay Room</div>
                <div className="new-service-form">
                    <p className="login-title">Add New Room</p>
                    <div className="login-hr" />
                    <form onSubmit={handleServiceSubmit}>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Upload Service Photo
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Your Service Photo"
                                onChange={(e) =>
                                    setServicePhoto(e.target.files[0])
                                }
                            />
                        </div>

                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Room Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Delux Room"
                                required
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Room Category
                            </label>
                             <Select options={options} onChange={(e) => setServiceCategory(e.value)}/>
                        </div>

                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Room Price
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="240"
                                value={serviceOriginalPrice}
                                onChange={(e) =>
                                    setServiceOriginalPrice(e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Room Discounted Price
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="150"
                                value={serviceDiscountedPrice}
                                onChange={(e) =>
                                    setServiceDiscountedPrice(e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group login-sj">
                            <label htmlFor="exampleInputBuisnessName">
                                Room Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputBuisnessName"
                                placeholder="Describe your Room"
                                required
                                value={serviceDescription}
                                onChange={(e) =>
                                    setServiceDescription(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-auth-sj btn btn-primary"
                        >
                            Add This Room
                        </button>
                    </form>
                </div>
            </div>

            <div className="servicesCatalogue grid grid-cols-1 px-4 md:px-8 mt-3 md:grid-cols-3 gap-4 md:gap-4">
                {services &&
                    services.map((service, index) => (
                        <>
                            <ServiceCard
                                key={index}
                                index={index}
                                service={service}
                                deleteServiceAtIndex={deleteServiceAtIndex}
                                editServiceAtIndex={editServiceAtIndex}
                            />
                        </>
                    ))}
            </div>

            <div className="all-done-wrapper pt-4">
                <button
                    onClick={handleAllServiceSubmit}
                    type="submit"
                    className="w-[86%] bg-green-500 hover:bg-green-600 rounded-md py-2"
                >
                    <span className="text-white font-fira text-lg">Submit these Room</span>
                </button>
            </div>

            <Footer />
			</> 
			: <><Loading/></>}
            
        </>
    );
}
