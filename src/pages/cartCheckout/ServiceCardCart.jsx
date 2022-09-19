import React from 'react'


import DeleteIcon from "@material-ui/icons/Delete";
import { Add } from "@material-ui/icons";
import {GrLocationPin} from "react-icons/gr";

import r3 from "../../assets/r3.png";
import pfp from "../../assets/namiSquare.jpg";

export default function ServiceCardCart({service, specialist,salon, deleteOneService, addOneService, isDeleted=false}) {
	
	const handleDelete = () => {
		deleteOneService(service.serviceId);
	}
	const handleAdd = () => {
		addOneService(service.serviceId);
	}

	  return <>
		    <div className="cartCard shadow-md hover:shadow-md md:my-12 my-6 rounded md:flex bg-white mx-auto max-w-[320px] md:max-w-[80%]">
	        	<div className="cartImgWrapper md:w-[30%] w-full h-[200px] rounded overflow-hidden">
	        	    <img className="w-full h-full object-cover" src={service ? service.image && service.image.url : r3} alt="" />
	        	</div>
	        	<div className="content-cart md:w-[70%] md:justify-between md:flex p-3">
	        	    <div className="serviceData md:flex md:flex-col">
	        	        <p className="serviceHead font-bold text-xl md:text-3xl font-fira hover:text-blue-base">{service && service.name}</p>
	        	        <p className="serviceDesc md:text-xl md:ml-[2px] md:mt-2 text-gray-400 font-normal text-sm font-roboto">
	        	            {service && service.description && service.description}
	        	        </p>
	        	        <p className="salonName md:mb-2 md:mt-auto flex items-center font-semibold text-gray-900 text-lg md:text-2xl font-fira mt-2"><GrLocationPin className="text-2xl"/> {salon && salon.name}</p>
	        	    </div>
					<div className="specialist-associated relative rounded flex md:flex-col md:px-5 my-2 justify-center items-center">
						<div className="cartCardHr absolute top-0 md:top-[50px] md:-mx-1 md:left-0 -my-1 mx-auto rounded-xl opacity-5 bg-black md:w-[2px] md:h-[100px] w-[75%] h-[2px]"></div>
						<div className="specialistImgWrapper md:w-[88px] md:h-[88px] w-[50px] h-[50px] mr-4 overflow-hidden rounded-full border-white hover:border-blue-base border-4 md:border-8">
							<img className="object-cover w-full h-full" src={specialist && specialist.image ? specialist.image.url : pfp} alt="" />
						</div>
						<div className="specialistInfo">
							<p className="specialistName font-normal text-md font-fira md:text-xl md:mt-2 md:font-medium">{specialist && specialist.name}</p>
						</div>
						<div className="cartCardHr absolute top-0 md:top-[50px] md:-mx-1 md:right-0 -my-1 mx-auto rounded-xl opacity-5 bg-black md:w-[2px] md:h-[100px] w-[75%] h-[2px]"></div>
					</div>

	        	    <div className="serviceControls md:flex md:flex-col mt-2 font-fira">
						<div className="servicePricing md:items-end md:flex-col-reverse flex items-center justify-between">
							<p className="serviceId md:mt-2 font-semibold text-sm text-gray-500 md:text-lg">{service && service.serviceId}</p>
							<div className="price flex">
	        	    	        <p className="discounted mr-2 font-semibold text-blue-base text-md md:text-2xl">₹ {service && service.price && service.price.discounted}</p>
	        	    	        <p className="actual line-through font-normal text-gray-500 md:text-2xl">₹ {service && service.price && service.price.original}</p>
	        	    	    </div>
						</div>
						{isDeleted ? <>
							<div  className="delete-cart md:max-w-[160px] md:self-end md:mt-auto md:flex md:items-center text-center md:text-left md:text-2xl py-2 md:py-4 md:px-6 rounded md:rounded-lg mt-2 bg-gray-200 hover:bg-green-500 hover:text-white text-gray-500" onClick={handleAdd} >
	        	    	    <Add className="cart-delete-icon" />
	        	    	    <span className="font-semibold md:font-medium md:text-2xl">Add</span>
	        	    	</div>
						</> : <>
							<div  className="delete-cart md:max-w-[160px] md:self-end md:mt-auto md:flex md:items-center text-center md:text-left md:text-2xl py-2 md:py-4 md:px-6 rounded md:rounded-lg mt-2 bg-gray-200 hover:bg-blue-base hover:text-white text-gray-500" onClick={handleDelete}>
	        	    	    <DeleteIcon className="cart-delete-icon" />
	        	    	    <span className="font-semibold md:font-medium md:text-2xl">Delete</span>
	        	    	</div>
						</>}
	        	    	
	        	    </div>
	        	</div>
	        </div>
	  </>
}
