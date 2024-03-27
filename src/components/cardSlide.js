import React from "react";
import ProjectContainer from "../components/projectBox"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


function ProjectSlide(prop) {
    const slides = prop.slides;
    const slideLeft = () => {
        var slider = document.getElementById(prop.index);
        slider.scrollLeft = slider.scrollLeft - 340;
    }
    const slideRight = () => {
        var slider = document.getElementById(prop.index);
        slider.scrollLeft = slider.scrollLeft + 340;
    }
    return (
        <div className="cardSlider-wrapper">
            <MdChevronLeft size={48} className="slider-icon left" onClick={slideLeft} />
            <div id={prop.index} className="cardSlide">
                {slides.map((slide, index) => {
                    return (
                        <ProjectContainer
                            key={index}
                            img={slide.img}
                            title={slide.title}
                            type={slide.type}
                            year={slide.year}
                            link={slide.link}
                            desc={slide.desc} />
                    )
                })}
            </div>
            <MdChevronRight size={48} className="slider-icon right" onClick={slideRight} />
        </div>

    );
}

export default ProjectSlide;