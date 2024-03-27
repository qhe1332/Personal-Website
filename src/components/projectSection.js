import React from "react";
import ProjectSlide from "./cardSlide";
import gudetama from "../images/GudetamaWeb.png"
import cunyconnect from "../images/Logo.png"
import notemad from "../images/notemad.png"
import joyeetanweb from "../images/joyeetan.png"
import dorayaki from "../images/dorayaki.png"

function projectSection(prop) {
    return (
        <div className="projectSection-container">
            <h1 className="title">Recent Projects :)</h1>
            <ProjectSlide index="cardSlide1" 
                    slides={[{img:joyeetanweb, title:"Joyee's Portfolio Website", type:"Work Project", year:"2023", link:"https://joyeetanphotography.com/", desc:"A portfolio website I designed and built with Figma and Wordpress for Joyee Tan, a photographer."},{img:notemad, title:"Notemad", type:"Group Project", year:"2022", link:"https://github.com/NotemadOrg/notemad-app", desc:"A web app to help tourists and NYC locals track places they have and haven't visited. I took part building the map tracker with Leaflet API."}, 
                    {img:dorayaki, title:"Doraemon: Dorayaki Game", type:"Personal Project", year:"2022", link:"https://cherry-pie73.itch.io/doraemon-dorayaki-game", desc:"I build a mini game with p5.js based on Doraemon, a fictional character who loves to eat dorayaki. This is built for my Game Develpoment class."}, 
                    {img:cunyconnect, title:"CUNY Connect", type:"Group Project", year:"2021", link:"https://github.com/qhe1332/CUNY-Connect", desc:"A web application that connects CUNY students to other like minded CUNY students."},
                    {img:gudetama, title:"Gudetama's Home",type:"Individual Project", year:"2017", link:"https://github.com/qhe1332/GudetamaWeb", desc:"My first web developement project! This is a portfolio website for a sanrio character, Gudetama. Everything was build with HTML/CSS."}]}/>
        </div>

    );
}

export default projectSection;