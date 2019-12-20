import React from 'react';
import './Skills.scss';
import { Trennlinie } from '../Trennlinie/Trennlinie';

const Skills = () => {
    return (
        <>
        <Trennlinie/>
        <div class="Skill-wrapper">
            <div className='Skill-title'>Title</div>
            <div class="Skill1">HTML</div>
            <div class="Skill2">CSS/SCSS</div>
            <div class="Skill3">JAVASCRIPT</div>
            <div class="Skill4">GITHUB</div>
            <div class="Skill5">REACT</div>
            <div class="Skill6">BOOTSTRAP</div>
            <div class="Skill7">JQuery</div>
            <div class="Skill8">Node.js</div>
        </div>
        </>
    )
}
export default Skills;