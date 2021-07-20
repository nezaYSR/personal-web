/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

// IMAGES
import burgerLogo from "../../../assets/icon/logo-03.png";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar-section">
        <div className="top-part">
          <a href="" className="top-part-burger">
            <img
              src={burgerLogo}
              className="top-part-burger-img"
              alt="burger-menu"
            ></img>
          </a>
        </div>
        <ul className="bottom-part">
          <li className="bottom-part-container">
            <a href="" className="bottom-part-container-content">
              In
            </a>
          </li>
          <li className="bottom-part-container">
            <a href="" className="bottom-part-container-content">
              Ig
            </a>
          </li>
          <li className="bottom-part-container">
            <a href="" className="bottom-part-container-content">
              Tw
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Sidebar);
