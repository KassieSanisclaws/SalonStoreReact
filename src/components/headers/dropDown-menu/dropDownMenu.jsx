import React from "react";
import "./dropDownMenu.css";

const DropDownMenu = () => {
   return(
       <div className="dropDownMenu-body">
           <div className="dropDownMenu-section-container">
                <div className="dropDownMenu-content">
                    <ul>
                      <li><a href="/">Wigs</a></li>
                      <li><a href="/">Braids</a></li>
                      <li><a href="/">Extentions</a></li>
                      <li><a href="/">Toddlers</a></li>
                      <li><a href="/">Boys</a></li>
                      <li><a href="/">Girls</a></li>
                    </ul>
                </div>
           </div>
       </div>
)};

export default DropDownMenu;