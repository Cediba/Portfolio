import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from '../Header/NavBar';
import Home from '../Home/Home';
// import Contact from "../Contact/Contact"
import './App.css';
import "./reset.css";
import NotFound from "../NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};


export default App;
