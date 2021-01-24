import React from "react";
import "../style/dist/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import IconsRenderWithSpacer from "./IconsRenderWithSpacer";

interface ProjectData {
  projectData: Array<{
    id: number;
    name: string;
    details: string;
    description: string;
    imageUrl: string;
    workingTime: string;
    languages: Array<{
      id: number;
      name: string;
      icon: IconDefinition;
    }>;
    liveData?: Array<{
      id: number;
      icon: IconDefinition;
      link: string;
    }>;
  }>;
}

const ProjectCardsRender: React.FC<ProjectData> = ({ projectData }) => {
  return (
    <>
      {projectData.map((data) => {
        const {
          id,
          name,
          imageUrl,
          description,
          details,
          workingTime,
          liveData,
        } = data;
        return (
          <div className="project_container" key={id}>
            <div>
              <h3>
                {name} - {details}
              </h3>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <img
                src={`../${imageUrl}`}
                alt={name}
                height="100%"
                width="100%"
              />
              <div className="appbar">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>{workingTime}</p>

                  <h4>{description}</h4>
                  <Link
                    to="project"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p>More details</p>
                    <FontAwesomeIcon
                      className="project_details_arrow"
                      icon={faChevronRight}
                      size="sm"
                      color="#b1b5b9"
                    />
                  </Link>
                </div>

                {liveData && (
                  <div style={{ width: "40%", margin: "0 auto" }}>
                    <IconsRenderWithSpacer
                      renderIcons={liveData}
                      color={"white"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCardsRender;
