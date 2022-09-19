import "./Cancellation.scss";

import React from "react";
import TermSolo from "./TermSolo";
import Footer from "../../components/footer/Footer";

export default function Cancellation() {
    const terms = [
        {
            subTitle: "Cancellation by Business",
            subDetails: [
                {
                    title: "",
                    p: [
                        {
                            pItem: "Employee agrees to accept only that amount from customers that has been sent in details from SUNDARA LOOKS to the employee. SUNDARA LOOKS will not negotiate over the bargaining happened between the employee and the customer at all and will debit all its share of that service from the employee's account.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "Once the booking has been accepted by the employee, the employee won't be able to modify / cancel the booking further. If the employee cancels the accepted booking he/she will be chargeable under these conditions:",
                            pSubList: [],
                            pSpecialText: "",
                            chart: [
                                { timing: "24:00:00 - 23:00:00", charge: "2%" },
                                { timing: "23:00:00 – 20:00:00", charge: "5%" },
                                {
                                    timing: "20:00:00 – 16:00:00",
                                    charge: "20%",
                                },
                                {
                                    timing: "16:00:00 – 12:00:00",
                                    charge: "50%",
                                },
                                {
                                    timing: "12:00:00 – 06:00:00",
                                    charge: "70%",
                                },
                                {
                                    timing: "12:00:00 – 06:00:00",
                                    charge: "100%",
                                },
                            ],
                        },
                        {
                            pItem: "If the employee doesn't able to reach at customer's location on the given time window provided by SUNDARA LOOKS, the customer has the right to cancel the whole booking even. In this situation, SUNDARA LOOKS will not entertain any query regarding cancellation of booking. As the booking has been cancelled, the employee may have to return empty hands.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "If the employee makes the customer wait beyond the time window provided by SUNDARA LOOKS to the customer as well as employee, the customer has the right to cancel the booking",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Cancellation by User ",
            subDetails: [
                {
                    title: "",
                    p: [
                        {
                            pItem: "You can cancel the order prior to the Pending order state of the Product or within 24 hours from order placement – whichever is earlier, by logging into the website/app or by customer support. The order cannot be cancelled once the order state has been initiated.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "The request for cancellation of the order can be made by cancelling the order from the ‘My Orders’ section by using the order tracking number, or by calling our customer care number, or any other method, as may be intimated by The Company to you from time to time. ",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
    ];

	const refund = [
        {
            subTitle: "Online Payment",
            subDetails: [
                {
                    title: "",
                    p: [
                        {
                            pItem: "On the receipt of the order cancellation request, your order will be cancelled with immediate effect, and the refund process will be initiated within 48 hours of confirmation of cancellation  and will be credited to the customer account within 5-7 working days depending on the issuing bank.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
    ];

    const template = [
        {
            subTitle: "",
            subDetails: [
                {
                    title: "",
                    p: [
                        {
                            pItem: "",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <>
            <div className="t-and-c-wrapper">
                <div className="welcome-top">
                    <h2>Cancellation Policy</h2>
                </div>
                <div className="terms-container">
                    <ol className="terms-section-ol">
                        {terms.map((term) => (
                            <TermSolo term={term} />
                        ))}
                    </ol>
                    <ol className="terms-section-ol">
                        {refund.map((term) => (
                            <TermSolo term={term} />
                        ))}
                    </ol>
                </div>
            </div>
			<Footer/>
        </>
    );
}
