import React from "react";
import BannerSales from "../../../components/banners/banner-sales/bannerSales";
import Banner from "../../../components/banners/banner/banner";
import Carousel from "../../../components/carousel/carousel";
import { Categories } from "../../../components/categories/categories";
import DropDownMenu from "../../../components/headers/dropDown-menu/dropDownMenu";
import Navigator from "../../../components/headers/navigator/navigator";
import { CarouselDataSlider }  from "../../../data/carousel-data/carouselData";
import "./home.css";


const Home = () => {
    return (
     <div className="home-body">
         <div className="home-components"> 
         <Navigator/>
         <Banner/> 
         <DropDownMenu/>
         </div>
         <div className="home-section-container">
               <Carousel imagesCarousels={CarouselDataSlider}/>
               <BannerSales/>
               <Categories/>
         </div>
     </div>
)};

export default Home;
