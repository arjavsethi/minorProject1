import "./Terms.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFirestore } from "../../hooks/useFirestore";
import { useSalon } from "../../hooks/useSalon";

import { useAuthContext } from "../../hooks/useAuthContext";
import TermSolo from "./TermSolo";
import Footer from "../../components/footer/Footer";

export default function Terms() {
    const [isAgreed, setIsAgreed] = useState(false);
	const { user } = useAuthContext();
    const { salon } = useSalon(user.uid);
    const { updateDocument } = useFirestore("salons");

    const navigate = useNavigate();

    const terms = [
        {
            subTitle: "Introduction",
            subDetails: [
                {
                    title: "Translation of Terms",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS may provide a translation of the English version of the Terms into other languages. You understand and agree that any translation of the Terms into other languages is just only for your convenience and that the English version shall govern the terms of your relationship with SUNDARA LOOKS. Furthermore, if there are any inconsistencies between the English version of the Terms and its translated version, the English version of the Terms shall prevail over others.",
                        },
                    ],
                },
                {
                    title: "Definitions",
                    p: [
                        {
                            pItem: 'For the purpose of these Terms and conditions, wherever the context so requires "YOU" or "employee" shall mean any natural or legal person who has agreed to become an employee/provider by using the App by providing Registration Data while registering on the App as a Registered user.',
                        },
                        {
                            pItem: 'The terms "We", "Us", and "Our" shall mean SUNDARA LOOKS.com',
                        },
                    ],
                },
                {
                    title: "Use of another's account",
                    p: [
                        {
                            pItem: "You may not manipulate identifiers in order to disguise the origin of nay message or transmittal you send to us on or through the App/Website or any service offered on or through the App/Website. You may not pretend that you are, or you represent, someone else, impersonate any other individual or entity or access the App through another user's account, unless you are authorized to do so.",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Obligations",
            subDetails: [
                {
                    title: "Membership Eligibility",
                    p: [
                        {
                            pItem: 'Only persons who can form legally binding contracts under Indian Contract Act, are permitted to use the App/Website. Any person who is "incompetent to contract" within the meaning of the Indian Contract Act, including minors, un-discharged insolvents etc. are not eligible to use the App/Website.',
                        },
                    ],
                },
                {
                    title: "Workers Eligibilty",
                    p: [
                        {
                            pItem: "To use the services of SUNDARA LOOKS or enter into this contract, you hereby declare and warrant that:",
                            pSubList: [
                                'All the workers working with you are of the "Minimum Age" (described below) or older.',
                                "You will only have one SUNDARA LOOKS account which must be in your real name.",
                                "You are not already restricted by SUNDARA LOOKS from using its services.",
                                'You are fully able and competent to understand and agree to the terms, conditions, obligations, affirmations, representations, and warranties set forth in this document"Terms and Conditions".',
                            ],
                            pSpecialText:
                                '"Minimum Age" is the age described according to "The Child and Adolescent Labor (Prohibition and Regulation) Act of 1986" of India.',
                        },
                        {
                            pItem: "Compliance with Laws. You are in compliance with all laws and regulations in the country in which you live when you access the SUNDARA LOOKS website or App and use its services. You agree to use the services only in compliance with these Terms and Conditions &applicable law, and in such a manner that does not violate our legal rights or those of any third party/parties.",
                        },
                    ],
                },
                {
                    title: "Responsibility for your Account",
                    p: [
                        {
                            pItem: "You will be solely responsible for the development, operation, and maintenance of your Account and for all materials that appear through your Account.",
                        },
                        {
                            pItem: "If you use the SUNDARA LOOKS platform, you shall be responsible for maintaining the confidentiality of your Account and Password and you shall be responsible for all activities that occur under your Account and Password. You agree that if you provide any information that is untrue, inaccurate, not current or incomplete, we shall have the right to indefinitely suspend or terminate or block access to your membership on the SUNDARA LOOKS. <br>You agree to",
                            pSubList: [
                                "immediately notify SUNDARA LOOKS of any unauthorized use/breach of your password or account,",
                                "ensure that you exit from your account at the end of each session.",
                            ],
                        },
                        {
                            pItem: "What types of information are not allowed on the SUNDARA LOOKS website / App through your account?",
                            pSubList: [
                                "Nudity or other sexually suggestive content",
                                "Hate speech, credible threats or direct attacks on an individual or group",
                                "Content that contains self-harm or excessive violence",
                                "Fake or impostor profiles",
                                "Spam",
                            ],
                            pSpecialText:
                                "Note: However, as effective as encryption technology is, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply won't be intercepted while being transmitted to us over the Internet. Any transmission of information by you to our SUNDARA LOOKS platform is at your own risk. We recommend that you do not disclose your password to anyone.",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: " Rights and Limits.",
            subDetails: [
                {
                    title: "Intellectual Property Rights",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS reserves all of its intellectual property rights in the services. Providing the services to the SUNDARA LOOKS customers does not give you any ownership in our services or the content or information made available through our customers. Trademarks, logos, quote, images, videos used in advertisements on the website/App are the trademarks of SUNDARA LOOKS.",
                        },
                    ],
                },
                {
                    title: "Price Modification Rights",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS reserves its right to change or modify the price of any service(s), in the Website or in the App any time without any prior notice, however in compliance with all applicable laws. All payments made against the purchases of service(s) on the Website by you shall be in the local currency of that country in which you live only. Website/App will not facilitate transaction with respect to any other form of currency with respect to the purchases/bookings made on Website/App.",
                        },
                    ],
                },
                {
                    title: "Limitations on services / bookings",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS reserves the right to limit your Services, including the number of your bookings and your ability to invite other customers. SUNDARA LOOKS reserves the right to restrict, suspend, or terminate your account if SUNDARA LOOKS believes that you may be in breach of this Contract or law or are misusing the Services (e.g. violating any Do's and Don'ts).",
                        },
                    ],
                },
                {
                    title: "Limitations on sending messages to customers",
                    p: [
                        {
                            pItem: "You agree that you will not send messages or make unwilled call to the customers:",
                            pSubList: [
                                "offering to make national or international money transfers for amounts exceeding the asking price of a service mentioned in the website / app, with intent to request a refund of any portion of the payment.",
                                "once the services have been completed.",
                            ],
                        },
                    ],
                },
                {
                    title: "No Discrimination",
                    p: [
                        {
                            pItem: "Indian laws prohibit any preference, limitation or discrimination based on race, color, religion, sex, national origin, age, handicap or other protected className. It's your sole responsibility to treat all the SUNDARA LOOKS customers impartially and provide services to them according to their booking slots.",
                        },
                    ],
                },
                {
                    title: "Posting content on website / App",
                    p: [
                        {
                            pItem: "You hereby declare that you will never post any content that is harmful, threatening, abusive, harassing, tortious, indecent, defamatory, pedophilic, blasphemous, discriminatory, vulgar, profane, obscene, libelous, hateful or otherwise objectionable, invasive of another's privacy, relating to or encouraging money laundering or gambling. SUNDARA LOOKS will not knowingly accept any Post which is in violation of the law. SUNDARA LOOKS has the right, in its sole discretion and without prior notice to you; to immediately remove any post that discriminates or is any way in violation of any law.",
                        },
                        {
                            pItem: "You agree, undertake and confirm that you shall not host, display, upload, modify, publish, transmit, update or share any information which:",
                            pSubList: [
                                "Is misleading in any way",
                                "Pertains to another person and to which you do not have any right to",
                                "Is patently offensive to the online community, such as sexually explicit content, or content that promotes obscenity, pedophilia, racism, bigotry, hatred or physical harm of any kind against any group or individual",
                                "Harasses or advocates harassments of another person",
                                'Involves the transmission of "junk mail", "chain letters", or unsolicited mass mailing or "spamming"',
                                "Promotes an illegal or unauthorized copy of another person's copyrighted work",
                                "Impersonate another person",
                                "Harm minors in any way",
                                "Violates any law for the time being in force",
                                "Impersonate another person",
                                'Contains batch files, computer viruses or any other computer code, files or program designed to interrupt, destroy or limit the functionality of any computer resource; or contains any "Trojan horses", worms, cancelbots, time bombs, easter eggs or other computer programming codes that involves infinite loop properties that may cause damage, detrimentally interfere with, diminish value of, surreptitiously intercept or expropriate any system, data or personal information',
                                "Directly or indirectly, offer, attempt to offer, trade or attempt to trade in any item, the dealing of which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force",
                            ],
                        },
                    ],
                },
                {
                    title: " Relationship",
                    p: [
                        {
                            pItem: "You and we are independent contractors, and nothing in this Agreement will create any partnership, joint venture, agency, franchise, sales representative between the you and us. You will have no authority to make or accept any offers or representations on our behalf. You will not make any statement, whether on your website/App or otherwise, that reasonably would contradict anything in this clause.",
                        },
                    ],
                },
                {
                    title: "Listing of service items",
                    p: [
                        {
                            pItem: "As a registered employee, you are allowed to list your services on the SUNDARA LOOKS platform in accordance with the Policies which are incorporated by way of reference in this Terms and Conditions. You must be legally able to provide those services you list on our website / App. You must ensure that the listed items do not infringe upon the intellectual property, trade secret or other proprietary rights or rights of publicity or privacy rights of third parties. Listings may only include text descriptions, graphics and pictures that describe your service for sale. All listed items must be listed in an appropriate category on the SUNDARA LOOKS. The listing description of the item must not be misleading. You agree not to list those services in which you are not expert in providing them to the customers on our website / App. SUNDARA LOOKS reserves the right to delete such listings of the same service listed by you in various categories. You hereby declare the approval right is reserved by SUNDARA LOOKS, which implies that none of your service will not be shown over the SUNDARA LOOKS platform until it gets approved by the Admin panel.",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Disclaimer and Limit of Liability.",
            subDetails: [
                {
                    title: "No Warranty",
                    p: [
                        {
                            pItem: "To the extent allowed under law, SUNDARA LOOKS",
                            pSubList: [
                                "Disclaim all implied warranties and representations (e.g. warranties of merchantability, fitness for a particular purpose, accuracy of data, and noninfringement)",
                                "Do not guarantee that the services will function without interruption or errors, and",
                                'Provide the service (including content and information) on an "AS IS" and "AS AVAILABLE" basis.',
                            ],
                            pSpecialText:
                                "Some laws do not allow certain disclaimers, so some or all of these disclaimers may not apply to you.",
                        },
                    ],
                },
                {
                    title: "Credit / Debit card Fraudulently",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS will not be liable for any credit/debit card fraud. The liability for use of a card fraudulently will be on you and the onus to prove otherwise shall be exclusively on you. All information collected by us shall be governed as per our Privacy Policy. SUNDARA LOOKS will not be responsible for any transactions you make for using any portion of the Service(s). All claims and complaints for any failed or incorrect transactions must be directed to our payment processing partners and/or your bank (as the case may be).",
                        },
                    ],
                },
                {
                    title: "Action on side-effects of products use",
                    p: [
                        {
                            pItem: "If the SUNDARA LOOKS's customer faces any discrepancies during the services or after the services and any side effects of the products used, the employee is solely responsible for any miss-happening. The company will not entertain any hearing neither from the customer nor from employee's side. It's advisable to employee to keep his/her mind awake while providing service.",
                        },
                    ],
                },
                {
                    title: "Disclosure of personal information",
                    p: [
                        {
                            pItem: "Disclosure of your personal information by any hacker or illegitimate source does not blameSUNDARA LOOKS directly or indirectly.",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Termination.",
            subDetails: [
                {
                    title: "Termination from services.",
                    p: [
                        {
                            pItem: "Both you and SUNDARA LOOKS may terminate this Contract at any time with notice to the other. On termination, you lose the right to access or use the Services. The following shall survive termination:",
                            pSubList: [
                                "Our rights to use and disclose your feedback",
                                "Members and/or Visitors' rights to further re-share content and information you shared through the Service to the extent copied or re-shared prior to termination;",
                                "Any amounts owed by either party prior to termination remain owed after termination.",
                            ],
                            pSpecialText:
                                "We can end this Contract anytime we want.",
                        },
                    ],
                },
                {
                    title: "Suspension of Account.",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS may suspend or terminate your use of the SUNDARA LOOKS or any Service if it believes, in its sole and absolute discretion that you have infringed, breached, violated, abused, or unethically manipulated or exploited any term of this document or anyway otherwise acted unethically. Notwithstanding anything in this clause, these terms will survive indefinitely unless and until SUNDARA LOOKS chooses to terminate them.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: " Suspension/Legal Action.",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS reserves its right to take legal action against you under such circumstances:",
                            pSubList: [
                                "If you use any program, algorithm or methodology, or any similar or equivalent manual process, to copy, or in any way reproduce or circumvent the navigational structure or presentation of the Content on the App/Website, to obtain or attempt to obtain any data or information about the App/Website or the content through any means other than those are knowingly made available through the App.",
                                "If you shall attempt to gain unauthorized access to the server, to any portion or network related to the App/Website, by hacking, or any other illegitimate means.",
                                "If you probe, scan and test the vulnerability of the App/Website or of server or breach the security or authentication measures on the App/Website.",
                                "You do not reserve look-up, tracing on any other user/employee or visitor to the App/Website.",
                                "If you make any negative, defamatory comment or statement about SUNDARA LOOKS or the domain name used by us or otherwise engage in any conduct or action that might tarnish the image or reputation of SUNDARA LOOKS or dilute any SUNDARA LOOKS's trade or service marks.",
                                "If you take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the App/Website, network or system of SUNDARA LOOKS.",
                            ],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Advertisements.",
            subDetails: [
                {
                    title: "Copyright",
                    p: [
                        {
                            pItem: "We may include your content in advertisements for the products and services of third parties to others without your separate consent (including sponsored content). However, we have the right, without payment to you or others, to serve ads near your content and information, and your social actionse.g. likes, comments, follows, shares on sponsored content and company pages may be visible, as noted in the Privacy Policy.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "All material on SUNDARA LOOKS, including images, illustrations, audio clips, and video clips, are protected by copyrights, trademarks, and other intellectual property rights. You must not copy, reproduce, republish, upload, post, transmit or distribute such material in any way, including by email or other electronic means and whether directly or indirectly and you must not assist any other person to do so. Without the prior written consent of the owner, modification of the materials, use of the materials on any other SUNDARA LOOKS or networked computer environment or use of the materials for any purpose other than personal, non-commercial use is a violation of the copyrights, trademarks and other proprietary rights, and is prohibited. Any use for which you receive any remuneration, whether in money or otherwise, is a commercial use for the purposes of this clause. It is expressly clarified that you will retain ownership of your account and shall solely be responsible for any content that you provide or upload when using any Service, including any text, data, information, images, photographs, music, sound, video or any other material which you may upload, transmit or store when making use of our various Service. However, we reserve the right to use/reproduce any content uploaded by you and you agree to grant royalty free, irrevocably, unconditionally, perpetually and worldwide right to us to use the content for reasonable business purpose.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "SUNDARA LOOKS may click photos or record audios/videos, for the purpose of commercial use over the Website/App, of SUNDARA LOOKS customers while receiving services, with the acknowledgement of customers. Such kind of recorded/clicked material/content are solely authorized for SUNDARA LOOKS. SUNDARA LOOKS may also ask you to click photos or record audios/videos, under this situation all the content/material is solely SUNDARA LOOKS's property. You hereby declare that neither you will record/click audios/videos/photos for your commercial use nor will claim any copyright over such content/material.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Fees and Payments.",
            subDetails: [
                {
                    title: "Registration Fees",
                    p: [
                        {
                            pItem: "Absolutely zero. SUNDARA LOOKS does not charge any amount for signing up process. However, SUNDARA LOOKS reserves the right to charge subscription and/or membership fees for a new subscription, by giving reasonable prior notice, in respect of any service or any other aspect of the SUNDARA LOOKS Platform anytime in future.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Charges for Advertisements",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS does not demand any charge for featuring you on our Website/App. We will charge for any publicity and advertisements from you on our website/app. To know more about the subscription and registration process read the above point carefully.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Payments",
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
                {
                    title: "Taxation",
                    p: [
                        {
                            pItem: "All the SUNDARA LOOKS services works under the law of Indian Government, all the services are bound under the Financial act of Indian Government. Currently, SUNDARA LOOKS follows GST-introduced as The Constitution (One hundred and first amendment) Act 2017, following the passage of Constitution 122nd amendment bill. All the rates will be applicable as per GST.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Pricing",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS holds all of its right in deciding the price of each and every service uploaded by you through your account on any of the SUNDARA LOOKS platform, you agree that you will not interfere in any pricing and incentive schemes. However, your base price will be retained throughout the whole contract.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "In case of home appointments, all the prices shown on the SUNDARA LOOKS platform already includes the travelling charges, you are not supposed to collect any amount from the customer/user claiming the travelling/waiting charges.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Dispute resolutions.",
            subDetails: [
                {
                    title: "Redressal of Grievance",
                    p: [
                        {
                            pItem: "Sending a request in writing or through email signed with electronic signature identifying the content alleged to be in infringement of your rights as the rightful owner or affecting you prejudicially",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "Providing your contact information including email, address, and telephone number where you can be contacted if required.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "Giving a declaration cum undertaking along with necessary documents establishing you:",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "as the rightful owner of the content to be disabled/affecting you prejudicially,",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "as an affected person, stating that the information submitted is true, complete & accurate and no material fact has been hidden, and alsostating that SUNDARA LOOKS, its Affiliates, Directors, employees, including Grievance Officer shall not be liable for any loss or damage or claim for relaying on such requests",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "You may forward your request / complaints to Grievance Officer.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "Contact: Email: grievance.officer@SUNDARA LOOKS.com",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Governing Law and Jurisdiction",
                    p: [
                        {
                            pItem: "If a dispute arises regarding these terms of use, the laws of the Republic of India will apply and shall be subject to the exclusive jurisdiction of courts in New Delhi, India.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Indemnity.",
            subDetails: [
                {
                    title: "Quid pro quo",
                    p: [
                        {
                            pItem: "You shall indemnify and hold harmless SUNDARA LOOKS, its owner, licensee, affiliates, subsidiaries, group companies (as applicable) and their respective officers, directors, agents, and workers, from any claim or demand, or actions including reasonable attorneys' fees, made by any third party or penalty imposed due to or arising out of Your breach of this Terms of Conditions, privacy Policy and other Policies, or Your violation of any law, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "General Terms.",
            subDetails: [
                {
                    title: " Important points",
                    p: [
                        {
                            pItem: "If a court with authority over this Contract finds any part of it not enforceable, you and we agree that the court should modify the terms to make that part enforceable while still achieving its intent. If the court cannot do that, you and we agree to ask the court to remove that unenforceable part and still enforce the rest of this Contract. To the extent allowed by law, the English language version of this Contract is binding and other translations are for convenience only. This Contract (including additional terms that may be provided by us when you engage with a feature of the Services and during offers and incentive schemes) is the only agreement between us regarding the Services and supersedes all prior agreements for the Services.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "If we don't act to enforce a breach of this Contract, that does not mean that SUNDARA LOOKS has waived its right to enforce this Contract. You may not assign or transfer this Contract (or your membership or use of Services) to anyone without our consent. However, you agree that SUNDARA LOOKS may assign this Contract to its affiliates or a party that buys it without your consent. There are no third-party beneficiaries to this Contract.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                        {
                            pItem: "You agree that the only way to provide us legal notice is at the Electronic addresses provided. It's your responsibility to legally proceed further only after you get the received message for your legal notice.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: " Incentive programs",
                    p: [
                        {
                            pItem: "SUNDARA LOOKS may from time to time introduce referral and/or incentive based programs for you and its users / customers. These program(s) maybe governed by their respective terms and conditions. By participating in those programs, you are bound by the program terms and conditions as well as the SUNDARA LOOKS Platform terms. Further, SUNDARA LOOKS reserves the right to terminate/suspend yours account and/or credits/points earned and/or participation in the program if SUNDARA LOOKS determines in its sole discretion that the you have violated the rules of the program and/or has been involved in activities that are in contravention of the program terms and/or SUNDARA LOOKS platform terms or has engaged in activities which are fraudulent/unlawful in nature. Furthermore, SUNDARA LOOKS reserves the right to modify, cancel and discontinue its program without any prior notices.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Changes to the terms",
                    p: [
                        {
                            pItem: "We reserve the right to amend the terms of this Contract from time to time entirely at its own discretion, however we will provide you a notification if we do and we agree that changes cannot be retroactive. You shall be responsible for checking these Terms from time to time and ensure continued compliance with these Terms. Your use of SUNDARA LOOKS Website/App after such amendment in the Terms shall be deemed as your express acceptance to such amended terms; if you don't agree to these changes, you must stop using the Services.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: 'SUNDARA LOOKS "Dos" and "Don\'ts"',
            subDetails: [
                {
                    title: "Information security",
                    p: [
                        {
                            pItem: "We are committed to safeguard the security and confidentiality of any information you provide to us. We understand that you accept the inherent security implications of providing information over the internet or world wide web and will not hold us responsible for any breach of security or disclosure of personal information. If you become aware of any violation of the security of data or the Agreement, please contact us immediately.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Financial Information",
                    p: [
                        {
                            pItem: "We receive credit/ debit card details including card number and expiry date in encrypted form, details for net banking services and Wallet services. Please be advised that SUNDARA LOOKS ensures the highest degree of data security, while encrypting as per the guidelines specified by (PCI DSS) Payment Cards Industry Data Security Standard.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: " Account History",
                    p: [
                        {
                            pItem: "Your account history with us including (without limitation) all billing information and communications, payment history etc. We maintain this in encrypted form on secure servers. However, your transactions details may be preserved by SUNDARA LOOKS for purposes of tax or regulatory compliance.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "Neutrality",
                    p: [
                        {
                            pItem: "User/customer reviews or ratings for your service and(or) parlor/salon/spa do not reflect the opinion of SUNDARA LOOKS. SUNDARA LOOKS receives multiple reviews or ratings for parlor/salon/spa by users/customers, which reflect the opinions of the users. It is pertinent to state that each and every review posted on Website/App is the personal opinion of the user/customer/reviewer only. SUNDARA LOOKS is a neutral platform, which solely provides a means of communication between users/customer/reviewers including users or parlor's/salon's/spa's owners/representatives with access to the parlor/salon/spa business page. The advertisements published on the SUNDARA LOOKS Platform are independent of the reviews received by such advertisers. We are a neutral platform and we don't arbitrate disputes, however in case if someone writes a review that the parlor/salon/spa does not consider to be true, the best option for the restaurant representative would be to contact the reviewer or post a public response in order to clear up any misunderstandings. If the parlor/salon/spa believes that any particular user's review violates any of the SUNDARA LOOKS's policies, the parlor/salon/spa may write to us at neutrality@SUNDARA LOOKS.com and bring such violation to our attention. SUNDARA LOOKS may remove the review in its sole discretion if review is in violation of the Terms, or content guidelines and policies or otherwise harmful to the services.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
            ],
        },
        {
            subTitle: "Complaints",
            subDetails: [
                {
                    title: "Investigation",
                    p: [
                        {
                            pItem: "If SUNDARA LOOKS made aware of your problematic behavior with the customers, we may contact you for investigation. Depending upon the nature of concern, SUNDARA LOOKS may put a hold on your membership account.",
                            pSubList: [],
                            pSpecialText: "",
                        },
                    ],
                },
                {
                    title: "How to contact us",
                    p: [
                        {
                            pItem: "When you use the App/Website or send emails or other data, information or communication to us, you agree and understand that you are communication with us through electronic records and you consent to receive communications via electronic records from us periodically and as and when required. We may communicate with you by email or by such other mode of communication, electronic or otherwise.",
                            pSubList: [],
                            pSpecialText:
                                "You may leave your message at contact us feature/request a quote in the App/Website.",
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

	const handleCheckChange = (e) => {
		setIsAgreed(e.target.checked);
	}

    const handleSubmit = (e) => {
        e.preventDefault();

		if(isAgreed){
			updateDocument(
				{
					agreed: isAgreed
				},
				salon.id
			);
			return navigate(`/profile/${user.uid}`);
		} else {
			alert("You cannot continue Further")
		}
    };

    return (
        <>
            <div className="form-wrapper tnc-form-wrapper">
                <>
                    <div id="login-form">
					<div className="top-wrapper-tnc">
					<p className="login-title">Agreement Form</p>
                        <div className="login-hr tnc-hr" />
					</div>
                        
                        <div className="t-and-c-wrapper">
                            <div className="welcome-top">
                                <h2>Welcome</h2>
                                <p>
                                    Welcome to SUNDARA LOOKS. This document is
                                    an electronic record in terms of the
                                    Information Technology Act, 2000 and
                                    published in accordance with the provisions
                                    of Rule 3) of the Information Technology
                                    (Intermediaries guidelines) Rules, 2011
                                    requires publishing the rules and
                                    regulations, privacy policy and Terms and
                                    Conditions of Use for access or usage of
                                    SUNDARA LOOKS platform.
                                    <br />
                                    <br />
                                    Your use of the App/Website and the
                                    underlying services and tools offered
                                    through the App/Website are subject to and
                                    governed by the following terms and
                                    conditions including the applicable policies
                                    which are incorporated herein by way of
                                    reference. If you transact on the
                                    App/Website, you shall be subject to the
                                    policies that are applicable to the App for
                                    such transactions.
                                    <br />
                                    <br />
                                    USING OR OTHERWISE ACCESSING THE APP/WEBSITE
                                    INDICATES YOUR AGREEMENT TO ALL THE TERMS
                                    AND CONDITIONS UNDER THESE TERMS OF USE, SO
                                    PLEASE READ THE TERMS AND CONDITIONS
                                    CAREFULLY BEFORE PROCEEDING.
                                    <br />
                                </p>
                            </div>
                            <div className="terms-container">
                                <ol className="terms-section-ol">
                                    {terms.map((term) => (
                                        <TermSolo term={term} />
                                    ))}
                                </ol>
                            </div>
                        </div>
						<div className="login-hr tnc-hr bottom-hr" />

                        <form onSubmit={handleSubmit}>
                            <div className="form-check tnc-div-wrapper">
                                <input
                                    className="form-check-input input-tnc-check"
                                    type="checkbox"
                                    id="flexCheckDefault"
									required
									onChange={handleCheckChange}
                                />
                                <label
                                    className="form-check-label label-tnc-check"
                                    htmlFor="flexCheckDefault"
                                >
									By clicking here, I state that I have read
                                    and understood the terms and conditions.I
                                    agree to the terms and conditions as set out
                                    by the user agreement.
                                </label>
                            </div>
							

                            <button
                                type="submit"
                                className="btn-auth-sj btn btn-primary tnc-button"
                            >
                                Agree and Continue
                            </button>
                        </form>
                    </div>
                </>
            </div>

            <Footer />
        </>
    );
}
