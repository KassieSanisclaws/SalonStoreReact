import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
const credentials = useSelector((state) => state.authenticate);
const { userInfo } = credentials;
console.log(userInfo)

    return ( 
      <>
            <nav>
                <div className="header1">
                   <div className="logo"/>

                   <div className="nav-links-location"> 
                     <ul className="nav-links-items">
                     <li><p>FAQs</p></li>   
                     <li><p>ENGLISH</p></li>
                     <li><p>CAN</p></li>
                     <div className="location-flag" />
                     </ul>            
                   </div>

                   <div className="location-links">
                    <input />
                      <div className="location-img"/>
                   </div>
                       
                <ul className="nav-links">
                   <li><Link to="/"><div className="home-icon"/><span>Home</span></Link></li>
                   <li><Link to="/favourites"><div className="favourites-icon"/><span>Favourite's</span></Link></li>
                   <li>
                     { userInfo ? ( <div className="dropdown">
                      <Link to="/"> <div className="userIcon"/>{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                          <li><Link to="/profile">User Profile</Link></li>
                          <li><Link to="/orderhistory">Order History</Link></li>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="#signout" onClick={""}>Sign Out</Link></li>
                        </ul> </div>) : (
                      <Link to="/login"><div className="login-icon"/><span>Login/Register</span></Link>)}
                   </li>
                   <li><Link to="/aboutUs"><div className="aboutUs-icon" /><span>AboutUs</span></Link></li>
                   <li><Link to="/"><div className="shopCart-icon"/><span>ShopBag</span></Link></li>
                </ul>
                   <button><Link to="/contactUs"><div className="contact-icon" /><span>Contact</span></Link></button> 
               </div>  
            </nav>
    </>
    )
};

export default TopBar;