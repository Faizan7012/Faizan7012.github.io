import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import Githubcalendar from "react-github-calendar";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiNetlify,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { DiMongodb, DiHeroku } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
const Skills = () => {
  AOS.init();
  return (
   <>
      <h2 className="head-text" data-aos="fade-right">My Skills</h2>

      <div className="app__skills-container" data-aos="fade-right">
        <motion.div className="app__skills-list">
        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiJavascript />
              </div>
              <p className="p-text">JavaScript</p>
            </motion.div>
        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiHtml5 />
              </div>
              <p className="p-text">HTML</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiCss3 />
              </div>
              <p className="p-text">CSS</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <FaReact />
              </div>
              <p className="p-text">React</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiRedux />
              </div>
              <p className="p-text">Redux</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiExpress />
              </div>
              <p className="p-text">Express</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <FaNodeJs />
              </div>
              <p className="p-text">Nodejs</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <DiMongodb />
              </div>
              <p className="p-text">MongoDB</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiChakraui />
              </div>
              <p className="p-text">Chakra UI</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiMaterialui />
              </div>
              <p className="p-text">Material UI</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <BsBootstrap />
              </div>
              <p className="p-text">Bootstrap</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiPostman />
              </div>
              <p className="p-text">Postman</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <VscGithub />
              </div>
              <p className="p-text">GitHub</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiNetlify />
              </div>
              <p className="p-text">Netlify</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <SiVercel />
              </div>
              <p className="p-text">Vercel</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <DiHeroku />
              </div>
              <p className="p-text">Heroku</p>
            </motion.div>
        </motion.div>
      </div>
      <br /><br />
      <div>
       <h2 className="head-text" data-aos="fade-right">
        Days I <span>Code</span>
      </h2><br /><br />
      <div  data-aos="fade-right">
      <Githubcalendar
          username="Faizan7012 "
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        
        />
      </div>
         
       </div>

    <br />
    <br />
    <br />
    <br />
    <div>
    <h2 className="head-text" data-aos="fade-right">
        GitHub Stats
      </h2><br /><br />
    </div>
    <div className="git-stats" data-aos="fade-right">
    <img alt="Faizan Alam's Github Stats" src="https://github-readme-stats.vercel.app/api?username=Faizan7012&show_icons=true&count_private=true&theme=chartreuse-dark&hide_border=true&bg_color=0D1117" />
    <img alt="Faizan7012's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Faizan7012&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" />
     </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
