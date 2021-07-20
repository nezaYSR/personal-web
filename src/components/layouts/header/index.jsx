/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

// IMAGES
import searchLogo from "../../../assets/icon/magnifying-glass-01.png";

const Header = () => {
  return (
    <Fragment>
      <div className="header-section">
        <div className="header-title">
          <a className="header-title-txt" href=""></a>
        </div>
        <ul className="header-container">
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="">
                Blog
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="">
                Dev
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="">
                Industrial
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="">
                Exhibition
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <img
                className="header-container-title-btn-img"
                src={searchLogo}
                alt="search-logo"
              />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Header);
