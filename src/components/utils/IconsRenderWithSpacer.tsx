import React from "react";
import "../style/dist/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faBullseye as faMarker } from "@fortawesome/free-solid-svg-icons";

interface BrandIcons {
  renderIcons: Array<{
    id: number;
    link: string;
    icon: IconDefinition;
  }>;
  color?: string;
}

const IconsRenderWithSpacer: React.FC<BrandIcons> = ({
  renderIcons,
  color,
}) => {
  const markerBetweenIcons = renderIcons
    .map((brandIcon, idx) => {
      if (idx !== renderIcons.length - 1)
        return [brandIcon, { id: 99 + idx, icon: faMarker, link: "marker" }];
      else return [brandIcon];
    })
    .flat();
  const iconColor = color ?? "black";

  return (
    <div className="brand-icon_container">
      {markerBetweenIcons.map((renderIcon, idx) => {
        const { id, icon, link } = renderIcon;
        const checkMarker = link === "marker";

        if (checkMarker) {
          return (
            <FontAwesomeIcon
              key={id}
              icon={icon}
              size="xs"
              color={iconColor}
              style={{ paddingLeft: 7, paddingRight: 7 }}
            />
          );
        } else {
          return (
            <a href={link} target="_blank" rel="noreferrer" key={id}>
              <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />
            </a>
          );
        }
      })}
    </div>
  );
};

export default IconsRenderWithSpacer;
