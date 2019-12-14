import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Link , animateScroll as scroll } from "react-scroll";
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul className='nav-items'>
            <li className="nav-item">
                <Link  
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Home
                </Link>
            </li>
          <li className="nav-item">    
                <Link  
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Skills
                </Link></li>
          <li className="nav-item">  
                <Link  
                    activeClass="active"
                    to="MyStory"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    MyStory
                </Link></li>
          <li className="nav-item">    
          <Link  
                    activeClass="active"
                    to="Certificates"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Certificates
                </Link></li>
          <li className="nav-item">    
          <Link  
                    activeClass="active"
                    to="Portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Portfolio
                </Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar