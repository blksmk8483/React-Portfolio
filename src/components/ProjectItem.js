import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectItem({ image, name, id, link }) {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate("/project/" + id);
    };

    return (
        <div className="projectItem" >

            <div onClick={handleChange} style={{ backgroundImage: `url(${image})` }} className='bgImage' />
            <h1>{name}</h1>
            <a target="_blank"
                rel="nonreferrer noreferrer"
                href={link}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
};

export default ProjectItem;