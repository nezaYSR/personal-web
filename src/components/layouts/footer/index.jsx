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
            <li>
              <a href="" className="footer-list-content">
                Store
              </a>
            </li>
            <li>
              <a href="" className="footer-list-content">
                Cookies
              </a>
            </li>
            <li>
              <a href="" className="footer-list-content">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="footer-list-content">
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
