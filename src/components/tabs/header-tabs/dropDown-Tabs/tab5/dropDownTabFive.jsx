import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabFive.css";
import Image2 from "../../../../../images/images-carousel/homeScreen/sales_image1.png";

const DropDownTabFive = () =>{
const [dropDownTabFive, setDropDownTabFive] = useState(false);
const showDropDownTabFive = () =>{
    setDropDownTabFive(true);
}
const hideDropDownTabFive = () =>{
    setDropDownTabFive(false);
}
    return(
<div className="dropDownTabThree-body">
        <div className="dropDownTabThree-section-container">
            <div className="dropDownTabThree-section-content">
                <ul>
                    <div className="dropDownTabThree-tab" onMouseEnter={showDropDownTabFive}  onMouseLeave={hideDropDownTabFive}>
                      <h2>Reviews</h2>
                     {dropDownTabFive ? (<div className="dropDownTabFive"  onMouseEnter={showDropDownTabFive}>                   
                             <div className="dropDownTabFive-header"><h3>Reviews</h3></div>
                                 <div className="dropDownTabFive-content">
                                    <div className="dropDownTabFive-content-img">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabFive-content-img2">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabFive-content-links"> 
                                      <ul>
                                        <div className="dropDownTabFive-content-category">
                                           <h3>Header:</h3>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                      </div>
                                      <div className="dropDownTabFive-content-style">
                                          <h3>Header:2</h3>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                        <li><Link to="/login"><p>login</p></Link></li>
                                        <li><Link to=""><p>reguster</p></Link></li>
                                      </div>
                                    </ul>                 
                                    </div>
                                   <div className="dropDownTabFive-content-img3">
                                     <img src={Image2} alt="/"/>
                                   </div>  
                                   <div className="dropDownTabFive-content-img4">
                                     <img src={Image2} alt="/"/>
                                   </div>                                                   
                                 </div>
                          </div>) : null}               
                      </div>
                </ul>
            </div>
        </div>
    </div>
)}

export default DropDownTabFive;