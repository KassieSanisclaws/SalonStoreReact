import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabSix.css";
import Image2 from "../../../../../images/images-carousel/homeScreen/sales_image2.png";

const DropDownTabSix = () =>{
const [dropDownTabSix, setDropDownTabSix] = useState(false);
const showDropDownTabSix = () =>{
    setDropDownTabSix(true);
}
const hideDropDownTabSix = () =>{
    setDropDownTabSix(false);
}
    return(
        <div className="dropDownTabThree-body">
        <div className="dropDownTabThree-section-container">
            <div className="dropDownTabThree-section-content">
                <ul>
                    <div className="dropDownTabThree-tab" onMouseEnter={showDropDownTabSix}  onMouseLeave={hideDropDownTabSix}>
                      <h2>Franchise</h2>
                     {dropDownTabSix ? (<div className="dropDownTabSix"  onMouseEnter={showDropDownTabSix}>                   
                             <div className="dropDownTabSix-header"><h3>Franchise</h3></div>
                                 <div className="dropDownTabSix-content">
                                    <div className="dropDownTabSix-content-img">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabSix-content-img2">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabSix-content-links"> 
                                      <ul>
                                        <div className="dropDownTabSix-content-category">
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
                                      <div className="dropDownTabSix-content-style">
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
                                   <div className="dropDownTabSix-content-img3">
                                     <img src={Image2} alt="/"/>
                                   </div>  
                                   <div className="dropDownTabSix-content-img4">
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
export default DropDownTabSix;
