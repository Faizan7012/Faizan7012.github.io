import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import {Footer, Header, Skills, Projects } from "./container";
import About from "./container/About/About";

const App = () => {
  return (
    <div className="app">
     <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />  
    </div>
  );
};

export default App;
