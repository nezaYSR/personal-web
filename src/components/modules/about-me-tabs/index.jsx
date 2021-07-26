/* eslint-disable react/style-prop-object */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

// TABS
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// REACT BS COMPONENT
import { ProgressBar, OverlayTrigger, Button, Tooltip } from "react-bootstrap";

// ICONS
import { FaRegThumbsUp } from "react-icons/fa";

const AboutMeTabs = () => {
  const js = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Built in function, Looping, Data types, Synchronous, Asynchronous, OOP,
      Regex
    </Tooltip>
  );
  const py = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Built in function, Looping, Libraries:Pandas, TKinter, Matplotlib, Data
      types, OOP
    </Tooltip>
  );
  const xp = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      CRUD, Middleware, Gmail SMTP, Rate Limiter, Oauth, API integration, JWT
      token, Mongo DB integration, Role based, Routing, Model
    </Tooltip>
  );
  const nj = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      CRUD, Middleware, JWT token, Mongo DB integration,Postgres QL integration,
      Built in Validator, Decorator, Role based, Routing, Model, Repository
    </Tooltip>
  );
  const md = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Backend Connection, Schema, Validators, Limit Query
    </Tooltip>
  );
  const gt = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Branching, Create Repo, Clone Repo, Del Repo
    </Tooltip>
  );
  const an = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Lazy Load Module, Fetching API, Reactive Forms, Auth Guard, Interceptor,
      SASS setup, Implementing Libraries, Directives, Costum Pipe, Responsive
    </Tooltip>
  );
  const rc = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      React Routing, SASS setup, Implementing Libraries, Fetching API, Form,
      UseState, UseEffect, Breakpoint
    </Tooltip>
  );
  const ed = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Ilustrator, Photoshop, Paint
    </Tooltip>
  );
  const pt = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Figma, XD, Wireframing, Hi fidelity, a bit of Micro-interactions, Tried UX
      writing once too
    </Tooltip>
  );
  const td = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Solidworks, Sketch up, Keyshot, Vray, 3D print slicing
    </Tooltip>
  );
  const hm = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Clay sculpting, Resin, Fiberglass Prototyping, Woodworking, Scale model,
      Painting, Leather Crafting, Model kit, Diorama
    </Tooltip>
  );

  return (
    <Fragment>
      <Tabs className="about-me-tab">
        <TabList className="about-me-tab-title">
          <Tab className="about-me-tab-title-txt">
          <button className="about-me-tab-title-txt-btn">Skill</button>
          </Tab>
          <Tab className="about-me-tab-title-txt">
          <button className="about-me-tab-title-txt-btn">Biography</button>
          </Tab>
        </TabList>

        <TabPanel className="about-me-tab-content">
          <div className="about-me-tab-content-container-bar">
            <ProgressBar className="about-me-tab-content-container-bar">
              <ProgressBar
                animated
                variant="secondary "
                now={50}
                key={1}
                label={`Design`}
              />
              <ProgressBar variant="dark" now={15} key={2} label={`other`} />
              <ProgressBar
                animated
                variant="secondary"
                now={35}
                key={3}
                label={`Programming`}
              />
            </ProgressBar>
            <div className="about-me-tab-content-container-desc">
              <ul className="creative">
                <li className="creative-li">
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 200 }}
                    overlay={ed}
                    className="creative-li-li"
                  >
                    <Button className="creative-li-li-btn">
                      Graphic
                    </Button>
                  </OverlayTrigger>
                </li>

                <li className="creative-li">
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 200 }}
                    overlay={pt}
                    className="creative-li-li"
                  >
                    <Button className="creative-li-li-btn">
                      UI-UX
                    </Button>
                  </OverlayTrigger>
                </li>

                <li className="creative-li">
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 200 }}
                    overlay={td}
                    className="creative-li-li"
                  >
                    <Button className="creative-li-li-btn">3D Modeling</Button>
                  </OverlayTrigger>
                </li>

                <li className="creative-li">
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 200 }}
                    overlay={hm}
                    className="creative-li-li"
                  >
                    <Button className="creative-li-li-btn">Handmade</Button>
                  </OverlayTrigger>
                </li>

                <li className="creative-li">Autocad</li>
                <li className="creative-li">Sketching</li>
              </ul>
             
              <hr className="partition" />

              <ul className="logic">
                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={js}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Javascript</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={py}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Python</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={xp}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Express JS</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={nj}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Nest JS</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={md}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Mongo DB</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={gt}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Git</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={an}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">Angular</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={rc}
                    className="logic-li-li"
                  >
                    <Button className="logic-li-li-btn">React</Button>
                  </OverlayTrigger>
                </li>

                <li className="logic-li">HTML</li>
                <li className="logic-li">CSS & SASS</li>
                <li className="logic-li">Agile</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="about-me-tab-content">
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};

export default withRouter(AboutMeTabs);
