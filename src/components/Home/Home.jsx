import React from "react";
import "./Home.scss";

import Top from "../Top/Top";
import Contact from "../Contact/Contact";
import MyStory from "../MyStory/MyStory";
import Portfolio from '../Portfolio/Portfolio';
import Skills from "../Skills/Skills";
import  Certificates  from "../Certificates/Certificates";

const Home = () => {
  return (
    <div className="home">
      <Top/>
      <MyStory/>
      <Skills/>
      <Certificates/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default Home;