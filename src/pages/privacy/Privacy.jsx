import "./Privacy.scss";

import React from "react";
import TermSolo from "./TermSolo";
import Footer from "../../components/footer/Footer";

export default function Privacy() {
    const privacyTop = [
        {
            pItem: " We view protection of your privacy as a very important principle. We understand clearly that you and your Personal Information is one of our most important assets. We store and process your Information including any sensitive financial information collected as defined under the Information Technology Act, 2000 and Rules there under. We may share personal information with our other corporate entities and affiliates.",
        },
        {
            pItem: "Please note that we may disclose information about you to third parties or government authorities if we believe that such a disclosure is reasonably necessary to:",
            pSubList: [
                "take actions regarding suspected illegal activities",
                "enforce or apply our Terms and Conditions",
                "comply with legal process or other government inquiry, such as a search warrant, subpoena, statute, judicial proceeding, or other legal process/notice served on us",
                "protect our rights, reputation, and property, or that of our users, affiliates, or the general public.",
            ],
        },
        {
            pItem: "We and our affiliates will share/sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. We have developed this Privacy Policy to protect Your personal/financial information and keep it confidential. By visiting Our SUNDARA LOOKS platform, you are accepting and consenting to the practices described in this Privacy Policies. The following Privacy Policy and Cookie Policy outlines the information we may process and how we may use that information to better serve you while using our SUNDARA LOOKS platform.",
        },
        {
            pItem: "Third Party. At times we may tie-up with third parties, brand owners or other partners and make available certain offers, incentives or events or special schemes. In such instances, your personal information may be shared with such third parties and/or may become available to them or be disclosed to them, such third parties may have their own applicable privacy rules and We shall not be liable for the use or misuse of Your information by such third parties.",
            pSpecialText:
                "Note: We only collect your Personal Information to conduct our business and to enable us to deliver and improve our services. We do not for any reason whatsoever sell your Correspondence Information to any third party.",
        },
    ];

    const sundaraCollects = {
        title: "SUNDARA LOOKS collects:",
        subList: [
            "Data provided by users to SUNDARA LOOKS, such as during account creation, validating account's login/authentication",
            "Data created during use of our services, such as location, app usage, and device data",
            "Data from other sources, such as SUNDARA LOOKS partners",
        ],
    };

    const personalDataBlock = [
        {
            pTitle: "Personal Data",
            pItem: "Personal Data we may collect from you are as under:",
            pSubList: [
                "Personal details (e.g. name, contact details including, residential address, date of birth, documents such as identity card / passport details / Aadhaar details / PAN / Voter ID / driving license, and/or education details) provided by you to us to avail various products/services from us.",
                "Your details including transaction history, balances, payment details, for effecting transfer of monies through various payment channels provided by us.",
                "financial details (e.g. income, expenses, and/or credit history) needed as part of request for some of our products/services",
                " images of documents/ photos required to avail any of our products/services.",
                "voice recordings of our conversations with our customer care agent with you to address your queries/grievances",
                " employment details (e.g. occupation, positions held, employment history, salary and/or benefits) as part of our record retention for credit/various product evaluations or required under applicable law including Prevention of Money Laundering (Maintenance of Records) Rules, 2005",
                "specimen signature(s) for processing of your instructions received by us through our various payment and delivery channels",
                "opinions provided by you to us by way of feedback or responses to surveys",
                "",
            ],
        },
        {
            pTitle: "Sharing of your Personal Data",
            pItem: "Any Personal Data that we have access to shall never be shared.In various processes / submission of applications / availment of product/service offerings, we even seek your explicit consent to use / share your Personal Data. In our business and operational processes, we only share the data on a partial and “need-to-know” basis to designated personnel or partners or service providers. We will share your data with competent/ legal/statutory/regulatory agencies / authorities or partners/service providers acting on our behalf (as the case may be) in following cases:",
            pSubList: [
                " only for enabling the provision of the products/services availed by you, strictly on a “need to know” basis and subject to applicable laws.",
                "it is directed or required by legal/regulatory / statutory / governmental authorities under applicable laws/regulations though a legally obligated request",
                " it is required by financial institutions to verify, mitigate or prevent fraud or to manage risk or recover funds in accordance with applicable laws/regulations",
            ],
        },
        {
            pTitle: "Usage of Your Personal Data",
            pItem: "We use your Personal Data in our business activities for providing our or our partners’ products/services and to perform, among other actions, the following:",
            pSubList: [
                "to facilitate the transactions or report on these transactions",
                " to undertake research and analytics for offering or improving our products/services and their security and service quality",
                "to check and process your requirements submitted to us for products/services and/or instructions or requests received from you in respect of these products/services",
                "to share with you, updates on changes to the products/services and their terms and conditions",
                " to take up or investigate any complaints/claims/disputes",
                "to respond to your queries or feedback submitted by you",
                "to verify your identity for us to provide products/services to you",
                " to carry credit checks, screenings or due diligence checks as lawfully required by us;",
                "to monitor and review products/services from time to time",
                "to undertake financial/regulatory/management reporting, and create and maintain various risk management models",
                "for conducting audits and for record keeping purposes",
                "for selective offers and promotions.",
            ],
            pSubNote:
                "External processing: We may provide your personal information to our affiliates or other trusted businesses or persons or service providers engaged by us, or institutions that we partner with to assist us with providing you with products/services to better serve your needs and interests, based on your instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures. We also use your Personal Data to fulfill the requirements of applicable laws/regulations and/or court orders/regulatory directives received by us.",
        },
        {
            pTitle: "Purging of your Personal Data",
            pItem: "",
            pSubList: [
                "You may delete your SUNDARA LOOKS account at any point of time by making such choice in the SUNDARA LOOKS’s desktop website, mobile WAP site or mobile application. With this we will no longer provide your data for external processing as mentioned above. However, we retain your Personal Data as long as the purpose for its usage exists, after which the same is disposed off by us except for any record retention required as per applicable law.",
                "The provisions of various laws require your transaction logs to be stored for longer periods post the deletion of an account. Further, in the event of the pendency of any legal/regulatory proceeding or receipt of any legal and/or regulatory direction to that effect, we may be required by the law of the land to retain your Personal Data for longer periods.",
            ],
            pSubSublist: [
                {
                    subTitle: "Transparency & Choices for users",
                    subText:
                        "We enable our users to access and control the data that we collects, from their device:",
                    subSubList: [
                        "Device permissions",
                        "In-app settings",
                        "In-app ratings pages",
                    ],
                },
            ],
        },
        {
            pTitle: "Cookie Policy",
            pItem: "",
            pSubList: [
                "Please note that a “cookie” is a small piece of information stored by a web server on a web browser so it can be later read back from that browser.",
                "We may use cookie and tracking technology depending on the features offered.",
                "No Personal Data will be collected via cookies and other tracking technology; however, if you previously provided Personal Data, cookies may be tied to such information.",
            ],
        },
        {
            pTitle: "Links to other websites",
            pItem: "Our website may contain links to other websites which are not maintained by us. This privacy policy only applies to us. You are requested to read the other websites’ privacy policies when visiting these websites.",
            pSubList: [],
        },
        {
            pTitle: "Reasonable Security Practices and Procedures",
            pItem: "We take various steps and measures to protect the security of your Personal Data from misuse, loss, unauthorised access, modification or disclosure. We use latest secure server layers encryption and access control on our systems. Our safety and security processes are audited by a third party cyber security audit agency from time to time. <br> We have provided multiple levels of security to safeguard your app by Login/Logout option and AppLock feature that can be enabled by you. We also ensure the device binding so that the same login cannot be used on different device without any additional authentication/OTP. Please do not share your SUNDARA LOOKS login, password and OTP details with anybody.",
            pSubList: [],
        },
        {
            pTitle: "Contact us",
            pItem: "You may contact us on any aspect of this policy or for any discrepancies/grievances with respect to your Personal Data, by writing to our Grievance Officer at SUNDARA LOOKS Private Ltd., at email: contact@sundaralooks.com",
            pSubList: [],
        },
        {
            pTitle: "Policy Review & Updates",
            pItem: "This policy will be reviewed by us as and when required and the same may change at any time. The latest & most updated policy can always be found at https://SUNDARA LOOKS.com/privacy <br>While we will make reasonable efforts to keep you posted on any updates to this privacy policy, to make sure that you are aware of any changes, we recommend that you review this policy periodically.<br> This Privacy Policy is applicable uniformly to SUNDARA LOOKS’s desktop website, mobile WAP site & mobile applications<br>In this policy, the words “we”, “ours” and/or “us” refer to SUNDARA LOOKS Private Limited and “you” and/or “your” refer to our customers/salon partners/users/merchants.",
            pSubList: [],
        },
    ];

    const how = {
        pTitle: "How do we use this information?",
        pPara: "We use the information that we have (subject to choices you make) as described below, and to provide and support the SUNDARA LOOKS Products and related services described in the SUNDARA LOOKS Terms and Conditions. Here's how: Provide, personalise and improve our Products. We use the information we have to deliver our Products, including to personalise features and content (including recently trending stylist in your area, List Feed, offers and ads) and make suggestions for you (such as groups or events that you may be interested in or stylists/salons/trends/users that you may want to follow) on and off SUNDARA LOOKS. To create personalised Products that are unique and relevant to you, we use your contacts, preferences, interests and activities based on the data that we collect and learn from you and others (including any data with special protections you choose to provide) while you explore services on SUNDARA LOOKS App. We map you contact informations to validate your contact details to authenticate for our Products & to verify the right user of your SUNDARA LOOKS Accounts. Information across SUNDARA LOOKS Products and devices: We connect information about your activities on different SUNDARA LOOKS Products and devices to provide a more tailored and consistent experience on all SUNDARA LOOKS Products that you use, wherever you use them. For example, we can suggest that you make a booking on SUNDARA LOOKS that includes people you follow on SUNDARA LOOKS. We can also make your experience more seamless, for example, by automatically filling in your registration information (such as your phone number) from one SUNDARA LOOKS Product when you sign up for an account on a different Product. Location-related information: We use location-related information – such as your current location, where you live, the places you like to go, and the businesses and people you're near – to provide, personalise and improve our Products, including ads, for you and others. Location-related information can be based on things such as precise device location (if you've allowed us to collect it), IP addresses and information from your and others' use of SUNDARA LOOKS Products (such as check-ins or events you attend)",
        pSubList: [
            {
                pSubTitle: "Product research and development:",
                pSubText:
                    "We use the information we have to develop, test and improve our Products, including by conducting surveys and research, and testing and troubleshooting new products and features.",
            },
            {
                pSubTitle:
                    "Provide measurement, analytics and other business services.",
                pSubText:
                    "We use the information we have (including your activity off our Products, such as the websites you visit and ads you see) to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services. Learn how we share information with these partners.",
            },
            {
                pSubTitle: "Promote safety, integrity and security.",
                pSubText:
                    "We use the information that we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our Products, and promote safety and security on and off SUNDARA LOOKS Products. For example, we use data that we have to investigate suspicious activity or breaches of our Terms or Policies, or to detect when someone needs help. To learn more, visit the SUNDARA LOOKS Security Help Centre.",
            },
            {
                pSubTitle: "Communicate with you.",
                pSubText:
                    "We use the information that we have to send you marketing communications, communicate with you about our Products and let you know about our Policies and Terms. We also use your information to respond to you when you contact us. Research and innovate for social good. We use the information we have (including from research partners we collaborate with) to conduct and support research and innovation on topics of general social welfare, technological advancement, public interest, health and well-being. For example, we analyse information that we have about migration patterns during crises to aid relief efforts. Learn more about our research programmes.",
            },
        ],
    };

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
                    <h2>Privacy Policy</h2>
                </div>
                <div className="terms-container">
                    <ol className="terms-section-ol">
                        <>
                            <li>
                                <ul>
                                    {privacyTop.map((privacy) => (
                                        <>
                                            <li>
                                                <p>{privacy.pItem}</p>
                                                <ol>
                                                    {privacy.pSubList &&
                                                        privacy.pSubList.map(
                                                            (sub) => (
                                                                <>
                                                                    <li>
                                                                        {sub}
                                                                    </li>
                                                                </>
                                                            )
                                                        )}
                                                </ol>
                                            </li>
                                            {privacy.pSpecialText && (
                                                <>
                                                    <p className="spacial-note">
                                                        {privacy.pSpecialText}
                                                    </p>
                                                </>
                                            )}
                                        </>
                                    ))}
                                </ul>
                            </li>
                        </>
                    </ol>
                    <ul className="sundara-collects">
                        <p>{sundaraCollects.title}</p>
                        {sundaraCollects.subList.map((sub) => (
                            <>
                                <li>{sub}</li>
                            </>
                        ))}
                    </ul>

                    <ol>
                        {personalDataBlock.map((personal) => (
                            <>
                                <li>
                                    <h6>{personal.pTitle}</h6>
                                    {personal.pItem && (
                                        <>
                                            <p>{personal.pItem}</p>
                                        </>
                                    )}

                                    <ol>
                                        {personal.pSubList &&
                                            personal.pSubList.map((sub) => (
                                                <>
                                                    <li>{sub}</li>
                                                </>
                                            ))}
                                        {personal.pSubSublist &&
                                            personal.pSubSublist.map(
                                                (subList) => (
                                                    <>
                                                        <p>
                                                            {subList.subTitle}
                                                        </p>
                                                        <p>{subList.subText}</p>
                                                        <ul>
                                                            {subList.subSubList.map(
                                                                (sub) => (
                                                                    <>
                                                                        <li>
                                                                            {
                                                                                sub
                                                                            }
                                                                        </li>
                                                                    </>
                                                                )
                                                            )}
                                                        </ul>
                                                    </>
                                                )
                                            )}
                                    </ol>
                                </li>
                            </>
                        ))}
                    </ol>
                </div>
            </div>
			<Footer/>
        </>
    );
}
