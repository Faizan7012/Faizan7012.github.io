import React from "react";
import "./Projects.css";
import { FaReact,FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
  SiExpress,
  SiMongodb
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';


import { AppWrap, MotionWrap } from "../../wrapper";
import { codecov,shopify,weather,spark ,aT} from "./Images/image";
const Projects = () => {
  AOS.init();
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">               
                <img src={aT} alt="Codecov" />                
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Activity Tracker</h2>
              <p>
              First full stack project . Which help us to keep track of time that we spend our task.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiRedux />
                <SiChakraui />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://activity-tracker-orpin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Faizan7012/frightening-river-6696.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">               
                <img src={codecov} alt="Codecov" />                
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Codecov - Clone</h2>
              <p>
              Codecov is a code analysis tool with which users can group, merge, archive, and compare coverage reports.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiChakraui />
              </div>
              <div>
                <a
                  href="https://codecov-ashen.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Faizan7012/noble-weather-6049.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={shopify} alt="Shopify" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Shopify - Clone</h2>
              <p>
                Fully responsive website with HTML, CSS, JavaScript and React. Main
                functionalities were : Register, Login , Sorting and Filtering
                in the Products page, Cart and many more.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://shopify-clone-24si9ctg5-faizan7012.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Faizan7012/Shopify-Clone.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={spark}
                  alt="sparkAmerica"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>sparkAmerica Clone </h2>
              <p>
                Fully responsive website built with HTML, CSS, JavaScript and other CSS Libraries.
              </p>
              <div>
              <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://transcendent-zabaione-8dbd80.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gShubham7/crowded-push-1335"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={weather}
                  alt="Weather-App"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Weather App</h2>
              <p>
                Fully responsive project to get the weather of a particular location built using JavaScript and APIs.
                Features : Button for Searching The location, Details such as temperature wind speed will be shown along with 7 days forcat, etc.
              </p>
              <div>               
                <SiHtml5 />
                <IoLogoJavascript/>
                <FaReact />
                <SiChakraui />
              </div>
              <div>
                <a
                  href="https://app-blush-two.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Faizan7012/weather-app.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__Projects"),
  "Projects",
  "app__primarybg"
);
