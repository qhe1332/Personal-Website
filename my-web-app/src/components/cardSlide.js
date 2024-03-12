import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import ProjectContainer from "../components/projectBox"
import gudetama from "../images/GudetamaWeb.png"
import cunyconnect from "../images/Logo.png"
import notemad from "../images/notemad.png"
import joyeetanweb from "../images/joyeetan.png"


function ProjectSlide(prop) {
    return (
        <div>
            <div className="cardSlide-container">
                <ProjectContainer
                    img={joyeetanweb}
                    title="Joyee's Portfolio Website"
                    type="Work Project"
                    year="2023"
                    link="https://joyeetanphotography.com/"
                    desc="A portfolio website I designed and built with Figma and Wordpress for Joyee Tan, a photographer." />
                <ProjectContainer
                    img={cunyconnect}
                    title="CUNY Connect"
                    type="Group Project"
                    year="2021"
                    link="https://github.com/qhe1332/CUNY-Connect"
                    desc="A web application that connects CUNY students to other like minded CUNY students." />
                <ProjectContainer
                    img={gudetama}
                    title="Gudetama's Home"
                    type="Individual Project"
                    year="2017"
                    link="https://github.com/qhe1332/GudetamaWeb"
                    desc="My first web developement project! This is a portfolio website for a sanrio character, Gudetama. Everything was build with HTML/CSS. " />
                <ProjectContainer
                    img={notemad}
                    title="Notemad"
                    type="Group Project"
                    year="2022"
                    link="https://github.com/NotemadOrg/notemad-app"
                    desc="A web app to help tourists and NYC locals track places they have and haven't visited. I took part building the map tracker with Leaflet API." />
            </div>
        </div>

    );
}

export default ProjectSlide;