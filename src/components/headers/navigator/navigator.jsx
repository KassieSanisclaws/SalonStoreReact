import React from "react";
import "./navigator.css";


const Navigator = () => {
    return(
      <div className="navigator-body">
          <div className="navigator-section-container">
              <div className="navigator-content">
                   <div className="hamburger-menu">
                      <label><span></span><span></span><span></span><span></span></label>
                   </div>

                   <div className="navigator-links-content">
                       <div className="navigator-links">
                            <ul>
                               <li><a href="/">New Releases</a></li>
                               <li><a href="/">Fashion</a></li>
                               <li><a href="/">Deals</a></li>
                               <li><a href="/">Bookings</a></li>
                               <li><a href="/">Reviews</a></li>
                               <li><a href="/">Franchise</a></li>
                               <li><a href="/">What's New</a></li>
                            </ul>
                       </div>
                    <div className="navigator-company-slogan">
                            <h3>We Know What You Like</h3>
                    </div> 
                </div>

              </div>
          </div>  
      </div>
)};

export default Navigator;
