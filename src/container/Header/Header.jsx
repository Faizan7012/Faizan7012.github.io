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
       <div className="intro">
        <div>
          <img className="faizan_img" src={images.faizan} alt="faizan alam" />
          <div>
          </div>
        </div>
        <div className="intro_desc">
          <p className="hello">
          <span>👋  </span>
           Hello
          </p><br /><br /><br />
           <p>
           I'm Faizan Alam, a Full Stack Web Developer who loves solving problems and
            building projects. I am equipped with a variety of technologies and tools
             to help me to build the best possible product.
           </p><br /><br />
           <a className="download_cv" href={`${ResumePDF}`} download={'Faizan_Alam_Resume.pdf'}>
          <AiOutlineCloudDownload className="resume-download-icon" fontSize='30px'/> 
          <p className="p-text-resume">Resume</p>
        </a>
        </div>
      </div>
);

export default AppWrap(Header, "home");
