import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarouselDisplayData from "../../data/carousel-data/carouselDisplayData";
import HiSummerDisplayData from "../../data/hiSummer-data/hiSummerDisplayData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./hiSummer.css";

const HiSummer = () => {
 const [current, setCurrent] = useState(1);
 const length = CarouselDisplayData.carouselDisplay.length;
 const nextImage = () => {
     setCurrent(current === length -0 ? 1 : current + 1);
 };
 const prevImage = () => {
     setCurrent(current === 1 ? length - 1 : current - 1);
 };
 if (!Array.isArray(CarouselDisplayData.carouselDisplay) || CarouselDisplayData.carouselDisplay.length <= 0){
    return null;
}
   return(
      <div className="hiSummer-body">
          <div className="hiSummer-section">
              <div className="hiSummer-section-container">
                  <div className="hiSummer-header">
                     <h1>H! Summer:</h1>
                  </div>
                  <div className="hiSummer-carousel">
                      <FaArrowAltCircleLeft className="left-arrow" onClick={prevImage}/>
                      <FaArrowAltCircleRight className="right-arrow" onClick={nextImage}/>
                      <div  className="hiSummer-carousel-innerContent">                
                         {
                         CarouselDisplayData.carouselDisplay.map(carouselDisplay => {
                             return(
                                   <div  key={carouselDisplay._id} className={carouselDisplay._id === current ? "slide active" : "slide"}> 
                                   {carouselDisplay._id === current && (
                                       <Link to={`/newDesigns/${carouselDisplay._id}`}>
                                    <div className="hiSummer-carousel-contentImg">
                                        <img src={carouselDisplay.image} alt={carouselDisplay.name}/>
                                    </div>
                                </Link>    
                                   )}   
                            </div>
                             )
                         })           
                         }
                      </div>
                  </div>
                  <div className="hiSummer-inner-content">
                      <div className="hiSummer-img1">
                             {
                               HiSummerDisplayData.hiSummerDisplayOne.map(hiSummerDisplayOne => (
                                   <div key={hiSummerDisplayOne._id} className="hiSummer-img1-content">
                                       <Link to={`/hiSummer/${hiSummerDisplayOne._id}`}>
                                         <div className="hiSummer-img1-contentImg">
                                             <img src={hiSummerDisplayOne.image} alt={hiSummerDisplayOne.name}/>
                                         </div>
                                       </Link>
                                   </div>
                               ))
                             }
                       </div>
                      <div className="hiSummer-img2">
                          <div className="hiSummer-img2-card1">
                              {
                                HiSummerDisplayData.hiSummerDisplayTwo.map(hiSummerDisplayTwo => (
                                    <div key={hiSummerDisplayTwo._id} className="hiSummer-img2-card1Content">
                                        <Link to={`/hiSummer/${hiSummerDisplayTwo._id}`}>
                                            <div className="hiSummer-img2-card1Content-img">
                                                <img src={hiSummerDisplayTwo.image} alt={hiSummerDisplayTwo.name}/>
                                            </div>
                                        </Link>
                                    </div>   
                                ))
                              }
                          </div>
                          <div className="hiSummer-img2-card2">
                              {
                                HiSummerDisplayData.hiSummerDisplayThree.map(hiSummerDisplayThree => (
                                    <div key={hiSummerDisplayThree._id} className="hiSummer-img2-card1Content">
                                        <Link to={`/hiSummer/${hiSummerDisplayThree._id}`}>
                                            <div className="hiSummer-img2-card1Content-img">
                                                <img src={hiSummerDisplayThree.image} alt={hiSummerDisplayThree.name}/>
                                            </div>
                                        </Link>
                                    </div>   
                                ))
                              }
                          </div>
                      </div>
                      <div className="hiSummer-img3">
                           {
                             HiSummerDisplayData.hiSummerDisplayFour.map(hiSummerDisplayFour => (
                                 <div key={hiSummerDisplayFour._id} className="hiSummer-img3-cardContent">
                                     <Link to={`/hiSummer/${hiSummerDisplayFour._id}`}>
                                        <div className="hiSummer-img3-cardContentImg">
                                            <img src={hiSummerDisplayFour.image} alt={hiSummerDisplayFour.name}/>
                                        </div>
                                     </Link>
                                 </div>
                             ))
                           }
                      </div>
                  </div>
              </div>
          </div>
      </div>
)}

export default HiSummer;