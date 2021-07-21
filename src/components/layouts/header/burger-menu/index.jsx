/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

// ICONS
import { BiMenu } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { CgCloseO } from "react-icons/cg";
import { CgTwitter } from "react-icons/cg";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const BurgerMenu = (
    <BiMenu
      className="hamburger-burger"
      color="white"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="hamburger-close"
      color="white"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div className="hamburger">
      {open ? closeIcon : BurgerMenu}
      {open && (
        <div className="hamburger-container">
          <ul className="hamburger-container-content">
            <li className="hamburger-container-content-title">
              <button className="hamburger-container-content-title-btn">
                <a
                  className="hamburger-container-content-title-btn-txt"
                  href=""
                >
                  Blog
                </a>
              </button>
            </li>
            <li className="hamburger-container-content-title">
              <button className="hamburger-container-content-title-btn">
                <a
                  className="hamburger-container-content-title-btn-txt"
                  href=""
                >
                  Dev
                </a>
              </button>
            </li>
            <li className="hamburger-container-content-title">
              <button className="hamburger-container-content-title-btn">
                <a
                  className="hamburger-container-content-title-btn-txt"
                  href=""
                >
                  Industrial
                </a>
              </button>
            </li>
            <li className="hamburger-container-content-title">
              <button className="hamburger-container-content-title-btn">
                <a
                  className="hamburger-container-content-title-btn-txt"
                  href=""
                >
                  Exhibition
                </a>
              </button>
            </li>
            <li className="hamburger-container-content-title">
              <button className="hamburger-container-content-title-btn">
                <a
                  className="hamburger-container-content-title-btn-txt"
                  href=""
                >
                  About Me
                </a>
              </button>
            </li>
          </ul>

          <div className="hamburger-container-socmed">
            <p className="hamburger-container-socmed-txt">
              Find me in social media
            </p>
            <ul className="hamburger-container-socmed-container">
              <li className="hamburger-container-socmed-container-content">
                <a href="">
                  <CgTwitter color="white" size="30px" />
                </a>
              </li>

              <li className="hamburger-container-socmed-container-content">
                <a href="">
                  <TiSocialLinkedin color="white" size="30px" />
                </a>
              </li>

              <li className="hamburger-container-socmed-container-content">
                <a href="">
                  <SiInstagram color="white" size="30px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
