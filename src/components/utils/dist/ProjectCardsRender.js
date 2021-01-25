"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../style/dist/Home.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ProjectDetailsModal_1 = require("./ProjectDetailsModal");
var IconsRenderWithSpacer_1 = require("./IconsRenderWithSpacer");
var ProjectCardsRender = function (_a) {
    var projectData = _a.projectData;
    var _b = react_1["default"].useState(false), modalIsOpen = _b[0], setIsOpen = _b[1];
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null, projectData.map(function (data) {
        var id = data.id, name = data.name, imageUrl = data.imageUrl, description = data.description, details = data.details, workingTime = data.workingTime, liveData = data.liveData, projectMoreDetails = data.projectMoreDetails;
        return (react_1["default"].createElement("div", { className: "project_container", key: id },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", null,
                    name,
                    " - ",
                    details)),
            react_1["default"].createElement("div", { style: { flex: 1, position: "relative" } },
                react_1["default"].createElement("img", { src: "../" + imageUrl, alt: name, height: "100%", width: "100%" }),
                react_1["default"].createElement("div", { className: "appbar" },
                    react_1["default"].createElement("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        } },
                        react_1["default"].createElement("p", null, workingTime),
                        react_1["default"].createElement("h4", null, description),
                        react_1["default"].createElement("div", { onClick: openModal, style: { display: "flex", alignItems: "center" } },
                            react_1["default"].createElement("p", null, "More details"),
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "project_details_arrow", icon: free_solid_svg_icons_1.faChevronRight, size: "sm", color: "#b1b5b9" }))),
                    liveData && (react_1["default"].createElement("div", { style: { width: "40%", margin: "0 auto" } },
                        react_1["default"].createElement(IconsRenderWithSpacer_1["default"], { renderIcons: liveData, color: "white" }))))),
            react_1["default"].createElement(ProjectDetailsModal_1["default"], { modalIsOpen: modalIsOpen, closeModal: closeModal, projectMoreDetails: projectMoreDetails })));
    })));
};
exports["default"] = ProjectCardsRender;
