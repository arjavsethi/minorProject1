import React from "react";
import "./Editspecialist.scss";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

const Editspecialist = (props) => {
    return (
        <>
            <div className="specCon">
                <button className="cancel" onClick={() => props.fun(false)}>
                    X
                </button>
                <div className="container-fluid editdata">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 imgsection">
                            <img src={props.img} alt="" />
                            <input type="file" name="" id="file" />
                        </div>
                        <div className="col-xl-6 col-lg-6 data">
                            <div className="conatiner price">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Specialist Name</p>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder="400"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <p>Specialist Work Area</p>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder="90"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text">About Specialist</p>
                            <textarea
                                name=""
                                id=""
                                cols="48"
                                rows="3"
                            ></textarea>

                            <div>
                                <button className="btn btn-primary">
                                    <SaveIcon fontSize="small" /> Save
                                </button>
                                <button className="btn btn-dark">
                                    <DeleteIcon fontSize="small" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Editspecialist;
