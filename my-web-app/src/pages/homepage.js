import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

function Homepage(prop)
{
    return(    
        <div>
            <Navbar/>
            Home
        </div>
    );
}

export default Homepage;