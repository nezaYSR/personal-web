/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-section">
        <div className="footer-list-container">
          <ul className="footer-list">
            <li className="footer-list-content">
              <a href="" className="footer-list-content-txt">
                Store
              </a>
            </li>
            <li className="footer-list-content">
              <a href="" className="footer-list-content-txt">
                Cookies
              </a>
            </li>
            <li className="footer-list-content">
              <a href="" className="footer-list-content-txt">
                Privacy Policy
              </a>
            </li>
            <li className="footer-list-content">
              <a href="" className="footer-list-content-txt">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <p className="footer-txt-1">
          Design and Engineering by Neza the gaptech 2021
        </p>
      </div>
    </Fragment>
  );
};

export default withRouter(Footer);
