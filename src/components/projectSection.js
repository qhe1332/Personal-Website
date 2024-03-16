import React from "react";
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