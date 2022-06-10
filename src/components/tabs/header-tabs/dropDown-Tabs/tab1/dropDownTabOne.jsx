import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabOne.css";
import Image2 from "../../../../../images/images-home/sales_image_6.png";

const DropDownTabOne = () => {
const [dropDownTabOne, setDropDownTabOne] = useState(false);
const showDropDownTabOne = () =>{
    setDropDownTabOne(true);
}
const hideDropDownTabOne = () =>{
    setDropDownTabOne(false);
}
    return(
      <div className="dropDownTabOne-body">
          <div className="dropDownTabOne-section-container">
              <div className="dropDownTabOne-section-content">
                  <ul>
                      <div className="dropDownTabOne-tab" onMouseEnter={showDropDownTabOne}  onMouseLeave={hideDropDownTabOne}>
                        <h2>New Releases</h2>
                       {dropDownTabOne ? (  <div className="dropDownTabOne"  onMouseEnter={showDropDownTabOne}>                   
                               <div className="dropDownTabOne-header"><h3>New Releases</h3></div>
                                   <div className="dropDownTabOne-content">  
                                      <div className="dropDownTabOne-content-img">
                                        <img src={Image2} alt="/"/>
                                      </div>
                                      <div className="dropDownTabOne-content-img2">
                                        <img src={Image2} alt="/"/>
                                      </div>
                                      <div className="dropDownTabOne-content-links"> 
                                        <ul>
                                          <div className="dropDownTabOne-content-category">
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
                                        <div className="dropDownTabOne-content-style">
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
                                     <div className="dropDownTabOne-content-img3">
                                       <img src={Image2} alt="/"/>
                                     </div>  
                                     <div className="dropDownTabOne-content-img4">
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

export default DropDownTabOne;