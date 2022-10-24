import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import Githubcalendar from "react-github-calendar";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import {data} from "./skilldata";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  AOS.init();
  return (
    <>
      <h2 className="head-text" data-aos="fade-right">My Skills</h2>

      <div className="app__skills-container" data-aos="fade-right">
        <motion.div className="app__skills-list">
          {data.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'none' }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
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
