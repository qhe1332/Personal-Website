import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

function Media(prop)
{
    return(    
        <div className="page">
            <Navbar/>
        </div>
    );
}

export default Media;