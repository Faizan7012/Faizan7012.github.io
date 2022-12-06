import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { Timeline } from "./timeline";
import { abouts } from "./data";
import 'aos/dist/aos.css';
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