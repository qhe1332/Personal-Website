import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


function Navbar(prop)
{
    return(   
        <div>
            <a href={prop.link} target="_blank" className="projectLink">
                <div className="project-container">
                    <div className="projectPic"><img  src={prop.img}/></div>
                    <div className="project-container-text">
                        <div className="projectName">{prop.title}</div>
                        <div className="projectType">{prop.type},{prop.year}</div>
                        <div className="projectDesc">{prop.desc}</div>
                    </div>
                </div>
            </a>
            <hr></hr>
        </div> 
        
    );
}

export default Navbar;