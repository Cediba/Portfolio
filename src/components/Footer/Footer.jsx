import React from 'react';
import './Footer.scss';
import '../Social-media/SocialButtonsPage';
import SocialButtonsPage from '../Social-media/SocialButtonsPage';

const Footer = () => {
    return (
      <footer>
          <div className='footer-person-name'>
            <h2>Cedric Balmer</h2><h3>Webdeveloper</h3>
          </div>
          <div className='footer-socialMedia'>
            <SocialButtonsPage/>
          </div>
      </footer>
    )
}
export default Footer;