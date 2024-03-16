import React from "react";
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