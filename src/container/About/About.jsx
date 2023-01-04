import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { Timeline } from "./timeline";
const About = () => {

  return (
    <>
      <Timeline />
       <br />
       <br />
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);