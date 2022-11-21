import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./SalonsNearby.scss";
import Loading from "../../components/loading/Loading";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import r5 from "../../assets/r5.png";
import star from "../../assets/star.png";
import girl from "../../assets/girl.jpeg";
import locationIcon from "../../assets/locationIcon.png";
import { SalonCard } from "./SalonCard";
import { useAllSalons } from "../../hooks/useAllSalons";

import useCustomerAddress from "../../hooks/useCustomerAddress";

export default function SalonsNearby() {
  const { salons } = useAllSalons();
  const [salonsArray, setSalonsArray] = useState([]);
  const [salonsSortedArray, setSalonsSortedArray] = useState([]);
  const [salonsArrayFilled, setSalonsArrayFilled] = useState(false);

  const [salonTypeMen, setSalonTypeMen] = useState(false);
  const [salonTypeWomen, setSalonTypeWomen] = useState(false);
  const [salonTypeUnisex, setSalonTypeUnisex] = useState(false);
  const [salonCity, setSalonCity] = useState(null);
  const [salonService, setSalonService] = useState("");

  const [noGender, setNoGender] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  //Geoloacation

  const CustomerAddress = useCustomerAddress();
  console.log(CustomerAddress);
  console.log(salons);
  // console.log(salons[0].address.pincode);

  //this function sorts  salonsArray on the basis of pincode of customer and salon

  const handleTypeCheckboxChange = (e) => {
    switch (e.target.value) {
      case "Men":
        setSalonTypeMen(e.target.checked);
        break;
      case "Women":
        setSalonTypeWomen(e.target.checked);
        break;
      case "Unisex":
        setSalonTypeUnisex(e.target.checked);
        break;
      default:
        break;
    }
  };

  // let trialSalons = [
  // 	{name : "Niharika",type: "Men", city:"Jabalpur"},
  // 	{name : "Payal" , type : "Women", city:"Bhopal"},
  // 	{name : "Adi" , type : "Women", city:"Indore"},
  // 	{name : "Kahira" , type : "Unisex", city:"Bhopal"},
  // 	{name : "Sakru" , type : "Unisex", city:"Jabalpur"},
  // 	{name : "Saki Saki" , type : "Men", city:"Indore"},
  // ]
  const sortedSallonarrayFunc = () => {};
  useEffect(() => {
    if (CustomerAddress) {
      // setSalonCity(CustomerAddress.city); //uncomment in production
    }
    if (salonsArrayFilled && CustomerAddress != null) {
      const customerPincode = CustomerAddress.postalCode;
      const customerCity = CustomerAddress.city;

      let array1 = salons.filter((salon) => {
        if (salon.address.city.toLowerCase() === customerCity.toLowerCase()) {
          return salon;
        }
      });
      setSalonsSortedArray(array1);
      console.log(salonsSortedArray);
    }
  }, [CustomerAddress, salonsArrayFilled]);

  useEffect(() => {
    if (salons && !salonsArrayFilled) {
      let array = salons.filter((salon) => {
        return salon;
      });
      //   console.log("Filtered :", array);
      setSalonsArray(array);
      setSalonsArrayFilled(true);
      setIsFetched(true);
    }
    //Code for adding saloon city as placeholder

    // console.log(salonTypeMen, salonTypeWomen, salonTypeUnisex);
    // console.log(salons);
    // console.log("Array");
    // console.log(salonsArray);
  }, [
    salonTypeMen,
    salonTypeWomen,
    salonTypeUnisex,
    salons,
    salonsArray,
    salonCity,
    salonsArrayFilled,
  ]);

  const handleFilterApply = () => {
    if (!salonTypeMen && !salonTypeWomen && !salonTypeUnisex && !salonCity) {
      setNoGender(true);
      setSalonsArray(salons);
      return;
    }
    if (salonTypeMen || salonTypeWomen || salonTypeUnisex) {
      setNoGender(false);
    }

    let arrayMen = salonTypeMen
      ? salons.filter((salon) => salon.type === "Men")
      : [];
    let arrayWomen = salonTypeWomen
      ? salons.filter((salon) => salon.type === "Women")
      : [];
    let arrayUnisex = salonTypeUnisex
      ? salons.filter((salon) => salon.type === "Unisex")
      : [];
    let filteredByGender = [...arrayMen, ...arrayWomen, ...arrayUnisex];

    console.log(_.lowerCase(salonCity));
    let arrayByCity = salonCity
      ? salons.filter(
          (salon) => _.lowerCase(salon.city) === _.lowerCase(salonCity)
        )
      : [];

    let filteredSalons = [...arrayByCity, ...filteredByGender];
    let arraySet = [...new Set(filteredSalons)];

    console.log(
      "Trial Filter",
      arrayMen,
      arrayWomen,
      arrayUnisex,
      "By City: ",
      arrayByCity,
      arraySet
    );

    console.log("Filtered :", arraySet);
    setSalonsArray(arraySet);
  };
console.log(salonsArray)
  return (
    <>
      {isFetched ? (
        <>
          <div className="nearby-page-wrapper">
            {/* <div className="filters-sidebar">
              <div className="filter-head">
                <p className="login-title">Filters</p>
                <div className="login-hr hr-filter" />
              </div>
              <div className="filter-body">
                <div className="type-wrapper">
                  <h6>Salon Type</h6>
                  <div className="type-input-wrapper">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        value="Men"
                        onChange={handleTypeCheckboxChange}
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Men
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        value="Women"
                        onChange={handleTypeCheckboxChange}
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Women
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        value="Unisex"
                        onChange={handleTypeCheckboxChange}
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Unisex
                      </label>
                    </div>
                  </div>
                </div>
                {noGender && (
                  <p className="my-2 text-red-400 text-md no-gender">
                    *Please select a salon type
                  </p>
                )}
                <div className="city-input-wrapper">
                  <div className="form-group login-sj">
                    <label htmlFor="exampleInputBuisnessName">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputBuisnessName"
                      placeholder="Your desired city"
                      required
                      value={salonCity}
                      onChange={(e) => setSalonCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="service-input-wrapper">
                  <div className="form-group login-sj">
                    <label htmlFor="exampleInputBuisnessName">
                      Service Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputBuisnessName"
                      placeholder="Service Category"
                      required
                      value={salonService}
                      onChange={(e) => setSalonService(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="cursor-pointer apply-filters btn btn-success"
                  onClick={handleFilterApply}
                >
                  Apply
                </button>
              </div>
            </div> */}

            <div className="salon-nearby-page-wrapper">
              {salonsArray.length > 0 ? (
                <>
                  {salonsArray.map((salon, index) => (
                    <>
                      <SalonCard key={index} salon={salon} />
                    </>
                  ))}
                </>
              ) : (
                <>
                  {salonsArray?.map((salon, index) => (
                    <>
                      <SalonCard key={index} salon={salon} />
                    </>
                  ))}
                </>
              )}

              {/* {salonsArray.length > 0 && (
            <>
              {salonsArray.map((salon, index) => (
                <>
                  <SalonCard key={index} salon={salon} />
                </>
              ))}
            </>
          )} */}

              {/* {salonsArray.length > 0 ? <>
						{salonsArray.map((salon, index) => (
                            <>
                                <SalonCard key={index} salon={salon} />
                            </>
                        ))}
					</> : salons && <>
					{salons.map((salon, index) => (
                            <>
                                <SalonCard key={index} salon={salon} />
                            </>
                        ))}
					</>} */}
            </div>
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
