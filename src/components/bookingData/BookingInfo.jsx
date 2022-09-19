import React, { useState } from "react";
//This page is created specially for hdfc avenue
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BookingInfo = () => {
  const { id } = useParams();
  const [data, setdata] = useState();
  const [isfetched, setisfetched] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sundarabackend.azurewebsites.net/getOrderStatus/${id}`;
      const res = await axios.get(url);
      const data = res.data;
      if (data) {
        setisfetched(true);
        setdata(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-white min-h-screen min-w-[50%]  ">
        {isfetched ? (
          <table className="text-justify font-bold mt-7 ml-7 flex justify-around  flex-col">
            <tr className="mb-[6%]">
              <td>Order Bank Refrence No. :</td> {data.order_bank_ref_no}
            </tr>
            <tr className="mb-[6%]">
              <td> Order amount: </td> {data.order_amt}
            </tr>
            <tr className="mb-[6%]">
              <td> Order Card Name:</td> {data.order_card_name}
            </tr>
            <tr className="mb-[6%]">
              <td> Order Currency: </td> {data.order_currncy}
            </tr>
            <tr className="mb-[6%]">
              <td>Order Date Time :</td> {data.order_date_time}
            </tr>
            <tr className="mb-[6%]">
              <td> Order Number: </td> {data.order_no}
            </tr>
            <tr className="mb-[6%]">
              <td>Order Option Type:</td> {data.order_option_type}
            </tr>
            <tr className="mb-[6%]">
              <td>Reference Number:</td> {data.reference_no}
            </tr>
          </table>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default BookingInfo;
