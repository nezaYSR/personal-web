/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

// ICONS
import { GoSearch } from "react-icons/go";

// COMPONENTS
import BurgerMenu from "./burger-menu";

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
              <a className="header-container-title-btn-txt" href="/blog">
                Blog
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="/dev">
                Dev
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="/industrial">
                Industrial
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="/exhibition">
                Exhibition
              </a>
            </button>
          </li>
          <li className="header-container-title">
            <button className="header-container-title-btn">
              <a className="header-container-title-btn-txt" href="/aboutme">
                About Me
              </a>
            </button>
          </li>
        </ul>
        <BurgerMenu />
      </div>
    </Fragment>
  );
};

export default withRouter(Header);
