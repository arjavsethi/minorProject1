import React from 'react'
import './card.scss'

import s1 from '../../assets/s1.png'
import { useNavigate } from 'react-router'

const Card = ({name, owner,sId}) => {

	let navigate = useNavigate()

  return (
      <div
          className="container  CardContanier"
          onClick={() => navigate(`../salon/${sId}`, { replace: true })}
      >
          <div className="row">
              <div className="col-lg-6 col-xl-6">
                  <img src={s1} alt="" />
              </div>
              <div className="col-lg-6 col-xl-6">
                  <h4>{name}</h4>
                  <p>{owner.name}</p>
                  <p>{sId}</p>
                  <p>Salon Description</p>
              </div>
          </div>
      </div>
  );
}

export default Card