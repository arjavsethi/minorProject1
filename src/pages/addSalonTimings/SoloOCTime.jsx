import React, { useEffect, useState } from "react";

export const SoloOCTime = ({ type, day, index, handleTimeUpdate}) => {
	const [inputTime, setInputTime] = useState("")
	const [timeChange, setTimeChange] = useState(false)

    const handleOCChange = (e) => {
		setInputTime(e.target.value)
    };

	useEffect(() => {
		handleTimeUpdate(inputTime, type, day, index)
	}, [inputTime])

    return (
        <>
            <div className="input-solo-wrapper">
                <p className="oc-time-head">{type}</p>
                <input
                    type="time"
                    className="form-control oc-input"
                    id="exampleInputBuisnessName"
                    value={inputTime}
                    onChange={handleOCChange}
                />
            </div>
        </>
    );
};
