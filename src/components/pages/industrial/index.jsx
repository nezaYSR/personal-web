/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

const Industrial = () => {
  return (
    <Fragment>
      <div className="ind-section">
        <h1 className="ind-section-title">I'm working on it</h1>
        <img className="ind-section-err" src="/2801395_Mesa.png" />
      </div>
    </Fragment>
  );
};

export default withRouter(Industrial);
