import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";

import Footer from "../../components/footer/Footer";
import { Modal } from "../../components/modalSJ/ModalSJ";
import "./profile.scss";

import { useAuthContext } from "../../hooks/useAuthContext";
import { auth } from "../../firebase/config";

import profile from "../../assets/profilePerson.jpg";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";

import LockIcon from "@material-ui/icons/Lock";
import Editprofile from "../../components/editprofile/Editprofile";
import Bookhistory from "../../components/booking_history/Bookhistory";
import { useNavigate, useParams } from "react-router";
import { useLogout } from "../../hooks/useLogout";
import { useUser } from "../../hooks/useUser";

import { UpdateProfilePhoto } from "./UpdateProfilePhoto";
import { Button } from "react-bootstrap";

import { useUpdateProfilePhoto } from "../../hooks/useUpdateProfilePhoto";
import BookingData from "../../components/bookingData/BookingData";
import { ModalSJ } from "../../components/modalSJ/ModalSJ";
import { FaUser } from "react-icons/fa";
// import { FooterMini } from "../../components/footerMini/FooterMini";

const Profile = () => {
  const { user: userContext } = useAuthContext();
  const { updateProfilePhoto } = useUpdateProfilePhoto(userContext);

  const { userId } = useParams();
  const { user } = useUser(userId);

  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [passEmail, setPassEmail] = useState(userContext.email);
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const [book, setBook] = useState(true);
  const [term, setTerm] = useState(false);
  const [policy, setPolicy] = useState(false);

  const [show, setShow] = useState(false);

  const { logout } = useLogout();
  let navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    return navigate("/");
  };

  if (user) {
    console.log(user);
  }

  const sendEmail = () => {
    sendPasswordResetEmail(auth, passEmail)
      .then(() => {
        setEmailSent(true);
        console.log("sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEmailSent(false);
        return { errorCode, errorMessage };
      });

    setTimeout(() => {
      setModalShow(false);
    }, 5000);
  };

  const handleChangePass = () => {
    setModalShow(true);
    sendEmail();
  };

  const ChangePasswordModal = () => {
    // setEmailSubmit(true);

    return (
      <>
        <ModalSJ isOpen={modalShow} closeOption={false}>
          <div className="change-pass-modal">
            {/* {!emailSubmit ? <> */}
            {/* <section className="list-end">
                            <div onClick={() => setModalShow(false)} className="final-out cancel">
                                <ImCross className="fa-icon-final-out " />
                            </div>
                            <div onClick={handleFinalOut} className="final-out">
                                <FaCheck className="fa-icon-final-out" />
                            </div>
                        </section> */}
            {/* </> : <> */}
            {/* {emailSent &&  */}
            <>
              <h2>
                Password Reset email have been sent to our email. You can reset
                it from there, soon the popup will close
              </h2>
            </>
            {/* } */}
            {/* </> } */}
          </div>
        </ModalSJ>
      </>
    );
  };

  return (
    <>
      {user && (
        <>
          <ChangePasswordModal />
          <Editprofile show={edit} fun={setEdit} />
          <div className="proCon"></div>
          <div className="container proData">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 data">
                {user && user.profileImage ? (
                  <div className="w-24 h-24 img-profile-data ">
                    <div className="w-full h-full img-wrapper-data">
                      <img
                        className="object-cover w-full h-full rounded-full border-[5px] border-white"
                        src={user.profileImage && user.profileImage.url}
                        alt="..."
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-24 h-24 img-profile-data ">
                    <div className="w-full h-full img-wrapper-data">
                      {/* <FaUser className="object-cover min-h-full w-full rounded-full border-[5px] border-white"/> */}
                      <img
                        className="object-cover w-full rounded-full border-[5px] border-white"
                        src={profile}
                        alt="..."
                      />
                    </div>
                  </div>
                )}
                {/* {user && (
                                    <div className="p">
                                        <span className="text-xl font-fira">{user.name}</span> <br />
                                        <span className="text-neutral-600" id="id">{user.email}</span> <br />
                                        <span className="text-neutral-400 capitalize" id="id">{user.type}</span> <br />
                                        <button
                                            id="change"
                                            onClick={handleChangePass}
                                            className="bg-none cursor-pointer"
                                        >
                                            <LockIcon fontSize="small" /> Change
                                            password
                                        </button>
                                    </div>
                                )} */}

                {userContext && userContext.uid === user.uid && (
                  <>
                    <Button
                      className="ml-4 bg-blue-500 cursor-pointer"
                      variant="primary"
                      id="updatePhoto"
                      onClick={() => setShow(true)}
                    >
                      Update Profile Photo
                    </Button>
                    <UpdateProfilePhoto
                      show={show}
                      closeModal={() => setShow(false)}
                    />
                  </>
                )}
              </div>
              {userContext &&
                user &&
                userContext.uid === user.uid &&
                user.type &&
                user.type === "customer" && (
                  <>
                    <div className="cursor-pointer col-xl-6 col-lg-6 col-md-6 edit">
                      <button
                        onClick={handleLogout}
                        className="btn btn-primary"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}
            </div>
          </div>

          {userContext && user && userContext.uid === user.uid && (
            <>
              <BookingData userContext={userContext} />
            </>
          )}
        </>
      )}

      {/* <Footer /> */}
      {/* <FooterMini/> */}
    </>
  );
};

export default Profile;
