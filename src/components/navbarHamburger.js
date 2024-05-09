import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavRight from "./navbarRight"

function NavHamburger(prop) {
    const [open, setOpen] = useState(false);
    const openNav = () => {
        setOpen(!open);
    };

    return (
        <div className={prop.visible}>
            <div className="hamburger" id={open ? "open" : "close"} open={open} onClick={openNav}>
                <div />
                <div />
                <div />
            </div>
            <NavRight white={prop.white} open={open}/>
        </div>
    );
}

export default NavHamburger;