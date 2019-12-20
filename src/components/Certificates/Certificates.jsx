import React from 'react';
import './Certificates.scss';
import { Trennlinie } from '../Trennlinie/Trennlinie';

const Certificates = () => {
    return (
        <>
        <Trennlinie/>
        <div class="Certificate-wrapper">
            <div class="certificate1">Metal Work</div>
            <div class="certificate2">EnglishMaster</div>
            <div class="certificate3">Web Developer</div>
        </div>
        </>
    );
}
export default Certificates;