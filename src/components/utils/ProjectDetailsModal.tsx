import React, { useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80vh",
    width: "90%",
    zIndex: 1,
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#modal");

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  projectMoreDetails: {
    name: string;
    role: string;
    features: string;
    languages: string;
    detailedDescription: string;
  } | null;
}

const ProjectDetailsModal: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
  projectMoreDetails,
}) => {
  useEffect(() => {
    if (modalIsOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Project Details Modal"
      closeTimeoutMS={200}
    >
      <button
        style={{
          float: "right",
          border: "none",
          backgroundColor: "transparent",
        }}
        onClick={closeModal}
      >
        <FontAwesomeIcon
          className="project_details_arrow"
          icon={faTimes}
          size="2x"
          color="black"
        />
      </button>
      <div>
        <h1>{projectMoreDetails?.name}</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "90%",
        }}
      >
        <div className="project-details-left">
          <div className="proiect-details-aside-container">
            <h3>My role: </h3>
            <p>{projectMoreDetails?.role}</p>
          </div>
          <div className="proiect-details-aside-container">
            <h3>Application features: </h3>
            <p>{projectMoreDetails?.features}</p>
          </div>
          <div className="proiect-details-aside-container">
            <h3>Technologies: </h3>
            <p>{projectMoreDetails?.languages} </p>
          </div>
        </div>
        <div className="project-details-right">
          <div>
            <h2>Description</h2>
            <p>{projectMoreDetails?.detailedDescription}</p>
          </div>
          <div>
            <p>Da</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
