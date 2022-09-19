import React from 'react'
import { ArrowForward } from "@material-ui/icons";

export default function UserTypeCard({title, desc, cardType, handleClick}) {
  return (
      <div className={`cursor-pointer type-card ${cardType ? cardType : null}`} onClick={() => handleClick(cardType)}>
          <div className="text-content">
              <h3>{title}</h3>
              <p>{desc}</p>
          </div>
          <div className="icon-container">
              <ArrowForward className="icon-arrow-forward" />
          </div>
      </div>
  );
}
