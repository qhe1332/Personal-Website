import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

function Homepage(prop)
{
    return(    
        <div>
            <Navbar/>
            <h1 className="title">Hello, I'm Cherry!</h1> 
            <h4>I'm an aspiring web developer who loves </h4>
        </div>
    );
}

export default Homepage;