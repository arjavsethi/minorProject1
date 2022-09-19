import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import loading from "../../assets/loading.jpg";


export default function LoadingBookSlot({errorText,}) {

    return (
        <>
			<div className="flex items-start justify-center w-screen h-screen md:items-center loading-page bg-blue-sundara">
                <div className=" mt-6 md:-mt-20 max-w-[320px] min-h-[400px] max-h-[520px] p-3 text-center bg-white rounded-md shadow-sm sm:max-w-[300px] sm:max-h-min loading-card">
                    <div className="overflow-hidden rounded-md loading-img-wrapper">
                        <img src={loading} alt="" />
                    </div>
                    <p className="font-semibold text-2xl font-outfit my-2.5 qoute-text ">
                        " This is a new day,<br />a new beginning"
                    </p>
                    <div className="grid w-12 grid-cols-2 gap-1 mx-auto mt-8 justify-items-center loading-animation">
                        <div className="w-5 h-5 bg-blue-200 animate-[wave_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                        <div className="w-5 h-5 bg-blue-200 animate-[wave2_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                        <div className="w-5 h-5 bg-blue-200 animate-[wave3_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                        <div className="w-5 h-5 bg-blue-200 animate-[wave4_2s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite] loading-box"></div>
                    </div>
					<p className="px-6 mt-2 font-medium loading-text font-outfit">
                        Please wait while we configure your booking. You will be redirected to the payment gateway...
                    </p>
                </div>
            </div>            
        </>
    );
}
