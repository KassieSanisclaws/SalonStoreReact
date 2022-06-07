import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropDownMenu.css";
import Image22 from "../../../images/images-home/sales_image_3.png";

const DropDownMenu = () => {
  const [state, setState] = useState(false);
  const showDropDown = () =>{
    setState(true);
  }
  const hideDropDown = () =>{
    setState(false);
  }
  const [braids, setBraids] = useState(false);
  const showDropDownTwo = () =>{
    setBraids(true);
  }
  const hideDropDownTwo = () =>{
    setBraids(false);
  }
  const [stateThree, setStateThree] = useState(false);
  const showDropDownThree = () =>{
    setStateThree(true);
  }
  const hideDropDownThree = () =>{
    setStateThree(false);
  }
  const [stateFour, setStateFour] = useState(false);
  const showDropDownFour = () =>{
    setStateFour(true);
  }
  const hideDropDownFour = () =>{
    setStateFour(false);
  }
  const [stateFive, setStateFive] = useState(false);
  const showDropDownFive = () =>{
    setStateFive(true);
  }
  const hideDropDownFive = () =>{
    setStateFive(false);
  }
  const [stateSix, setStateSix] = useState(false);
  const showDropDownSix = () =>{
    setStateSix(true);
  }
  const hideDropDownSix = () =>{
    setStateSix(false);
  }
  const [stateSeven, setStateSeven] = useState(false);
  const showDropDownSeven = () =>{
    setStateSeven(true);
  }
  const hideDropDownSeven = () =>{
    setStateSeven(false);
  }
  
   return(
       <div className="dropDownMenu-body">
           <div className="dropDownMenu-section-container">
                <div className="dropDownMenu-content">
                    <ul>
                      <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDown}  onMouseLeave={hideDropDown}>
                        <h2 className="link">Wigs</h2>
                       {state ? (  <div className="dropDownMenu gridMenu"  onMouseEnter={showDropDown}>                   
                               <div className="dropDownMenu-gridHeader1"><h3>Wigs</h3></div>
                                   <div className="dropDownMenu-gridContent1">
                                      <div className="dropDownMenu-gridContent1-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent1-img2">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent1-links"> 
                                        <ul>
                                          <div className="dropDownMenu-gridContent1-category">
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
                                        <div className="dropDownMenu-gridContent1-style">
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
                                     <div className="dropDownMenu-gridContent1-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                        </div>
                     </div>
                      
                    <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDownTwo}  onMouseLeave={hideDropDownTwo}>
                        <h2 className="link">Braids</h2>
                       {braids ? (  <div className="dropDownMenu gridMenu2"  onMouseEnter={showDropDownTwo}>                   
                               <div className="dropDownMenu-gridHeader2"><h3>Braids</h3></div>
                                   <div className="dropDownMenu-gridContent2">
                                      <div className="dropDownMenu-gridContent2-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent2-img2">
                                        <Link to="/login"><img src={Image22} alt="/"/></Link>
                                      </div>
                                      <div className="dropDownMenu-gridContent2-links"> 
                                      <ul>
                                        <div className="dropDownMenu-gridContent2-category">
                                          <h3>Header:</h3>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                        </div>
                                        <div className="dropDownMenu-gridContent2-style">
                                          <h3>Header: Styles</h3>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                          <li><Link to="/login"><p>login</p></Link></li>
                                          <li><Link to=""><p>register</p></Link></li>
                                        </div>
                                      </ul>
                                      </div>
                                     <div className="dropDownMenu-gridContent2-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                         </div>
                     </div>

                     <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDownThree}  onMouseLeave={hideDropDownThree}>
                        <h2 className="link">Extentions</h2>
                       {stateThree ? (  <div className="dropDownMenu gridMenu3"  onMouseEnter={showDropDownThree}>                   
                               <div className="dropDownMenu-gridHeader3"><h3>Extentions</h3></div>
                                   <div className="dropDownMenu-gridContent3">
                                      <div className="dropDownMenu-gridContent3-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent3-img2">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent3-links"> 
                                        <ul>
                                          <div className="dropDownMenu-gridContent3-category">
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
                                        <div className="dropDownMenu-gridContent3-style">
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
                                     <div className="dropDownMenu-gridContent3-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                      </div>
                    </div>

                    <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDownFour}  onMouseLeave={hideDropDownFour}>
                        <h2 className="link">Toddlers</h2>
                       {stateFour ? (  <div className="dropDownMenu gridMenu4"  onMouseEnter={showDropDownFour}>                   
                               <div className="dropDownMenu-gridHeader4"><h3>Toddlers</h3></div>
                                   <div className="dropDownMenu-gridContent4">
                                      <div className="dropDownMenu-gridContent4-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent4-img2">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent4-links"> 
                                        <ul>
                                          <div className="dropDownMenu-gridContent4-category">
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
                                        <div className="dropDownMenu-gridContent4-style">
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
                                     <div className="dropDownMenu-gridContent4-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                      </div>
                    </div>

                    <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDownFive}  onMouseLeave={hideDropDownFive}>
                        <h2 className="link">Maternity & Nursing</h2>
                       {stateFive ? (  <div className="dropDownMenu gridMenu5"  onMouseEnter={showDropDownFive}>                   
                               <div className="dropDownMenu-gridHeader5"><h3>Maternity&Nursing</h3></div>
                                   <div className="dropDownMenu-gridContent5">
                                      <div className="dropDownMenu-gridContent5-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent5-img2">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent5-links"> 
                                        <ul>
                                          <div className="dropDownMenu-gridContent5-category">
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
                                        <div className="dropDownMenu-gridContent5-style">
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
                                     <div className="dropDownMenu-gridContent5-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                      </div>
                    </div>

                    <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDownSix}  onMouseLeave={hideDropDownSix}>
                        <h2 className="link">Boys</h2>
                       {stateSix ? (  <div className="dropDownMenu gridMenu6"  onMouseEnter={showDropDownSix}>                   
                               <div className="dropDownMenu-gridHeader6"><h3>Boys</h3></div>
                                   <div className="dropDownMenu-gridContent6">
                                      <div className="dropDownMenu-gridContent6-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent6-img2">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent6-links"> 
                                        <ul>
                                          <div className="dropDownMenu-gridContent6-category">
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
                                        <div className="dropDownMenu-gridContent6-style">
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
                                     <div className="dropDownMenu-gridContent6-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                      </div>
                    </div>
                      
                    <div>
                      <div className="dropDownMenu-tabs" onMouseEnter={showDropDownSeven}  onMouseLeave={hideDropDownSeven}>
                        <h2 className="link">Girls</h2>
                       {stateSeven ? (  <div className="dropDownMenu gridMenu7"  onMouseEnter={showDropDownSeven}>                   
                               <div className="dropDownMenu-gridHeader7"><h3>Girls</h3></div>
                                   <div className="dropDownMenu-gridContent7">
                                      <div className="dropDownMenu-gridContent7-img1">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent7-img2">
                                        <img src={Image22} alt="/"/>
                                      </div>
                                      <div className="dropDownMenu-gridContent7-links"> 
                                        <ul>
                                          <div className="dropDownMenu-gridContent7-category">
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
                                        <div className="dropDownMenu-gridContent7-style">
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
                                     <div className="dropDownMenu-gridContent7-img3">
                                       <img src={Image22} alt="/"/>
                                     </div>                                                      
                                   </div>
                            </div>) : null}               
                      </div>
                    </div>

                    </ul>
                </div>
           </div>
       </div>
)};

export default DropDownMenu;