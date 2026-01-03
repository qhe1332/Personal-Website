import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function NavRight(prop) {
    
    return (
        <div className="nav-right" id={prop.open ? "open" : "close"}>
            <li id={prop.white}><Link to="https://drive.google.com/file/d/1IAi8ck7VYAlwhAjGL6ZN9SXSKDoowxZE/view?usp=sharing" target="_blank">Resume</Link></li>
            <li id={prop.white}><Link to="/portfolio">Portfolio</Link></li>
            {/* <li><Link to="/hobbies">Hobbies</Link></li> */}
            <li id={prop.white}><Link to="/contact">Contact Me</Link></li>
        </div>
    );
}

export default NavRight;