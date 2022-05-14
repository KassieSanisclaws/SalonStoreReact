import React, { useState } from "react";
import "./carousel.css";
import { CarouselDataSlider } from "../../data/carousel-data/carouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const Carousel = ({imagesCarousels}) => {
    const [ current, setCurrent ] = useState(0);
    const length = imagesCarousels.length;

const nextImage = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
};

const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
};

if (!Array.isArray(imagesCarousels) || imagesCarousels.length <= 0){
    return null;
}

 return (
        <div className="carousel-body">
            <div className="carousel-section">
                <div className="carousel-section-container">
                  <FaArrowAltCircleLeft className="left-arrow" onClick={prevImage}/>
                  <FaArrowAltCircleRight className="right-arrow" onClick={nextImage}/>  
                    {CarouselDataSlider.map((imagesCarousel, index) => {
                        return(
                         <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (
                                <img src={imagesCarousel.image} alt="/" className="image"/>
                            )}
                         </div>
                      )
                    })}
                </div>
            </div>
        </div>
 )};

export default Carousel;