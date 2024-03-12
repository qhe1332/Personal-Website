import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


function ProjectContainer(prop) {
    return (
        <div>
            <a href={prop.link} target="_blank" className="projectLink">
                <div className="project-container">
                    <img className="projectPic" src={prop.img} />
                    <div className="project-container-text">
                        <div className="project-container-text-top">
                            <div className="projectName">{prop.title}</div>
                            <div className="projectType">{prop.type},{prop.year}</div>
                        </div>
                        <div className="projectDesc">{prop.desc}</div>
                    </div>
                </div>
            </a>
        </div>

    );
}

export default ProjectContainer;