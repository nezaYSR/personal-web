/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

// MODULES
import HomeBanner from "../../banners/home-banner";
import HomeBody from "../../modules/home-body";

// IMAGES

const Home = () => {
  return (
    <Fragment>
      <div className="home-section">
        <img className="home-section-img" src="/untitled.1142.png" />
        <HomeBody />
        <HomeBanner />
      </div>
    </Fragment>
  );
};

export default withRouter(Home);
