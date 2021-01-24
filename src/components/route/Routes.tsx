import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";

import Footer from "./Footer";

const Routes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ height: 60 }} />
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
