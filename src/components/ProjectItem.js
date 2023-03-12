import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectItem({ image, name, id, link }) {
    const navigate = useNavigate();

    const projectLink = <a target="_blank" rel='nonreferrer' href={link}>
    <FontAwesomeIcon icon={faGithub} />
</a>

    return (
        <div className="projectItem" >
        <div 
        
        onClick={() => {navigate("/project/" + id);
        }}
        >
            <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
            <h1>{name}</h1>
            </div>
            <div className="projectLink">{projectLink}</div>
        </div>
    );
};

export default ProjectItem;