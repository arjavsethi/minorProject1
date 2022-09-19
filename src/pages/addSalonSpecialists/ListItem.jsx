import React from "react";

export default function ListItem({service,index, handleSubService}) {
    return (
        <li
            className="cursor-pointer list-item-custom"
            key={index}
            onClick={() => handleSubService(index)}
        >
            {service}
        </li>
    );
}
