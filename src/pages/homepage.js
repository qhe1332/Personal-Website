import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import shin from "../assets/shin.png";
import shinShadow from "../assets/shinShadow.png";
import Footer from "../components/footer"
import NavHamburger from "../components/navbarHamburger";
const Navbar = React.lazy(() => import("../components/navbar"));
const Project = React.lazy(() => import("../components/projectSection"));
const Journey = React.lazy(() => import("../components/journeySection"));



function Homepage(prop) {
    const scroll = to => this.refs.parallax.scrollTo(to);
    return (
        <div className="page">
            <div className="home">
                <Navbar white="whitecover" leftNotVisible="notVisible" mobile="mobile"/>
                <Parallax pages={3.99} style={{ top: '0', left: '0' }} className="animation">
                    <ParallaxLayer offset={0} speed={0} onClick={() => this.ref.parallax.scrollTo(1)}>
                        <div className="opening"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0} onClick={() => this.ref.parallax.scrollTo(2)}>
                        <div className="projects"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0} >
                        <div className="journey"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.2} speed={1.7}>
                        <div className="animation-layer" id="cloud3"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.7} speed={1.0}>
                        <div className="animation-layer" id="cloud1"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.5} speed={0.7}>
                        <div className="animation-layer" id="cloud2"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.75} speed={0.3}>
                        <div className="animation-layer pixelart" id="scrolldownbutton"></div>
                    </ParallaxLayer>
                    {/* <ParallaxLayer sticky={{ start: 0, end: 3.5 }} speed={0.3}>
                        <Navbar white="whitecover" leftNotVisible="notVisible" mobile="mobile"/>
                    </ParallaxLayer> */}
                    <ParallaxLayer offset={0} speed={0.3}>
                        <Navbar white="whitecover" rightNotVisible="notVisible" />
                        <div className="intro">
                            <div className="intro-top">
                                <h1 className="title">Hello, <br></br>I'm Cherry!</h1>
                                <span id="shin">
                                    <img className="pixelart" id="shinShadow" src={shinShadow} />
                                    <img className="pixelart" id="shinSpritesheet" src={shin} />
                                </span>
                            </div>
                            <h4>I'm a self-motivated <b>WEB DEVELOPER</b> who  is passionate about building user-centered applications. I am familar with React.js, HTML/CSS, Javascript, p5.js, Unity, and Java. I also have skills in Adobe Suite.</h4>
                            <div className="contactButton"><Link to="/contact">Get in Touch! -&gt;</Link></div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.05} speed={1.7}>
                        <div className="animation-layer" id="cloud6"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.3}>
                        <Project />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.78} speed={0.8}>
                        <div className="animation-layer" id="cloud4"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.2}>
                        <div className="animation-layer" id="smallDots"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.4}>
                        <div className="animation-layer" id="bigDots"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.35}>
                        <div className="animation-layer" id="smallStars"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.99} speed={0.5}>
                        <div className="animation-layer" id="cloud5"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} factor={2} speed={0.3}>
                        <Journey />
                    </ParallaxLayer>
                    <ParallaxLayer offset={3.84} speed={0.3}>
                        <Footer white="white" logo="cherrywhite" />
                    </ParallaxLayer>
                </Parallax>

            </div>
        </div>
    );
}

export default Homepage;