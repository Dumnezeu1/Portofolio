import React from "react";
import "../style/dist/Home.css";

import { brandIcons, mobileProjects, webProjects } from "../config";

import IconsRenderWithSpacer from "../utils/IconsRenderWithSpacer";

import ProjectCardsRender from "../utils/ProjectCardsRender";

const Home: React.FC = () => {
  return (
    <div className="container">
      <section style={{ minHeight: "100vh" }}>
        <div className="hero_container">
          <p className="developer">Developer</p>
          <div className="about_me">
            <h1>Website and mobile developer</h1>
            <p>
              I am specialized in front-end development with react on web and
              react-native on mobile but i can do back-end too.
            </p>
            <div style={{ width: 260, margin: "0 auto" }}>
              <IconsRenderWithSpacer renderIcons={brandIcons} />
            </div>
          </div>
        </div>
      </section>

      <section className="projects_section">
        <h2>Mobile projects</h2>
        <div className="projects_container">
          <ProjectCardsRender projectData={mobileProjects} />
        </div>
      </section>
      <section className="projects_section">
        <h2>Web projects</h2>
        <div className="projects_container">
          <ProjectCardsRender projectData={webProjects} />
        </div>
      </section>
    </div>
  );
};

export default Home;

/* <button style={{ marginLeft: "auto", flexDirection: "row" }}>
<p style={{ fontSize: 20 }}>Web projects</p>
<FontAwesomeIcon
  icon={faChevronRight}
  size="lg"
  color="#b1b5b9"
  className="arrowAnimation"
/>
</button> */
