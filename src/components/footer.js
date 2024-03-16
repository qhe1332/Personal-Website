import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import cherry from "../assets/cherry.png"
import cherrywhite from "../assets/cherrywhite.png"

function Footer(prop) {
    return (
        <div className="footer-wrap">
        <nav className="nav">
            <div className="nav-left">
                <li><Link className="homeButton" id={prop.white} to="/">Cherryland</Link></li>
                <div id="logo" className="cherrywhite"></div>
            </div>
            <div className="footer-right">
                <div className="footer-right-top">
                    {/* <li><Link to="/projects" id={prop.white}>Projects</Link></li>
                <li><Link to="/hobbies" id={prop.white}>Hobbies</Link></li> */}
                    {/* <li><Link to="/contact" id={prop.white} className="contact-link">Contact Me</Link></li> */}
                    <span className="contact-link" id={prop.white}>Contact Me</span>
                    <span id={prop.white}>cherryhe5@gmail.com</span>
                </div>
            </div>
        </nav>
        <div className="footer-notice" id={prop.white}>This website is still under developement.</div>
        </div>
    )
}

export default Footer;