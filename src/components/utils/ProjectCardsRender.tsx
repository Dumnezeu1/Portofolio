import React from "react";
import "../style/dist/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProjectDetailModal from "./ProjectDetailsModal";

import IconsRenderWithSpacer from "./IconsRenderWithSpacer";

interface LiveData {
  id: number;
  icon: IconDefinition;
  link: string;
}

interface Languages {
  id: number;
  name: string;
  icon: IconDefinition;
  link: string;
}

interface ProjectData {
  projectData: Array<{
    id: number;
    name: string;
    details: string;
    description: string;
    imageUrl: string;
    workingTime: string;

    liveData?: Array<LiveData>;
    projectMoreDetails: {
      languages?: Array<Languages>;
      detailedDescription: string;
    };
  }>;
}

const ProjectCardsRender: React.FC<ProjectData> = ({ projectData }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          projectMoreDetails,
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
                  <div
                    onClick={openModal}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p>More details</p>
                    <FontAwesomeIcon
                      className="project_details_arrow"
                      icon={faChevronRight}
                      size="sm"
                      color="#b1b5b9"
                    />
                  </div>
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
            <ProjectDetailModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              projectMoreDetails={projectMoreDetails}
            />
          </div>
        );
      })}
    </>
  );
};

export default ProjectCardsRender;
