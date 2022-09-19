import "./UserFlow.scss"

import React from 'react'
import UserTypeCard from "./UserTypeCard";

import { useLocation, useNavigate } from "react-router";

export default function UserFlow() {

	const navigate = useNavigate()

	const location = useLocation()
	const queryString = location.search
	const queryParams = new URLSearchParams(queryString)



	console.log(queryParams.get('click-type'))

	const handleClick = (cardType) => {
		navigate(
            `/auth?user-type=${cardType}&click-type=${queryParams.get(
                "click-type"
            )}`
        );

	}
  return (
      <div className="user-type-cards-wrapper">
          <UserTypeCard
              title="For Everyone"
              desc="Book Salons and spas near you"
			  cardType="customer"
              handleClick={handleClick}
          />
          <UserTypeCard
              title="For Buisness"
              desc="Manage and grow your Buisness"
              cardType="buisness"
              handleClick={handleClick}
          />
      </div>
  );
}
