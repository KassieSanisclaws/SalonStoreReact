import React from "react";
import "./serviceLinks.css";
import Image1 from "../../images/images-serviceStandard/securePayment_icon_Image.png";
import Image2 from "../../images/images-serviceStandard/email_icon_Image.png";
import Image3 from "../../images/images-serviceStandard/moneyReturn_icon_Image.png";
import Image4 from "../../images/images-serviceStandard/highestQuality_icon_Image.png";
import Image5 from "../../images/images-serviceStandard/appStore_icon_Image.png";

const ServiceLinks = () => {
   return(
      <div className="serviceLinks-body">
         <div className="serviceLinks-section">
             <div className="serviceLinks-section-container">
                <div className="serviceLinks-section-content">
                    <div className="serviceLinks-cards">
                        <div className="serviceLinks-card">
                            <img src={Image1} alt="securePayment" className="serviceLinks-card-img1"/>
                            <p>100% Secure Payments</p>
                        </div>
                        <div className="serviceLinks-card">
                            <img src={Image2} alt="customerService" className="serviceLinks-card-img2"/>
                            <p>Customert Service & Telephone</p>
                        </div>
                        <div className="serviceLinks-card">
                            <img src={Image3} alt="return" className="serviceLinks-card-img3"/>
                            <p>30 Days to cahnge your mind</p>
                        </div>
                        <div className="serviceLinks-card">
                            <img src={Image4} alt="highestQuality" className="serviceLinks-card-img4"/>
                            <p>Highest Quality Guarantee</p>
                        </div>
                        <div className="serviceLinks-card">
                            <img src={Image5} alt="appStore" className="serviceLinks-card-img5"/>
                            <p>card5</p>
                        </div>
                    </div>
                </div>
             </div>
         </div>
     </div>
)}

export default ServiceLinks;