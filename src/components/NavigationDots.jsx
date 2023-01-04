import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "Projects", "skills", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        rel="noreferrer"
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
