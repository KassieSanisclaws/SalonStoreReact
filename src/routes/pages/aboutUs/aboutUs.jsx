import React from "react";
import CardLocation from "../../../components/aboutUsPage/card-location/cardLocation";
import CardOwner from "../../../components/aboutUsPage/card-owner/cardOwner";
import CardTeam from "../../../components/aboutUsPage/card-team/cardTeam";
import CardTestimony from "../../../components/aboutUsPage/card-testimony/cardTestimony";
import BannerImageCopy from "../../../components/banners/banner-image-copy/bannerImageCopy";
import BannerImage from "../../../components/banners/banner-image/bannerImage";
import Banner from "../../../components/banners/banner/banner";
import "./aboutUs.css";


const AboutUs = () => {
   return (
     <div className="aboutUs-body">  
           <Banner/>
           <BannerImage/>
        <div className="aboutUs-section-container"> 
        <div className="aboutUs-content">
           <CardOwner/>
           <CardLocation/>
           <BannerImageCopy/>
           <CardTestimony/>
           <CardTeam/>
        </div>         
        </div>
     </div>  
)};

export default AboutUs;