"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_modal_1 = require("react-modal");
var customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        height: "70vh",
        width: "70vh",
        zIndex: 1
    }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
react_modal_1["default"].setAppElement("#modal");
var ProjectDetailsModal = function (_a) {
    var modalIsOpen = _a.modalIsOpen, closeModal = _a.closeModal, projectMoreDetails = _a.projectMoreDetails;
    react_1.useEffect(function () {
        if (modalIsOpen)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "unset";
    }, [modalIsOpen]);
    return (react_1["default"].createElement(react_modal_1["default"], { isOpen: modalIsOpen, onRequestClose: closeModal, style: customStyles, contentLabel: "Project Details Modal" },
        react_1["default"].createElement("button", { onClick: closeModal }, "close"),
        react_1["default"].createElement("div", null, projectMoreDetails.detailedDescription),
        react_1["default"].createElement("form", null,
            react_1["default"].createElement("input", null),
            react_1["default"].createElement("button", null, "tab navigation"),
            react_1["default"].createElement("button", null, "stays"),
            react_1["default"].createElement("button", null, "inside"),
            react_1["default"].createElement("button", null, "the modal"))));
};
exports["default"] = ProjectDetailsModal;
