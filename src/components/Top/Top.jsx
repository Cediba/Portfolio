import React from 'react';
import './Top.scss';
import Logo from '../../assets/images/logo1.png';
import persImg from '../../assets/images/pers-img.jpg';
import SocialButtonsPage from '../Social-media/SocialButtonsPage';

const Top = () => {
    return (
        <div className='wrapper'>

            <div className='logo'>
                <img src={Logo} alt="Logo" width="100"/>
                </div>

            <div className='pers-slogan'>
                „Be yourself“
            </div>

            <div className='pers-img'>
                <img class="image-circle" src={persImg} width="250" height="250" alt="persImg"/>
            </div>

            <div className='pers-name'>
                <h1><span id="First-name">Cedric</span><span id="Second-name">Balmer</span></h1>
                    <span id="subtitle">Webdeveloper</span>
            </div>

            <div className='social-media-bar'>
                <span className="social-media-bar-icon">
                    Follow Me On:
                    <SocialButtonsPage/>
                </span>
            </div>


        </div>
    )
}
export default Top;