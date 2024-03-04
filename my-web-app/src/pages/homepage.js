import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

function Homepage(prop)
{   
    return(  
        <div>
            {/* <div className="opening">
                <Navbar/>
                <div className="intro">
                    <h1 className="title">Hello, I'm Cherry!</h1> 
                    <h4>I'm a self-motivated <b>WEB DEVELOPER</b> who  is passionate about building user-centered applications. I've recently graduated from Hunter College with a degree in Computer Science and a minor in media.</h4>
                </div>
                <img className="cloud1" src={cloud1}/>
                <img className="cloud2" src={cloud2}/>
            </div> */}
            <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} speed={2.5}>
                    <div className="opening"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="intro">
                        <h1 className="title">Hello, I'm Cherry!</h1> 
                        <h4>I'm a self-motivated <b>WEB DEVELOPER</b> who  is passionate about building user-centered applications. I've recently graduated from Hunter College with a degree in Computer Science and a minor in media.</h4>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.7}>
                    <div className="animation-layer" id="cloud1"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.5}>
                    <div className="animation-layer" id="cloud2"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <Navbar/>
                </ParallaxLayer>

                
            </Parallax>
        </div>  
    );
}

export default Homepage;