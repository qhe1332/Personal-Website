import React from "react";
import Navbar from "../components/navbar";
import ProjectSlide from "../components/cardSlide";
import Footer from "../components/footer";


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
            <Footer/>
        </div>
    );
}

export default Projects;