import React from "react";
import ReactDOM from "react-dom";
import "./ModalSJ.scss";

export const ModalSJ = ({
    custom = false,
    children,
    closeModal,
    isOpen,
    closeOption = true,
}) => {
    const handleClose = () => {
        closeModal();
    };

    if (isOpen) {
        return ReactDOM.createPortal(
            <>
                {custom ? (
                    <>
                        <div className="modal-bg custom">
                        	<div className="modal-children">{children}</div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </>,
            document.getElementById("modal")
        );
    } else {
        return null;
    }
};

// {/* <>
//                 <button
//                     onClick={() => setModalShow(true)}
//                     className="btn btn-primary"
//                 >
//                     Open Modal
//                 </button>
//                 <Modal
//                     isOpen={modalShow}
//                     closeModal={() => setModalShow(false)}
//                 >
//                     <button
//                         className="btn btn-danger"
//                         onClick={() => console.log("Clicked Inside")}
//                     >
//                         Hey I am children
//                     </button>
//                 </Modal>
//             </> */}
