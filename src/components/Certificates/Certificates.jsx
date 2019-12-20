import React from 'react';
import './Certificates.scss';
import { Trennlinie } from '../Trennlinie/Trennlinie';

const Certificates = () => {
    return (
        <>
        <Trennlinie/>
        <div class="Certificate-wrapper">
            <div className='Certificate-title'><h2>Certificates</h2></div>
            <div class="certificate1">
                <h3>Metal Work</h3> 
                {/* <button class="myStory-btn" type="button">Show more</button> */}
            </div>
            <div class="certificate2">
                <h3>Cambridge Diploma</h3>
                </div>
            <div class="certificate3">
                <h3>Web Developer</h3>
                </div>
        </div>
        </>
    );
}
export default Certificates;