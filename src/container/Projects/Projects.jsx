import React, { useState} from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { data } from "./data";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Project.scss";
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
        <div className="tech_stack">
                {
                  work.stack.map((ele)=>{
                    return <div className="tech_stack_item">
                    <img className="tech_stack_img" src={ele} alt={work.title} />
                     
                    </div>
                    
                  
                  })
                }
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
