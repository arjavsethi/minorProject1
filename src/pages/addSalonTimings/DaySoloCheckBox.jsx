import React from "react";

export const DaySoloCheckBox = ({day, handleCheckBoxChange}) => {
    return (
        <>
            <div className="timings-solo-daily">
                <div className="form-check form-switch div-sj">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={day}
                        onChange={handleCheckBoxChange}
                    />
                </div>
                <p>{day}</p>
            </div>
        </>
    );
};
