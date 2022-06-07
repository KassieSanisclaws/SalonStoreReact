import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownTabTwo.css";
import Image2 from "../../../../../images/images-home/sales_image_4.png";

const DropDownTabTwo = () => {
const [dropDownTabTwo, setDropDownTabTwo] = useState(false);
const showDropDownTabTwo = () =>{
    setDropDownTabTwo(true);
}
const hideDropDownTabTwo = () =>{
    setDropDownTabTwo(false);
}
   return(
    <div className="dropDownTabTwo-body">
    <div className="dropDownTabTwo-section-container">
        <div className="dropDownTabTwo-section-content">
            <ul>
                <div className="dropDownTabTwo-tab" onMouseEnter={showDropDownTabTwo}  onMouseLeave={hideDropDownTabTwo}>
                  <h2>Fashion</h2>
                 {dropDownTabTwo ? (<div className="dropDownTabTwo"  onMouseEnter={showDropDownTabTwo}>                   
                         <div className="dropDownTabTwo-header"><h3>Fashion</h3></div>
                             <div className="dropDownTabTwo-content">
                                <div className="dropDownTabTwo-content-img">
                                  <img src={Image2} alt="/"/>
                                </div>
                                <div className="dropDownTabTwo-content-img2">
                                  <img src={Image2} alt="/"/>
                                </div>
                                <div className="dropDownTabTwo-content-links"> 
                                  <ul>
                                    <div className="dropDownTabTwo-content-category">
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
                                  <div className="dropDownTabTwo-content-style">
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
                               <div className="dropDownTabTwo-content-img3">
                                 <img src={Image2} alt="/"/>
                               </div>  
                               <div className="dropDownTabTwo-content-img4">
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

export default DropDownTabTwo;