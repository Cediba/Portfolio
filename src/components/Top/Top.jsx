import React from 'react';
import './Top.scss';
import Logo from '../../assets/images/logo1.png';


const Top = () => {
    return (
        <div className='wrapper'>

            <div className='logo'><img src={Logo} alt="Logo" width="100" height="70"/></div>

            <div className='pers-img'></div>

            <div className='pers-slogan'></div>

            <div className='pers-name'>Cedric Balmer</div>

            <div className='social-media'></div>


        </div>
    )
}
export default Top;