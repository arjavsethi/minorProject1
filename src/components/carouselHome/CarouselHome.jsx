import React from "react";
import c1 from "../../assets/carousel-home/c1.jpg";
import c2 from "../../assets/carousel-home/c2.jpg";
import c3 from "../../assets/carousel-home/c3.jpg";
import c4 from "../../assets/carousel-home/c4.jpg";
import c5 from "../../assets/carousel-home/c5.jpg";
import c6 from "../../assets/carousel-home/c6.jpg";
import c7 from "../../assets/carousel-home/c7.jpg";

import { Carousel } from "react-bootstrap";

import "./CarouselHome.scss";

const CarouselHome = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    let srcArray = [c1, c2, c3, c4, c5, c6];

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c1}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
				<Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c2}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
				<Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c3}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
				<Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c4}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
				<Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c5}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
				<Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c6}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
				<Carousel.Item>
                    <div className="carousel-img-wrapper">
                        <img
                            className="d-block w-100 "
                            src={c7}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CarouselHome;
