import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import ProjectContainer from "../components/projectBox"
import gudetama from "../images/GudetamaWeb.png"
import cunyconnect from "../images/Logo.png"

function Projects(prop)
{
    return(    
        <div className="page">
            <Navbar/>
            <div className="page-contents">
                <div className="title">Projects</div>
                <div>
                    <ProjectContainer 
                        img={cunyconnect} 
                        title="CUNY Connect"
                        type="Group Project"
                        year="2021"
                        link="https://github.com/qhe1332/CUNY-Connect"
                        desc="A web application that connects CUNY students to other like minded CUNY students."/>
                    <ProjectContainer 
                        img={gudetama} 
                        title="Gudetama's Home"
                        type="Individual Project"
                        year="2017"
                        link="https://github.com/qhe1332/GudetamaWeb"
                        desc="My first web developement project! This is a portfolio website for a sanrio character, Gudetama. Everything was build with HTML/CSS. "/>
                </div>
            </div>
        </div>
    );
}

export default Projects;