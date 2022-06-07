import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabThree.css";
import Image2 from "../../../../../images/images-home/sales_image_3.png";

const DropDownTabThree = () =>{
const [dropDownTabThree, setDropDownTabThree] = useState(false);
const showDropDownTabThree = () =>{
    setDropDownTabThree(true);
}
const hideDropDownTabThree = () =>{
    setDropDownTabThree(false);
}
    return(
        <div className="dropDownTabThree-body">
        <div className="dropDownTabThree-section-container">
            <div className="dropDownTabThree-section-content">
                <ul>
                    <div className="dropDownTabThree-tab" onMouseEnter={showDropDownTabThree}  onMouseLeave={hideDropDownTabThree}>
                      <h2>Deals</h2>
                     {dropDownTabThree ? (<div className="dropDownTabThree"  onMouseEnter={showDropDownTabThree}>                   
                             <div className="dropDownTabThree-header"><h3>Deals</h3></div>
                                 <div className="dropDownTabThree-content">
                                    <div className="dropDownTabThree-content-img">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabThree-content-img2">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabThree-content-links"> 
                                      <ul>
                                        <div className="dropDownTabThree-content-category">
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
                                      <div className="dropDownTabThree-content-style">
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
                                   <div className="dropDownTabThree-content-img3">
                                     <img src={Image2} alt="/"/>
                                   </div>  
                                   <div className="dropDownTabThree-content-img4">
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

export default DropDownTabThree;