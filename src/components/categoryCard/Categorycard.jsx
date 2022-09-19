import React, { useState } from "react";
import "./categorycard.scss";
import Editcategory from "../editcategory/Editcategory";

const Categorycard = (props) => {
    const [cat, setcat] = useState(false);
    return (
        <>
            <div className="categoryCard">
                <img src={props.img} alt="" />
                <p>{props.title}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setcat(true)}
                >
                    Edit
                </button>
                <button className="btn btn-dark">Delete</button>
            </div>
            {cat ? <Editcategory fun={setcat} img={props.img} /> : null}
        </>
    );
};

export default Categorycard;
