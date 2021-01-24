import React from "react";
import "../style/dist/About.css";

import { educationData, experienceData } from "../config";

import ListDataWithDetails from "../utils/ListDataWithDetails";

const About: React.FC = () => {
  return (
    <div>
      <section className="projects_section">
        <h2>Experience</h2>
        <ListDataWithDetails listData={experienceData} />
      </section>
      <section className="projects_section">
        <h2>Education</h2>
        <ListDataWithDetails listData={educationData} />
      </section>
    </div>
  );
};

export default About;
