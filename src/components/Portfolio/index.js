import React from "react";
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

const renderPortfolio = (portfolio) => {
    return (
        <div className="images-container">
            {
                portfolio.map((port, index) => {
                    return (
                        <div className="image-box" key={index}>
                            <img
                            src={port.cover}
                            className="portfolio-image"
                            alt="garden2" />
                        </div>
                    )
                })
            }
        </div>
    );
}

    return (
        <div className='container portfolio-page'>
            <h1 className="page-title">Portfolio</h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
    )
}

export default Portfolio