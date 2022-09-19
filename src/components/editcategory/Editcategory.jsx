import React from "react";
import "./Editcategory.scss";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

const Editcategory = (props) => {
    return (
        <>
            <div className="galCon">
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
                            <p>Category Name</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Hair Cut"
                            />

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

export default Editcategory;
