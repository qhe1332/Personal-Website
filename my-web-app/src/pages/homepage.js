import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

function Homepage(prop)
{   
    return(  
        <div className="page">
            <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} speed={2.5}>
                    <div className="opening"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="intro">
                        <h1 className="title">Hello, I'm Cherry!</h1> 
                        <h4>I'm a self-motivated <b>WEB DEVELOPER</b> who  is passionate about building user-centered applications. I am familar with React.js, HTML/CSS, Javascript, p5.js, Unity, and Java. I also have skills in Adobe Suite.</h4>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.7}>
                    <div className="animation-layer" id="cloud1"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.5}>
                    <div className="animation-layer" id="cloud2"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.0}>
                    <div className="animation-layer" id="cloud3"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <Navbar/>
                </ParallaxLayer>


            </Parallax>
        </div>  
    );
}

export default Homepage;