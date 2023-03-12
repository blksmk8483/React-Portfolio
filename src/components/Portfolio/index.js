import React from "react";
import './index.scss';

import  { ProjectList } from '../data/portfolio.js';
import { useParams } from 'react-router-dom';


function Portfolio() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="characters"/>
        {/* <GitHubIcon /> */}
        <p>
            Skills:{project.skills}
        </p>
    </div>
    );
}



// const Portfolio = () => {

// const renderPortfolio = (portfolio) => {
//     return (
//         <div className="images-container">
//             {
//                 portfolio.map((port, index) => {
//                     return (
//                         <div className="image-box" key={index}>
//                             <img
//                             src={port.cover}
//                             className="portfolio-image"
//                             alt="portfolio" />
//                             <div className="content">
//                                 <p className="title">{port.title}</p>
//                                 <h4 className="description">{port.description}</h4>
//                                 <button
//                                     className="btn"
//                                     onClick={() => window.open(port.url)}
//                                     >VIEW</button>
//                                 </div>
//                         </div>
//                     )
//                 })
//             }
//         </div> 
//     );
// }

//     return (
//         <div className='container portfolio-page'>
//             <h1 className="page-title">Portfolio:</h1>
//         <div>{renderPortfolio(ProjectList.portfolio)}</div>
//         </div>
//     )
// }

export default Portfolio;