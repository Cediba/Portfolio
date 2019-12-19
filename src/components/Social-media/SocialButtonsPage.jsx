import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import './SocialButtonsPage.scss';

export default function SocialButtonsPage()  {
  return (
    <div className='social-container'>
      <a 
        href='https://www.linkedin.com/in/cedric-balmer-200b99183/'
        className='linked-in'
      >
        <FontAwesomeIcon icon={faLinkedin} size='1x'/>
      </a>
      <a 
        href='https://github.com/Cediba'
        className='git-hub'
      >
        <FontAwesomeIcon icon={faGithub} size='1x'/>
      </a>
    </div>
  );
}

