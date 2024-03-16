import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function ContactMe(prop)
{
    return(    
        <div className="page">
            <Navbar/>
            <div className="page-contents">
                <div className="title">Contact Me</div>
                <div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactMe
;