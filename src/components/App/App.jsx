import React from 'react';
import Footer from "../Footer/Footer";
import Header from '../Header/NavBar';
import Home from '../Home/Home';
import './App.css';
import "./reset.css";
import NotFound from "../NotFound/NotFound";
import Contact from '../Contact/Contact';
import Certificates from '../Certificates/Certificates';

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Contact/>
      <Certificates/>
      <Footer/>
    </>
  );
};


export default App;
