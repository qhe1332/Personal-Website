import React from "react";
import Navbar from "../components/navbar";
import ProjectSlide from "../components/cardSlide";
import Footer from "../components/footer";

import gudetama from "../images/GudetamaWeb.png"
import cunyconnect from "../images/Logo.png"
import notemad from "../images/notemad.png"
import joyeetanweb from "../images/joyeetan.png"
import dorayaki from "../images/dorayaki.png"
import fakesmilejournal from "../images/fakeSmileJournal.png"
import fakesmile from "../images/fakeSmile.png"
import orient from "../images/orientalGallery.png"
import christmasVideo from "../images/christmasVideo.png"
import psa from "../images/psa.png"
import ghost from "../images/ghost.png"
import piggie from "../images/piggie.png"


function Projects(prop)
{
    return(    
        <div className="page">
            <Navbar/>
            <div className="page-contents">
                <div className="title">Projects</div>
                <div className="subTitle">Programming</div>
                <div>
                    <ProjectSlide index="cardSlide1" 
                    slides={[{img:joyeetanweb, title:"Joyee's Portfolio Website", type:"Work Project", year:"2023", link:"https://joyeetanphotography.com/", desc:"A portfolio website I designed and built with Figma and Wordpress for Joyee Tan, a photographer."},{img:notemad, title:"Notemad", type:"Group Project", year:"2022", link:"https://github.com/NotemadOrg/notemad-app", desc:"A web app to help tourists and NYC locals track places they have and haven't visited. I took part building the map tracker with Leaflet API."}, 
                    {img:dorayaki, title:"Doraemon: Dorayaki Game", type:"Personal Project", year:"2022", link:"https://cherry-pie73.itch.io/doraemon-dorayaki-game", desc:"I build a mini game with p5.js based on Doraemon, a fictional character who loves to eat dorayaki. This is built for my Game Develpoment class."}, 
                    {img:cunyconnect, title:"CUNY Connect", type:"Group Project", year:"2021", link:"https://github.com/qhe1332/CUNY-Connect", desc:"A web application that connects CUNY students to other like minded CUNY students."},
                    {img:gudetama, title:"Gudetama's Home",type:"Individual Project", year:"2017", link:"https://github.com/qhe1332/GudetamaWeb", desc:"My first web developement project! This is a portfolio website for a sanrio character, Gudetama. Everything was build with HTML/CSS."}]}/>
                </div>
                <div className="subTitle">Media Projects</div>
                <div>
                    <ProjectSlide index="cardSlide2" 
                    slides={[{img:fakesmilejournal, title:"REAL SMiLe: Journal", type:"Individual Project", year:"2022", link:"https://www.canva.com/design/DAFBje0e5wM/c3fcFa-racbVL3JgPMBvwA/view?utm_content=DAFBje0e5wM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink", desc:"A mobile journal app to help combat depression. Designed with Adobe Illustration and prototyped with Adobe XD."},
                    {img:fakesmile, title:"REAL SMiLe: Campaign Design", type:"Individual Project", year:"2022", link:"https://drive.google.com/file/d/1-aqI32VEmquawj2RjXcRmsHb48ZbtKLL/view?usp=sharing", desc:"Campaign manual designed for the Don't Need to Fake that Smile Campaign. Prototyped with Adobe InDesign and Adobe Dimension."}, 
                    {img:christmasVideo, title:"Christmas Present Video", type:"Personal Project", year:"2021", link:"https://www.youtube.com/watch?v=dHJC57ugnRA", desc:"A short 2D animation video built with Adobe Illustration and After Effects."}, 
                    {img:psa, title:"Misinformation PSA", type:"Personal Project", year:"2021", link:"https://www.youtube.com/watch?v=4lUHmKPuA1M", desc:"A public service announcement video about misinformation and how to use Mike Caulfield's SIFT method to safely consume news and media."},
                    {img:piggie, title:"Wake Piggie Up",type:"Individual Project", year:"2020", link:"https://qhe1332.github.io/Personal_Media_Website/narrative/index.html", desc:"A interactive story with the mission to wake piggie up. This character was based on my pig stuff animal. Created with Adobe Illustration and HTML/CSS."}]}/>
                </div>
                <div className="subTitle">Game Development</div>
                <div>
                    <ProjectSlide index="cardSlide3" 
                    slides={[{img:orient, title:"Oriental Gallery Walking Simulator", type:"Individual Project", year:"2022", link:"https://cherry-pie73.itch.io/3d-orientalism-gallery", desc:"A orital art gallery simulator build using Unity."},
                    {img:dorayaki, title:"Doraemon: Dorayaki Game", type:"Personal Project", year:"2022", link:"https://cherry-pie73.itch.io/doraemon-dorayaki-game", desc:"I build a mini game with p5.js based on Doraemon, a fictional character who loves to eat dorayaki. This is built for my Game Develpoment class."}, 
                    {img:ghost, title:"Where's My Candy?", type:"Group Project", year:"2021", link:"https://cherry-pie73.itch.io/wheres-my-candy", desc:"A mini interaction game. Help Joe find his candy. Built with p5.js."}]}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;