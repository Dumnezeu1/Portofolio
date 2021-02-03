import React from "react";
import "../style/Footer.css";

import IconsRenderWithSpacer from "../utils/IconsRenderWithSpacer";
import { brandIcons } from "../config";

const Footer: React.FC = () => {
  return (
    <footer className="footer_container">
      <div className="details_container">
        <h2>Contact me</h2>
        <div style={{ width: 260 }}>
          <IconsRenderWithSpacer renderIcons={brandIcons} />
        </div>
      </div>
      <div className="details_container">
        <h2>Currently Working</h2>
        <div>
          <p>E-TWOW Connect</p>
          <p>E-TWOW Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
