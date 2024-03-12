import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import ProjectSlide from "./cardSlide";

function projectSection(prop) {
    return (
        <div className="projectSection-container">
            <h1 className="title">Recent Projects :)</h1>
            <ProjectSlide/>
        </div>

    );
}

export default projectSection;