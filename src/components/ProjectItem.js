import React from "react";
import { useNavigate } from "react-router-dom";


function ProjectItem({ image, name, id, link }) {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate("/project/" + id);
    };

    return (
        <div className="projectItem" >

            <div onClick={handleChange} style={{ backgroundImage: `url(${image})` }} className='bgImage' />
            <h1>{name}</h1>
            
        </div>
    );
};

export default ProjectItem;