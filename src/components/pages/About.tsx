import React, { useEffect } from "react";
import "../style/About.css";

import { educationData, experienceData } from "../config";

import ListDataWithDetails from "../utils/ListDataWithDetails";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
