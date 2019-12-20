import React from 'react';
import './Contact.scss';
import { Trennlinie } from '../Trennlinie/Trennlinie';

const Contact = () => {
    return (
        <>
        <Trennlinie/>
        <div className='contact-wrapper'>
            <div className='contact-title'><h2>Contact</h2></div>
            <div className="contact-container">
                Contact component
            </div>
        </div>

        </>
    )
}
export default Contact;