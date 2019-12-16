import React from 'react';
import Footer from "../Footer/Footer";
import Header from '../Header/NavBar';
import Home from '../Home/Home';
import "./reset.css";
import './App.css';
import NotFound from "../NotFound/NotFound";
import Contact from '../Contact/Contact';
import Certificates from '../Certificates/Certificates';
// eslint-disable-next-line no-unused-expressions
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet"/>

const App = () => {
  return (
    <>
      {/* <Header/> */}
      <Home/>
      <Contact/>
      <Certificates/>
      <Footer/>
    </>
  );
};


export default App;
