import React from "react";
import { motion } from "framer-motion";
import Githubcalendar from "react-github-calendar";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
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
  return (
   <>
      <h2 className="head-text">My Skills</h2>

      <div className="app__skills-container" id="skills">
        <motion.div className="app__skills-list">
        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiJavascript />
              </div>
              <p className="p-text skills-card-name" >JavaScript</p>
            </motion.div>
        <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiHtml5 />
              </div>
              <p className="p-text skills-card-name" >HTML</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiCss3 />
              </div>
              <p className="p-text skills-card-name" >CSS</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <FaReact />
              </div>
              <p className="p-text skills-card-name" >React</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiRedux />
              </div>
              <p className="p-text skills-card-name" >Redux</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiExpress />
              </div>
              <p className="p-text skills-card-name" >Express</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <FaNodeJs />
              </div>
              <p className="p-text skills-card-name" >Nodejs</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <DiMongodb />
              </div>
              <p className="p-text skills-card-name" >MongoDB</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiChakraui />
              </div>
              <p className="p-text skills-card-name" >Chakra UI</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiMaterialui />
              </div>
              <p className="p-text skills-card-name" >Material UI</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <BsBootstrap />
              </div>
              <p className="p-text skills-card-name" >Bootstrap</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiPostman />
              </div>
              <p className="p-text skills-card-name" >Postman</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <VscGithub />
              </div>
              <p className="p-text skills-card-name" >GitHub</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiNetlify />
              </div>
              <p className="p-text skills-card-name" >Netlify</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <SiVercel />
              </div>
              <p className="p-text skills-card-name" >Vercel</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
            >
              <div
                className="app__flex skills-card-img"
                style={{ backgroundColor: 'none' }}
              >
                <DiHeroku />
              </div>
              <p className="p-text skills-card-name" class="">Heroku</p>
            </motion.div>
        </motion.div>
      </div>
      <br /><br />
      <div>
       <h2 className="head-text">
        Days I <span>Code</span>
      </h2><br /><br />
      <div >
      <Githubcalendar
         class="react-activity-calendar"
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
    <h2 className="head-text">
        GitHub Stats
      </h2><br /><br />
    </div>
    
    <div className="git-stats">
    <img alt="Faizan Alam's Github Stats"  id="github-stats-card" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Faizan7012&layout=compact&langs_count=5&theme=light" />
    <img alt="Faizan7012's Top Languages"  id="github-top-langs" src="https://github-readme-stats-eight-theta.vercel.app/api?username=Faizan7012&show_icons=true&theme=light&include_all_commits=true&count_private=true" />
    <img alt="Faizan7012's streak-stats"   id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=Faizan7012" />
    </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
