import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabFour.css";
import Image2 from "../../../../../images/images-carousel/homeScreen/sales_image5.png";

const DropDownTabFour = () =>{
const [dropDownTabFour, setDropDownTabFour] = useState(false);
const showDropDownTabFour = () =>{
    setDropDownTabFour(true);
}
const hideDropDownTabFour = () =>{
    setDropDownTabFour(false);
}
    return(
        <div className="dropDownTabFour-body">
        <div className="dropDownTabFour-section-container">
            <div className="dropDownTabFour-section-content">
                <ul>
                    <div className="dropDownTabFour-tab" onMouseEnter={showDropDownTabFour}  onMouseLeave={hideDropDownTabFour}>
                      <h2>Bookings</h2>
                     {dropDownTabFour ? (<div className="dropDownTabFour"  onMouseEnter={showDropDownTabFour}>                   
                             <div className="dropDownTabFour-header"><h3>Bookings</h3></div>
                                 <div className="dropDownTabFour-content">
                                    <div className="dropDownTabFour-content-img">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabFour-content-img2">
                                      <img src={Image2} alt="/"/>
                                    </div>
                                    <div className="dropDownTabFour-content-links"> 
                                      <ul>
                                        <div className="dropDownTabFour-content-category">
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
                                      <div className="dropDownTabFour-content-style">
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
                                   <div className="dropDownTabFour-content-img3">
                                     <img src={Image2} alt="/"/>
                                   </div>  
                                   <div className="dropDownTabFour-content-img4">
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

export default DropDownTabFour;
