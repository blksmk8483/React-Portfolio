import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt="characters" />
            {/* <GitHubIcon /> */}
            <p>
                Skills:{project.skills}
            </p>
        </div>
    );
}

export default ProjectDisplay;