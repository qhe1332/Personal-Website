import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import Homepage from "../pages/homepage";
import Projects from "../pages/projects";

function Navbar(prop)
{
    return(    
        <nav className="nav">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/projects">Projects</Link></li>
        </nav>
    );
}

export default Navbar;