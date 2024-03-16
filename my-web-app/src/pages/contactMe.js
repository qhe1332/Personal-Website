import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

function ContactMe(prop)
{
    return(    
        <div className="page">
            <Navbar/>
            Contact Me
        </div>
    );
}

export default ContactMe
;