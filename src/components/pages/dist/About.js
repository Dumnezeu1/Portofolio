"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../style/dist/About.css");
var config_1 = require("../config");
var ListDataWithDetails_1 = require("../utils/ListDataWithDetails");
var About = function () {
    react_1.useEffect(function () {
        window.scrollTo(0, 0);
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("section", { className: "projects_section" },
            react_1["default"].createElement("h2", null, "Experience"),
            react_1["default"].createElement(ListDataWithDetails_1["default"], { listData: config_1.experienceData })),
        react_1["default"].createElement("section", { className: "projects_section" },
            react_1["default"].createElement("h2", null, "Education"),
            react_1["default"].createElement(ListDataWithDetails_1["default"], { listData: config_1.educationData }))));
};
exports["default"] = About;
