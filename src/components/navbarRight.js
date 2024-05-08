import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function NavRight(prop) {
    return (
        <div className="nav-right">
            <li id={prop.white}><Link to="https://drive.google.com/file/d/1rP76UZFixkdj-QWAM4suOEaTwUEccaLI/view?usp=sharing" target="_blank">Resume</Link></li>
            <li id={prop.white}><Link to="/portfolio">Portfolio</Link></li>
            {/* <li><Link to="/hobbies">Hobbies</Link></li> */}
            <li id={prop.white}><Link to="/contact">Contact Me</Link></li>
        </div>
    );
}

export default NavRight;