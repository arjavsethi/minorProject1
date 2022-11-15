import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useMediaQuery } from "react-responsive";

import "./ServiceCardBooking.scss";
import { Add } from "@material-ui/icons";
import { usePopper } from "react-popper";
import { PortalSJ } from "../portalSJ/PortalSJ";

import namiSquare from "../../assets/namiSquare.jpg";
import { FaCheck } from "react-icons/fa";
import { MdAdd, MdDelete } from "react-icons/md";

const ServiceCardBooking = ({
  index,
  service,
  deleteServiceById,
  addServiceById,
  specialists,
  bottom,
}) => {
  // console.log(service);
  const [specialistsForService, setSpecialistsForService] = useState([]);
  const [specialistSelected, setSpecialistSelected] = useState(null);
  const [specialistFinal, setSpecialistFinal] = useState(null);
  const [specialistsFetched, setSpecialistsFetched] = useState(false);
  const [specialistsPopup, setSpecialistsPopup] = useState(false);
  const [placementPosition, setPlacementPosition] = useState("right");
  const isMobile = useMediaQuery({ maxWidth: 500 });

  const [ref, setRef] = useState(null);
  const [pop, setPop] = useState(null);

  useEffect(() => {
    if (isMobile) {
      setPlacementPosition("top");
    } else {
      setPlacementPosition("right");
    }
  }, [isMobile]);

  const { styles, attributes } = usePopper(ref, pop, {
    placement: placementPosition,
  });

  // useEffect(() => {
  //   if (service && !specialistsFetched && specialistsForService.length === 0) {
  //     let specialistsArray = specialists.filter((specialist) => {
  //       return specialist.category.includes(service.category);
  //     });
  //     setSpecialistsForService(specialistsArray);
  //     setSpecialistsFetched(true);
  //   }
  // }, [service, specialists, specialistsFetched, specialistsForService]);

  const handleDelete = () => {
    setSpecialistSelected(null);
    deleteServiceById(service.serviceId);
  };

  const handleAdd = () => {
    // setSpecialistsPopup(true);
    // addServiceById(service.serviceId);
  };

  const handleFinalOut = () => {
    if (service ) {
      // setSpecialistsPopup(false);
      addServiceById(service.serviceId);
      // setSpecialistSelected(null);
    }
  };

  useEffect(() => {
    console.log(index, specialistSelected);
  }, [specialistSelected, index]);

  const SpecialistsList = () => {
    console.log(specialistsForService);
    return (
      <>
        <div className="specialists-list">
          <section className="list-top">
            <p className="specialist-list-heading">Select Your Specialist</p>
            <p
              onClick={() => setSpecialistsPopup(false)}
              className="close-list"
            >
              X
            </p>
          </section>
          {specialistsForService &&
            specialistsForService.map((specialist, index) => (
              <div
                className={`specialist-solo ${
                  specialistSelected &&
                  specialistSelected.specialistId === specialist.specialistId
                    ? "active-specialist"
                    : "null"
                }`}
                key={specialist.specialistId + index}
                onClick={() => setSpecialistSelected(specialist)}
              >
                <div className="specialist-img-wrapper">
                  {!specialist.image.url ? (
                    <img src={namiSquare} alt="" />
                  ) : (
                    <img src={specialist.image.url} alt="" />
                  )}
                </div>
                <div className="specialist-info">
                  <p className="specialist-name">{specialist.name}</p>
                  <p className="specialist-desc">{specialist.description}</p>
                </div>
                {/* <div className="specialist-select">
                                    <FaCheck className="fa-icon-pop"/>
                                </div> */}
              </div>
            ))}
          {specialistsFetched && specialistsForService.length === 0 && (
            <>
              <div className="no-specialist">
                <p className="no-specialist-text">No Specialists Available</p>
              </div>
            </>
          )}
          <section className="list-end">
            <div onClick={handleFinalOut} className="final-out">
              <FaCheck className="fa-icon-final-out" />
            </div>
          </section>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="serviceCardBooking bg-white shadow-md max-w-[300px] max-h-96 md:max-h-[25rem] rounded">
        {/* <div className="imgWrapper w-full h-3/6 overflow-hidden rounded-t">
          {service.image.url ? (
            <img
              className="cardImgTop w-full h-full object-cover object-center"
              src={service.image.url}
              alt="..."
            />
          ) : (
            <img
              className="cardImgTop w-full h-full object-cover object-center"
              src="https://res.cloudinary.com/bizupreach/image/upload/v1656350732/s5fy9adbjiffjq5qzohh.jpg"
              alt="..."
            />
          )}
        </div> */}

        <div className="cardBody h-3/6 px-4 py-4 min-h-[200px] relative">
          {/* {bottom && specialistsPopup && (
            <>
              <PortalSJ>
                <div
                  className="specialist-selection"
                  ref={setPop}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <SpecialistsList />
                </div>
              </PortalSJ>
            </>
          )} */}
          <div className="bodyTop flex justify-between items-center">
            <h5 className="cardTitle font-fira font-semibold ">
              {`${service.name}`}
            </h5>
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
            <p className="cardText font-roboto text-lg leading-5 text-black opacity-40">
              {service.description}
            </p>
          </div>

          <div className="cardButtons absolute  top-[55%]">
            {bottom ? (
              <>
                <div
                  className="w-6/12 px-[50%] bg-site-500 hover:bg-green-500 py-2.5 cursor-pointer shadow-md rounded-md flex justify-center items-center"
                  onClick={handleFinalOut}
                  ref={setRef}
                >
                  <MdAdd className="AddIcon text-white text-2xl" />
                  <span className="buttonText font-outfit text-white font-normal text-xl">
                    Add
                  </span>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={handleDelete}
                  className="w-6/12 px-[50%] bg-site-500 hover:er:bg-red-500 cursor-pointer py-2.5 shadow-md rounded-md flex justify-center items-center"
                >
                  <MdDelete className="deleteIcon text-white text-2xl" />
                  <span className="buttonText font-outfit text-white font-normal text-xl">
                    Delete
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCardBooking;
