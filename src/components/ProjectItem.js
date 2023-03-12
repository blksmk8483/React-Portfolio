import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectItem({ image, name, id, link }) {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate("/project/" + id);
    };

    const projectLink = <a target="_blank" rel='nonreferrer' href={link}>
    <FontAwesomeIcon icon={faGithub} />
</a>

    return (
        <div className="projectItem" >
       
            <div onClick={handleChange} style={{backgroundImage: `url(${image})`}} className='bgImage' />
            <h1>{name}</h1>
            <h2 className='projectLink'>{projectLink}</h2>
        </div>
    );
};

export default ProjectItem;