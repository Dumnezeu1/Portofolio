import React from "react";
import Routes from "./components/route/Routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

const App: React.FC = () => {
  return (
    <div >
      <Routes />
    </div>
  );
};

export default App;
