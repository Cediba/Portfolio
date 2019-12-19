import React from 'react';
import './MyStory.scss';

const MyStory = () => {
    return (
        <div class="myStory-wrapper">
            <div class="myStory-title"><h2>My Story</h2></div>
            <div class="myStory-description">Hello I'am Cedric Balmer and 22 years older.</div>
            <div class="myStory-btn-wrapper"><button class="myStory-btn" type="button">Download CV</button></div>
        </div>
    )
}
export default MyStory;