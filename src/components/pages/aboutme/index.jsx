/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

// COMPONENTS
import AboutMeTabs from "../../modules/about-me-tabs";

const AboutMe = () => {
  return (
    <Fragment>
      <h1>about me</h1>
      <AboutMeTabs />
    </Fragment>
  );
};

export default withRouter(AboutMe);
