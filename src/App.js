import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Projects } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
