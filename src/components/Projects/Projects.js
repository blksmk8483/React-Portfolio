import React from 'react';
import ProjectItem from '../ProjectItem';
import './Projects.css';
import { ProjectList } from '../../helpers/ProjectList';


function Projects() {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {ProjectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} image={project.image} link={project.link} />
                })}
            </div>
        </div>
    );
};

export default Projects;