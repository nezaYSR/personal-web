/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

// TABS
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutMeTabs = () => {
  return (
    <Fragment>
      <Tabs className="about-me-tab">
        <TabList className="about-me-tab-title">
          <Tab className="about-me-tab-title-txt">Skill</Tab>
          <Tab className="about-me-tab-title-txt">Interest</Tab>
        </TabList>

        <TabPanel className="about-me-tab-content">
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel className="about-me-tab-content">
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};

export default withRouter(AboutMeTabs);
