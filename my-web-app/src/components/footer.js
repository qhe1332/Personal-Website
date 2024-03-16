import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function Footer(prop)
{
    return(    
        <nav className="nav">
            <li><Link className="homeButton" id={prop.white} to="/">Cherryland</Link></li>
            <div className="footer-right">
                {/* <li><Link to="/projects" id={prop.white}>Projects</Link></li>
                <li><Link to="/hobbies" id={prop.white}>Hobbies</Link></li> */}
                {/* <li><Link to="/contact" id={prop.white} className="contact-link">Contact Me</Link></li> */}
                <span className="contact-link" id={prop.white}>Contact Me</span>
                <span id={prop.white}>cherryhe5@gmail.com</span>
            </div>
        </nav>
    )
}

export default Footer;