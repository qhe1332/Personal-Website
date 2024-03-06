import React, { useState, useEffect }from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import shin from "../assets/shin.png";
import shinShadow from "../assets/shinShadow.png";
const Navbar = React.lazy(() => import("../components/navbar"));

function Homepage(prop)
{   
    return(  
        <div className="page">
        <div className="home">
            <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} speed={2.0}>
                    <div className="opening"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="intro">
                        <div className="intro-top">
                            <h1 className="title">Hello, I'm Cherry!</h1> 
                            <span id="shin">
                                <img className="pixelart" id="shinShadow" src={shinShadow}/>
                                <img className="pixelart" id="shinSpritesheet" src={shin}/>
                            </span>
                        </div>
                        <h4>I'm a self-motivated <b>WEB DEVELOPER</b> who  is passionate about building user-centered applications. I am familar with React.js, HTML/CSS, Javascript, p5.js, Unity, and Java. I also have skills in Adobe Suite.</h4>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    
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
                {/* <ParallaxLayer offset={1} speed={2.0}>
                    <div className="projects"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2.0}>
                    <div className="journey"></div>
                </ParallaxLayer> */}

            </Parallax>
            
        </div> 
        </div> 
    );
}

export default Homepage;