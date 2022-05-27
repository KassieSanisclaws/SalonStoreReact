import React from "react";
import ClearanceBanner from "../../../components/banners/banner-clearance/clearanceBanner";
import BHotListItem from "../../../components/banners/banner-hotListItems/bHotListItem";
import BBHotListItem from "../../../components/banners/banner-hotListItems2/bbHotListItem";
import NewArrivals from "../../../components/banners/banner-newArrivals/newArrivals";
import BannerSales from "../../../components/banners/banner-sales/bannerSales";
import TrendingStylesBanner from "../../../components/banners/banner-trendingStyles/trendingStylesBanner";
import Banner from "../../../components/banners/banner/banner";
import HotListItemButton from "../../../components/buttons/hotListItem-button/hotListItemButton";
import Carousel from "../../../components/carousel/carousel";
import { Categories } from "../../../components/categories/categories";
import DropDownMenu from "../../../components/headers/dropDown-menu/dropDownMenu";
import Navigator from "../../../components/headers/navigator/navigator";
import HiSummer from "../../../components/hi-summer/hiSummer";
import { HotItems } from "../../../components/hot-items/hotItems";
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
               <HotItems/>
               <br/>
               <HotListItemButton/>
               <br/>
               <br/>
               <br/>
               <BHotListItem/>
               <br/>
               <BBHotListItem/>
               <br/>
               <br/>
               <br/>
               <NewArrivals/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <TrendingStylesBanner/>
               <br/>
               <HiSummer/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <ClearanceBanner/>
         </div>
     </div>
)};

export default Home;
