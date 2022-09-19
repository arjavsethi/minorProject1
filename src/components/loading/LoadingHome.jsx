import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import sundara from "../../assets/img1.png";

export default function LoadingHome({authIsReady}) {
    // const [show, setShow] = useState(!authIsReady);

	// useEffect(() => {
	// 	setShow(!authIsReady)
	// },[authIsReady])

    const showAnimation = {
        hidden: {
            opacity: 0,
			duration: "1s"
        },
        show: {
            opacity: 1,
			duration: "1s"
        },
    };

    return (
        <>
            <AnimatePresence>
                {!authIsReady && (
                    <motion.div
                        variants={showAnimation}
                        initial="show"
                        animate="show"
                        exit="hidden"
                        className="flex z-10 absolute top-0 left-0 items-start justify-center w-screen h-screen md:items-center loading-page bg-blue-sundara"
                    >
                        <div className=" mt-6 md:-mt-20 min-w-[300px] max-w-[320px] min-h-[400px] max-h-[520px] p-3 text-center flex flex-col bg-white rounded-md shadow-sm sm:max-w-[300px] sm:max-h-min loading-card">
                            <div className="overflow-hidden mt-4 w-full rounded-md loading-img-wrapper">
                                <img
                                    className="object-cover w-full -translate-x-1"
                                    src={sundara}
                                    alt=""
                                />
                            </div>
                            <div className="grid w-12 grid-cols-2 gap-1 mx-auto mt-auto mb-14 scale-[2] justify-items-center loading-animation">
                                <div className="w-5 h-5 bg-blue-200 animate-[wave_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                                <div className="w-5 h-5 bg-blue-200 animate-[wave2_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                                <div className="w-5 h-5 bg-blue-200 animate-[wave3_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                                <div className="w-5 h-5 bg-blue-200 animate-[wave4_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
