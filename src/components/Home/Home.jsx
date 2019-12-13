import React from "react";
import "./Home.scss";

import Top from "../Top/Top";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Top />
      <Contact />
    </div>
  );
};

export default Home;