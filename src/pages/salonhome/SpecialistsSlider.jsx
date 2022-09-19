import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import styles from "./ServicesSlider.module.scss";

import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import SpecialistCardDisplay from "../../components/specialistCardDisplay/SpecialistCardDisplay";

export const SpecialistsSlider = ({ array}) => {
    const navOptions = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    };

	const getRandomNumber = () => {
		let num = Math.floor(Math.random()*10000000000);
		return num
	}

    let tempCardData = {
        name: "Faux Hawk",
        description:
            "It is a long established fact that a re3ader will be distracted by thee readable cotnent of a page when looking",
        price: {
            discounted: "₹150",
            original: "₹250",
        },
        image: {
            url: "https://res.cloudinary.com/bizupreach/image/upload/v1653482934/sundara/men1_rfvr8s.png",
            publicId: "men1_rfvr8s",
        },
    };
    return (
        <>
            <div className={styles.servicesSliderWrapper}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                    loop="true"
                    speed={800}
                    slidesPerView={1}
                    className="swiper-parent"
                >
                    {array.map((arrayElement, index) => (
                        <>
                            <SwiperSlide key={getRandomNumber()} className="swiper-slider">
                                <SpecialistCardDisplay specialist={arrayElement} />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
