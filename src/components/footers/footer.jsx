import React from "react";
import "./footer.css";
import Logo from "../../images/images-topbar/Salon_image-31.png";
import Banner from "../banners/banner/banner";

const Footer = () => {
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
                                     <h2>Our Social Media:</h2>
                                <div className="socialMedia-card">

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