import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
const abouts = [
  {
    imgUrl:'https://cdn.sanity.io/images/06yd5fkd/production/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png',
    title:'An All-Rounder',
    description:'I am a person who love to be part of the fun activities and have interest in playing sports.'
  },
  {
    imgUrl:'https://cdn.sanity.io/images/06yd5fkd/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png',
    title:'Backend Developer',
    description:'I am backend developer with the passion of building clean and fast applications and have knowledge of Node.js,Express.js and MongoDB'
  },
  {
    imgUrl:'https://cdn.sanity.io/images/06yd5fkd/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png',
    title:'React Developer',
    description:'I have knowledge of developments of web apps using React with the good knowledge of hooks and Redux.'
  },
  {
    imgUrl:'https://cdn.sanity.io/images/06yd5fkd/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png',
    title:'Frontend Developer',
    description:'I am a frontend developer with the passion of building functional web applications with knowledge of HTML5,CSS and JavaScript.'
  }
  
    ]

const About = () => {


  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Applications</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
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
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
