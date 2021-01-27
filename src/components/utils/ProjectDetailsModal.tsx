import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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

interface Languages {
  id: number;
  name: string;
  icon: IconDefinition;
  link: string;
}

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  projectMoreDetails: {
    languages?: Array<Languages>;
    detailedDescription: string;
  };
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
      <button onClick={closeModal}>close</button>
      <div>{projectMoreDetails.detailedDescription}</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default ProjectDetailsModal;
