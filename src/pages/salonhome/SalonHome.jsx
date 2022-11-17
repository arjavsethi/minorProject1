import "./salonHome.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useComment } from "../../hooks/useComment";
import { useGetComments } from "../../hooks/useGetComments";
import { useSingleDoc } from "../../hooks/useSingleDoc";

import locationIcon from "../../assets/locationIcon.png";
import star from "../../assets/star.png";
import girl from "../../assets/girl.jpeg";

import Loading from "../../components/loading/Loading";
import Footer from "../../components/footer/Footer";
import Comment from "./Comment";
import banner2 from "../../assets/banner2.png";
import profile from "../../assets/profile.png";
import location from "../../assets/location.png";
import image from "../../assets/image.jpg";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import { ServicesSlider } from "./ServicesSlider";
import { SpecialistsSlider } from "./SpecialistsSlider";
import Booking from "../booking/Booking";

const SalonHome = () => {
  const { salonId } = useParams();
  const { user } = useAuthContext();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3);
  const { addComment } = useComment();
  const { getComments } = useGetComments(salonId);
  let navigate = useNavigate();

  const [salonFromDB, setSalonFromDB] = useState("");

  const [infoShow, setInfoShow] = useState(false);
  const { document: salon } = useSingleDoc("salons", salonId);
  var salonAddress = salon ? salon.address : "No Address Specified";

  useEffect(() => {
    const fetchComments = async () => {
      const resArr = await getComments();
      setComments(resArr);
    };

    if (salon) {
      console.log(salon);
    }
    // if(user && salon){
    // 	console.log(salon.owner.uid, user.uid);
    // }

    // fetchComments();
  }, [getComments, salon]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    let commentInput = {
      commentedBy: user.uid,
      salonId: salonId,
      comment: comment,
      rating: rating,
    };
    // addComment(commentInput);
  };

  return (
    <>
      {salon ? (
        <>
          <div className="salonHome">
            <div className="header-two">
              {/* <div className="banner-salonHome"></div> */}
              <div className="btnCon">
                <button
                  className={`button-salon-home cursor-pointer ${
                    infoShow ? "active-tab-salon" : null
                  }`}
                  onClick={() => setInfoShow(true)}
                >
                  Home Stay Details
                </button>
                {/* {user ? ( */}
                <>
                  <button
                    className={` button-salon-home cursor-pointer ${
                      !infoShow ? "active-tab-salon" : null
                    }`}
                    onClick={
                      () => setInfoShow(false)
                      // navigate(
                      //     `/salon/${salon.id}/booking`
                      // )
                    }
                  >
                    Book Room
                  </button>
                </>
                {/* ) : (
                                    <>
                                        <button
                                            className="button-salon-home disabled"
                                            onClick={() =>
                                                navigate(
                                                    `/salon/${salon.id}/booking`
                                                )
                                            }
                                            disabled
                                        >
                                            Book Appointment
                                        </button>
                                    </>
                                )} */}

                {/* {salon && user && salon.owner.uid === user.uid && (
                                    <>
                                        <button
                                            className="button-salon-home"
                                            onClick={() =>
                                                navigate(`addEditSalonDetails`)
                                            }
                                        >
                                            Add/Edit Details
                                        </button>
                                    </>
                                )} */}
              </div>
            </div>

            <div className="mainData container-fluid">
              {infoShow ? (
                <>
                  <div className="row">
                    <div className="col-lx-8 col-lg-8 salonData white-bg-con">
                      {/* <div className="swiper-salon-wrapper">
                        <Swiper
                          modules={[Pagination]}
                          pagination
                          speed={800}
                          slidesPerView={1}
                          className="swiper-parent"
                        >
                          <SwiperSlide className="swiper-slider">
                            <img src={r2} alt="" />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slider">
                            <img src={r3} alt="" />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slider">
                            <img src={r4} alt="" />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slider">
                            <img src={r5} alt="" />
                          </SwiperSlide>
                        </Swiper>
                      </div> */}
                      <div className="salon-home-page salon-name">
                        {salon.name}
                      </div>
                      <div className="address-wrapper">
                        <div className="icon-wrapper">
                          <img src={locationIcon} alt="" />
                        </div>
                        <p className="address-text">
                          {/* 204, Shaitaan Gali, Shaamsham Ghat Ke
                                piche,Mastana,Jabalpur */}
                          {salon.address.city},{salon.address.state}
                        </p>
                      </div>
                      <div className="hr-home" />
                      <div className="data-mid-wrapper">
                        <div className="profileSection">
                          <div className="salon-home-owner owner-salon-home">
                            <img src={girl} alt="" />
                          </div>
                          <div className="owner-text-wrapper">
                            <h6>{salon.owner.name}</h6>
                            <p>{salon.owner.email}</p>
                          </div>
                        </div>
                        <div className="review-stars-wrapper">
                          <div className="review-star-img-wrapper">
                            <img src={star} alt="" />
                          </div>
                          <div className="review-star-img-wrapper">
                            <img src={star} alt="" />
                          </div>
                          <div className="review-star-img-wrapper">
                            <img src={star} alt="" />
                          </div>
                          <div className="review-star-img-wrapper">
                            <img src={star} alt="" />
                          </div>
                          <div className="review-star-img-wrapper">
                            <img src={star} alt="" />
                          </div>
                          <p className="review-text-star-number salon-reviews">
                            (4)
                          </p>
                        </div>
                        <div className="review-container">
                          <div className="review-text-content">
                            <p className="review-text-total">65 reviews</p>
                          </div>
                        </div>
                      </div>

                      <div className="hr-home" />
                      <div className="about-salon">
                        <h6>About Home Stay</h6>
                        <div className="login-hr salon-home-hr" />
                        <p id="datas" className="salon-description">
                          {salon.description}
                        </p>
                      </div>

                      <div className="hr-home" />

                      <div className="salon-data-bottom">
                        {salon?.services && (
                          <>
                            <div className="specialists-slider-wrapper temp-div">
                              <ServicesSlider array={salon.services} />
                            </div>
                          </>
                        )}
                        {salon?.specialists && (
                          <>
                            <div className="specialists-slider-wrapper temp-div">
                              <SpecialistsSlider array={salon.specialists} />
                            </div>
                          </>
                        )}
                      </div>

                      <div className="location">
                        <p>Location</p>
                        <img src={location} alt="" />
                      </div>
                    </div>
                    <div className="col-lx-4 col-lg-4 commentSection ">
                      <div className="salonHome-divider" />

                      <div className="salonTime white-bg-con">
                        <h4>Home Stay Office Timing</h4>
                        {/* <div className="gd margin-correction">
                          <div>Monday To Friday</div> */}
                        {/* <div className="tts">
                                            {salon.timings.weekDays.startTime} -{" "}
                                            {salon.timings.weekDays.endTime}
                                        </div> */}
                        {/* </div> */}
                        {/* <div className="gd margin-correction">
                          <div>WeekEnds</div>
                          {/* <div className="tts"> */}
                        {/* {salon.timings.weekEnd.startTime} -{" "}
                                            {salon.timings.weekEnd.endTime}
                                        </div> */}
                        {/* </div> */}

                        {/* new  */}
                        <ul>
                          <li>
                            Monday :
                            {salon.timinigsArray[0].isOpen
                              ? `${salon.timinigsArray[0].openTime.hrs}:
                            ${salon.timinigsArray[0].openTime.mins}-
                            ${salon.timinigsArray[0].closeTime.hrs}:
                            ${salon.timinigsArray[0].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                          <li>
                            Tuesday :
                            {salon.timinigsArray[1].isOpen
                              ? `${salon.timinigsArray[1].openTime.hrs}:
                            ${salon.timinigsArray[1].openTime.mins}-
                            ${salon.timinigsArray[1].closeTime.hrs}:
                            ${salon.timinigsArray[1].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                          <li>
                            Wednsesday:
                            {salon.timinigsArray[2].isOpen
                              ? `${salon.timinigsArray[2].openTime.hrs}:
                            ${salon.timinigsArray[2].openTime.mins}-
                            ${salon.timinigsArray[2].closeTime.hrs}:
                            ${salon.timinigsArray[2].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                          <li>
                            Thursday:
                            {salon.timinigsArray[3].isOpen
                              ? `${salon.timinigsArray[3].openTime.hrs}:
                            ${salon.timinigsArray[3].openTime.mins}-
                            ${salon.timinigsArray[3].closeTime.hrs}:
                            ${salon.timinigsArray[3].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                          <li>
                            Friday:
                            {salon.timinigsArray[4].isOpen
                              ? `${salon.timinigsArray[4].openTime.hrs}:
                            ${salon.timinigsArray[4].openTime.mins}-
                            ${salon.timinigsArray[4].closeTime.hrs}:
                            ${salon.timinigsArray[4].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                          <li>
                            Saturday:
                            {salon.timinigsArray[5].isOpen
                              ? `${salon.timinigsArray[5].openTime.hrs}:
                            ${salon.timinigsArray[5].openTime.mins}-
                            ${salon.timinigsArray[5].closeTime.hrs}:
                            ${salon.timinigsArray[5].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                          <li>
                            Sunday:
                            {salon.timinigsArray[6].isOpen
                              ? `${salon.timinigsArray[6].openTime.hrs}:
                            ${salon.timinigsArray[6].openTime.mins}-
                            ${salon.timinigsArray[6].closeTime.hrs}:
                            ${salon.timinigsArray[6].closeTime.mins} hrs`
                              : "closed"}
                          </li>
                        </ul>
                      </div>

                      <div className="comments white-bg-con">
                        <p id="head">Reviews</p>
                        {/* {comments &&
                                        comments.map((comment, index) => (
                                            <Comment
                                                key={index}
                                                userId={comment.commentedBy}
                                                commentText={comment.comment}
                                                commentedAt={
                                                    comment.commentedAt
                                                }
                                            />
                                        ))} */}
                      </div>

                      <form onSubmit={handleCommentSubmit}>
                        <div className="Addcomment white-bg-con">
                          <p>Write A Review</p>
                          <textarea
                            name=""
                            id=""
                            cols="32"
                            rows="5"
                            placeholder="Type Comments...."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                          <button className="btn">Post Review</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Booking />
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default SalonHome;
