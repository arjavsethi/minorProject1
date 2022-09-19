import React, { useState } from "react";
import "./salonwomen.scss";

import Editservices from "../editservices/Editservices";

const Salonwomen = (props) => {
    const [edt, setedt] = useState(false);

    return (
        <>
            <div
                className="card Womencard"
                style={{ width: "18rem", display: "inline-block" }}
            >
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.data}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setedt(true);
                        }}
                    >
                        edit
                    </button>
                    <button className="btn btn-dark">delete</button>

                    {edt ? <Editservices fun={setedt} img={props.img} /> : null}
                </div>
            </div>
        </>
    );
};

export default Salonwomen;
