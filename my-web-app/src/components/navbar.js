import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import cherry from "../assets/cherry.png"

function Navbar(prop) {
    return (
        <nav className="nav">
            <div className="nav-left">
                <li><Link className="homeButton" to="/">Cherryland</Link></li>
                <img id="logo" src={cherry} />
            </div>
            <div className="nav-right">
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </div>
        </nav>
    );
}

export default Navbar;