import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectDisplay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWaze } from '@fortawesome/free-brands-svg-icons';


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt="characters" />
            {/* <div className="projectLinks"> */}
                <h2
                    target="_blank"
                    rel="nonreferrer noreferrer"
                    href={project.link}>
                    <FontAwesomeIcon icon={faGithub} />
                </h2>
                <h2
                    target="_blank"
                    rel="nonreferrer noreferrer"
                    href={project.link}>
                    <FontAwesomeIcon icon={faWaze} />
                </h2>
            {/* </div> */}
            <p>
                Skills: {project.skills}
            </p>
        </div>
    );
}

export default ProjectDisplay;