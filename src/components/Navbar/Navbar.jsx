import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <button className="name_btn">
        <h5 className="name-tag">Faizan Alam</h5>
        </button>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "Projects", "skills", "contact","resume"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {
                    item==='resume'?  <a target='_blank' href='https://drive.google.com/file/d/1S6T4PG48oJfspjpAi4s-Gtxz4hN1He5Z/view?usp=sharing' onClick={() => setToggle(false)}>
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
              {["home", "about", "Projects", "skills", "contact","resume"].map((item) => (
                <li key={item}>
                  {
                    item==='resume'?  <a target='_blank' href='https://drive.google.com/file/d/1S6T4PG48oJfspjpAi4s-Gtxz4hN1He5Z/view?usp=sharing' onClick={() => setToggle(false)}>
                    {item}
                  </a>:<a href={`#${item}`} onClick={() => setToggle(false)}>
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
