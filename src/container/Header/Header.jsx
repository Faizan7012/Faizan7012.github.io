import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import ResumePDF from './Faizan_Alam_Resume.pdf';
import {AiOutlineCloudDownload} from 'react-icons/ai'
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text" style={{color:'#6b7688'}}>Faizan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full-Stack</p>
          <p className="p-text">Developer</p>
        </div>
        <a className="download_cv" href={`${ResumePDF}`} download={'Faizan_Alam_Resume.pdf'}>
        <AiOutlineCloudDownload className="resume-download-icon" fontSize='30px'/> 
        <p className="p-text-resume">Resume</p>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img
        src={images.faizan}
        alt="profile_bg"
        style={{ background: "transparent",backgroundImage:'none' , borderRadius:'0px 0px 50% 50%' }}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.redux, images.node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
