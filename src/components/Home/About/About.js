import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='about' className="d-flex flex-column text-center about pt-5" style={{color: 'white'}}>
          
            <p className="lead font-weight-bold">Veterinarian | Web Developer</p>
            <div>
                <button type="button" class="btn btn-primary m-2">Contact me</button>
                <button type="button" class="btn btn-primary">Resume</button></div>


        </div>
);
};

export default About;