/* eslint-disable react/jsx-no-target-blank */
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
          <a href="/" className="top-part-burger">
            <img
              src={burgerLogo}
              className="top-part-burger-img"
              alt="burger-menu"
            ></img>
          </a>
        </div>
        <ul className="bottom-part">
          <li className="bottom-part-container">
            <a
              href="https://github.com/nezaYSR"
              className="bottom-part-container-content"
              target="_blank"
            >
              Git
            </a>
          </li>
          <li className="bottom-part-container">
            <a
              href="https://www.linkedin.com/in/nezayasser/"
              className="bottom-part-container-content"
              target="_blank"
            >
              In
            </a>
          </li>
          <li className="bottom-part-container">
            <a
              href=""
              className="bottom-part-container-content"
              target="_blank"
            >
              Ig
            </a>
          </li>
          <li className="bottom-part-container">
            <a
              href=""
              className="bottom-part-container-content"
              target="_blank"
            >
              Tw
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Sidebar);
