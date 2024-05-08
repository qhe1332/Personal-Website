import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import cherry from "../assets/cherry.png"
import NavHamburger from "./navbarHamburger"

function Navbar(prop) {
    return (
        <nav className="nav">
            <div className="nav-left" id={prop.leftNotVisible}>
                <li id={prop.white}><Link className="homeButton" to="/">Cherryland</Link></li>
                <img id="logo" src={cherry} />
            </div>
            <NavHamburger white={prop.white} visible={prop.rightNotVisible}/>
        </nav>
    );
}

export default Navbar;