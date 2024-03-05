import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function Navbar(prop)
{
    return(    
        <nav className="nav">
            <li><Link className="homeButton" to="/">Cherryland</Link></li>
            <div className="nav-right">
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </div>
        </nav>
    );
}

export default Navbar;