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
                <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRUwr0i8F5Oy_gQw5UDlrbx-8xyoIqayedyftv8Tzg_7CWjlrEwwUYD-_NnbaWHGmOPfVliAar3Z7qe/pub" className="resume-link" rel="noreferrer">Click here to download</a>
                </p>
            </div>
        </div>
    )
}

export default Resume