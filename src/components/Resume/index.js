import React from "react";
import './index.scss';
import ResumePic from './assets/Resume.png'

const Resume = () => {
    return (
        <div className='container resume-page'>
               <div className="text-zone">
                <h1>
                Resume:
                </h1>
                <img className="resume-pic" src={ResumePic} alt="resume" />
                <p className='resume-text'>
                <a target="_blank" href="https://docs.google.com/document/d/1R44nT2pZIbezYDaMGEfk4w5MxDnjzurmetr_6bz7G9U/edit?usp=sharing" className="resume-link">Click here to download</a>
                </p>
            </div>
        </div>
    )
}

export default Resume