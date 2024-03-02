import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

function Projects(prop)
{
    return(    
        <div>
            <Navbar/>
            <h1>Projects</h1>
            <div></div>
        </div>
    );
}

export default Projects;