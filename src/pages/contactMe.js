import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import portfolio from "../images/profilePic.JPG";
import kirby from "../assets/kirby.png"
import shadow from "../assets/shinShadow.png";

function ContactMe(prop) {
    return (
        <div className="page">
            <Navbar />
            <div className="page-contents">
                <div className="contactBlock">
                    <img className="contactPic" src={portfolio} />

                    <div className="contactBlock-right">
                            
                            <div className="title">Get in Touch!</div>
                            <span id="kirby">
                                <img className="pixelart" id="kirbyShadow" src={shadow} />
                                <img className="pixelart" id="kirbySpritesheet" src={kirby} />
                            </span>
                            <div className="contactBlock-right-top">
                        <div>
                            Please contact me via my email <span style={{color:"hotpink"}}>cherryhe5@gmail.com</span>.
                        </div>
                        </div>
                        <div className="contactLinks">
                            <a href="https://www.linkedin.com/in/qian-yi-he/" target="blank">CONNECT WITH ME! -&gt;</a> <br />
                            <a href="https://itch.io/profile/cherry-pie73" target="blank">PLAY MY GAMES! -&gt;</a><br />
                            <a href="https://github.com/qhe1332" target="blank">MY GITHUB! -&gt;</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe
    ;