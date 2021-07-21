/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

// MODULES
import HomeBanner from "../../banners/home-banner";

// IMAGES

const HomeBody = () => {
  return (
    <Fragment>
      <div className="home-body-section">
        <div className="home-body-article">
          <h1 className="home-body-article-title">
            Hi Neza here, thanks for coming
          </h1>
          <p className="home-body-article-txt">
            Introducing my work collection, aside of my current job as a
            programmer i've experienced of mass production stuff, interior
            design, exhibition. <br />I enjoy logical process and i love design
            and art
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(HomeBody);
