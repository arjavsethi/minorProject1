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
import ServiceCardDisplay from "../../components/serviceCardDisplay/ServiceCardDisplay";

export const ServicesSlider = ({ array }) => {
    const navOptions = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    };

    const getRandomNumber = () => {
        let num = Math.floor(Math.random() * 10000000000);
        return num;
    };

    return (
        <>
            <>
                <div className={styles.servicesSliderWrapper}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop="true"
                        speed={800}
                        slidesPerView={1}
                        className="swiper-parent-slider"
                    >
                        {array.map((arrayElement, index) => (
                            <>
                                <SwiperSlide
                                    key={getRandomNumber()}
                                    className="swiper-slider"
                                >
                                    <ServiceCardDisplay
                                        service={arrayElement}
                                    />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                </div>
            </>
        </>
    );
};
