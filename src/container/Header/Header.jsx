import React from "react";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import ResumePDF from './Faizan_Alam_Resume.pdf';
import {AiOutlineCloudDownload} from 'react-icons/ai'
import Typewriter from 'typewriter-effect'
import "./Header.scss";

const Header = () => (
       <div className="intro" id="home">
        <div>
          <img class="home-img" className="faizan_img" src={images.faizan} alt="faizan alam" />
          <div>
          </div>
        </div>
        <div className="intro_desc">
          <p className="hello" id="user-detail-name">
           Hello I'm Faizan Alam
          </p>
          <br />
          <p>
          <Typewriter
          options={{
          strings: [
          "Full Stack Developer",
          "MERN Stack Developer",
          "Frontend Developer",
          "Backend Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,  
        wrapperClassName: 'type-writer'    
      }}
    />
    </p>
    <br />
           <p className='bio'  id="user-detail-intro">
            Full Stack Web Developer who loves solving problems and
            building projects. I am equipped with a variety of technologies and tools
             to help me to build the best possible product.
           </p><br /><br />
           <a className="download_cv" id="resume-link-1" href={`${ResumePDF}`} download={'Faizan_Alam_Resume.pdf'}>
          <AiOutlineCloudDownload className="resume-download-icon" fontSize='30px'/> 
          <p className="p-text-resume" id="resume-button-1">Resume</p>
        </a>
        </div>
      </div>
);

export default AppWrap(Header, "home");
