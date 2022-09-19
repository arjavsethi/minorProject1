import React, { useState } from "react";
import { SoloOCTime } from "./SoloOCTime";

export const SoloDayTimings = ({day,index,handleDayTimeUpdate}) => {

	const handleTimeUpdate = (inputTime,type, day, index) => {
		handleDayTimeUpdate(inputTime,type,day,index)
	}

    return (
        <>
            <div className="form-group login-sj">
                <label className="day-label-head">{day} Timings</label>
                <div className="inputs-wrapper">
					<SoloOCTime type="Open" day={day} index={index} handleTimeUpdate={handleTimeUpdate}/>
					<SoloOCTime type="Close" day={day} index={index} handleTimeUpdate={handleTimeUpdate} />
                </div>
            </div>
        </>
    );
};
