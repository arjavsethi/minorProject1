import React, { useState } from "react";
import "./Gallerycard.scss";

import EditIcon from "@material-ui/icons/Edit";
import Editgallery from "../editgallery/Editgallery";

const Gallerycard = (props) => {
    const [gall, setgall] = useState(false);

    return (
        <>
            <>
                <div className="galleryCard">
                    <button className="btn btc" onClick={() => setgall(true)}>
                        <EditIcon />
                    </button>
                    <img id="img1" src={props.img} alt="" />
                    <p className="p1">{props.title}</p>

                    {gall ? (
                        <Editgallery fun={setgall} img={props.img} />
                    ) : null}
                </div>
            </>
        </>
    );
};

export default Gallerycard;
