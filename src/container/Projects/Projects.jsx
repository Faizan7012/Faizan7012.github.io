import React, { useState} from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Project.scss";
const data = [
  {
    imgUrl:'https://seeklogo.com/images/C/codecov-new-logo-D45767B802-seeklogo.com.png',
    title:'Codecov-Clone',
    projectLink:'https://codecov-clone.netlify.app/',
    codeLink:'https://github.com/Faizan7012/noble-weather-6049.git',
    description:'Codecov is a code analysis tool with which users can group, merge, archive, and compare coverage reports. Code coverage also provides test suite.'
  },
  {
    imgUrl:'data:image/png;base64,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',
    title:'SparkAmerica-Clone',
    projectLink:'https://spectacular-fairy-b96b90.netlify.app',
    codeLink:'https://github.com/gShubham7/crowded-push-1335.git',
    description:'SparkAmerica brings people, organizations, and cities together on a single tech platform to participate in our free and fun annual calendar of challenges.'
  },
  {
    imgUrl:'https://cdn-icons-png.flaticon.com/128/831/831319.png',
    title:'Weather App',
    projectLink:'https://inquisitive-granita-063c86.netlify.app/',
    codeLink:'https://github.com/masai-course/faizan_fw20-0437/tree/master/unit-3/sprint-2/day-4/assignments',
    description:'Weather apps enable users to get instant alerts regarding weather conditions. Weather apps are the simplest method to know about the updates of the upcoming weather.'
  }
]
const Projects = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {data.map((work, index) => (
            <a href={work.projectLink} target="_blank" style={{textDecoration:'none'}}>
                <div className="app__work-item app__flex" key={index}>
          
          <div className="app__work-img app__flex">
          <img src={work.imgUrl} alt={work.title} />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="app__work-hover app__flex"
          >
            <a href={work.projectLink} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href={work.codeLink} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillGithub />
              </motion.div>
            </a>
          </motion.div>
        </div>

        <div className="app__work-content app__flex">
          <h4 className="bold-text">{work.title}</h4>
          <p className="p-text" style={{ marginTop: 10 }}>
            {work.description}
          </p>
        </div>
      </div>
            </a>
        
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__Projects"),
  "Projects",
  "app__primarybg"
);
