import React from "react";
import "./footer.css";
import Logo from "../../images/images-topbar/Salon_image-31.png";
import Banner from "../banners/banner/banner";
import { useState } from "react";
import Image1 from "../../images/images-icons/icons2/facebook_icon.png";
import Image2 from "../../images/images-icons/icons2/instagram_icon.png";
import Image3 from "../../images/images-icons/icons2/tiktok_icon.png";
import Image4 from "../../images/images-icons/icons2/twiutter_icon.png";
import Image5 from "../../images/images-icons/icons2/snapchat_icon.png";

const Footer = () => {
const [cardFront, setCardFront] = useState(true);
const [cardBack, setCardBack] = useState(false);
const hideCardFront = () =>{
      setCardFront(false);
}
const showCardFront = () =>{
      setCardFront(true);
}
const showCardBack = () =>{
      setCardBack(true);
}
const hideCardBack = () =>{
      setCardBack(true);
}

    return(
       <div className="footer-body">
            <Banner/>
           <div className="footer-section-container">
               <div className="footer-content">
                   <div className="footer-contentInner">
                        <div className="footer-contentInner-img">
                            <img src={Logo} alt="/"/>
                        </div>

                        <div className="footer-contentInner-links1">
                               <h3>Link Section#1</h3>
                            <ul>
                                <li>Link1</li>
                                <li>Link2</li>
                                <li>Link3</li>
                                <li>Link4</li>
                                <li>Link5</li>
                                <li>Link6</li>
                                <li>Link7</li> 
                            </ul>
                        </div>

                        <div className="footer-contentInner-links2">
                               <h3>Link Section#2</h3>
                            <ul>
                                <li>Link1 Section2</li>
                                <li>Link2 Section2</li>
                                <li>Link3 Section2</li>
                                <li>Link4 Section2</li>
                                <li>Link5 Section2</li>
                                <li>Link6 Section2</li>
                                <li>Link7 Section2</li> 
                            </ul>
                        </div>

                        <div className="footer-contentInner-socialMedia-section">
                            <div className="footer-contentInner-socialMedia">
                                <div className="socialMedia-card-content"  onMouseEnter={hideCardFront} onMouseLeave={showCardFront}>                              
                                    {cardFront ? (<div className="cardFront-content glass" onMouseEnter={hideCardFront}>     
                                             <div className="cardFront-header"><h2>Connet WithUS!</h2></div>
                                               <div className="cardFront-imgContainer"/>
                                             <div className="cardFront-socialMedia-iconTags">
                                                  <ul>
                                                    <li className="iconTag-facebook"></li>
                                                    <li className="iconTag-instagram"></li>
                                                    <li className="iconTag-tikTok"></li>
                                                    <li className="iconTag-twitter"></li>
                                                    <li className="iconTag-snapChat"></li>
                                                  </ul>
                                             </div>
                                             <div className="cardFront-footer"></div>
                                    </div>) 
                                    : (<div className="cardBack-content" onMouseEnter={showCardBack} onMouseLeave={hideCardBack}>
                                        <div className="cardBack-contentSection">
                                            <div className="cardBack-socialLinks">
                                                
                                                <div className="iconTag-facebook-container">
                                                  <li className="iconTag-facebook"/>
                                                  <p>text content link</p>
                                                </div>

                                                <div className="iconTag-instagram-container">
                                                  <li className="iconTag-instagram"/>
                                                  <p>text content link</p> 
                                                </div>

                                                <div className="iconTag-tikTok-container">
                                                  <li className="iconTag-tikTok"/>
                                                  <p>text content link</p> 
                                                </div>

                                                <div className="iconTag-twitter-container">
                                                  <li className="iconTag-twitter"/>
                                                  <p>text content link</p>
                                                </div>
                                            
                                                <div className="iconTag-snapChat-container">
                                                  <li className="iconTag-snapChat"/>
                                                  <p>text content link</p>
                                                </div>  
                                            </div>
                                        </div>    
                                    </div>) 
                                    }
                                </div>                         
                               
                            </div>
                        </div>             
            </div>
                <div className="footer-copyRight">
                     <h3>Copy Right Here:</h3>
                </div>
                  <Banner/>
            </div>
        </div>
    </div>
)};

export default Footer;