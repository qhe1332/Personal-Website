import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import Homepage from "../pages/homepage";
import Projects from "../pages/projects";
import Media from "../pages/media";
import Hobbies from "../pages/hobbies";
import Contact from "../pages/contactMe";

function Navbar(prop)
{
    return(    
        <div className="project">
            <img src={prop.src}/>
            <div className="projectName">{prop.projectName}</div>
        </div>
    );
}

export default Navbar;