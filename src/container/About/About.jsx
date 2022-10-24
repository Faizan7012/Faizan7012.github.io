import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { Timeline } from "../timeline/timeline";
import { abouts } from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
AOS.init()

  return (
    <>
      <h2 className="head-text" data-aos="fade-right">
        I Know that <span>Good Applications</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles" data-aos="fade-right">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
            data-aos="fade-right"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <br />
      <br />
      <br />

      <Timeline />
       <br />
       <br />
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
