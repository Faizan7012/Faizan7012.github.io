import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
const resumeDrive = 'https://drive.google.com/file/d/1fMgV-LJlbMgB72OAd54AQvKlHNqBfcoE/view?usp=sharing'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar" id="nav-menu">
      <div className="app__navbar-logo">
        <h6 className="name-tag">Faizan Alam</h6>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills","projects", "contact","resume"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {
                    item==='resume'?  <a target='_blank' rel="noreferrer" href={resumeDrive} onClick={() => setToggle(false)}>
                    {item}
                  </a>:<a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>

                  }
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills","projects", "contact","resume"].map((item) => (
                <li key={item} class={`nav-link ${item}`}>
                  {
                    item==='resume'?  <a target='_blank' rel="noreferrer" href={resumeDrive}  onClick={() => setToggle(false)}>
                    {item}
                  </a>:<a key={item} class={`nav-link ${item}`} href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>

                  }
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

