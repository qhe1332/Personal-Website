import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import ProjectSlide from "../components/cardSlide";


function Projects(prop)
{
    return(    
        <div className="page">
            <Navbar/>
            <div className="page-contents">
                <div className="title">Projects</div>
                <div>
                    <ProjectSlide/>
                </div>
            </div>
        </div>
    );
}

export default Projects;