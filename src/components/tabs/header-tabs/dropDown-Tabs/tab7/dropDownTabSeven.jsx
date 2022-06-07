import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabSeven.css";
import Image2 from "../../../../../images/images-carousel/homeScreen/sales_image3.png";

const DropDownTabSeven = () => {
const [dropDownTabSeven, setDropDownTabSeven] = useState(false);
const showDropDownTabSeven = () =>{
    setDropDownTabSeven(true);
}
const hideDropDownTabSeven = () =>{
    setDropDownTabSeven(false);
}
    return(
        <div className="dropDownTabSeven-body">
        <div className="dropDownTabSeven-section-container">
            <div className="dropDownTabSeven-section-content">
                <ul>
                    <div className="dropDownTabSeven-tab" onMouseEnter={showDropDownTabSeven}  onMouseLeave={hideDropDownTabSeven}>
                      <h2>What's New</h2>
                     {dropDownTabSeven ? (<div className="dropDownTabSeven"  onMouseEnter={showDropDownTabSeven}>                   
                             <div className="dropDownTabSeven-header"><h3>What's New</h3></div>
                                 <div className="dropDownTabSeven-content">
                                    <div className="dropDownTabSeven-content-img">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabSeven-content-img2">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabSeven-content-links"> 
                                      <ul>
                                        <div className="dropDownTabSeven-content-category">
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
                                      <div className="dropDownTabSeven-content-style">
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
                                   <div className="dropDownTabSeven-content-img3">
                                     <img src={Image2} alt="/"/>
                                   </div>  
                                   <div className="dropDownTabSeven-content-img4">
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

export default DropDownTabSeven;