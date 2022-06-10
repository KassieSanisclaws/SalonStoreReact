import React, { useState } from "react";
import "./hamburger.css";

const Hamburger = () =>{
const [hamburgerDisplayOpen, setHamburgerDisplayOpen] = useState(false);
const showHamburgerDisplay = () => setHamburgerDisplayOpen(!hamburgerDisplayOpen);
  return(
     <div className="hamburger-body">
         <div className="hamburger-section-container">
            <div className="hamburger-section-content">           
                <div className="hamburger menuToggle" onClick={showHamburgerDisplay}>
                      <span className={hamburgerDisplayOpen ? "rotate-hamburger-firstChild active" : "rotate-hamburger"}/>
                      <span  className={hamburgerDisplayOpen ? "rotate-hamburger-ninthChild active" : "rotate-hamburger"}/>
                      <span  className={hamburgerDisplayOpen ? "rotate-hamburger-ninthChild active" : "rotate-hamburger"}/>
                      <span  className={hamburgerDisplayOpen ? "rotate-hamburger-lastChild active" : "rotate-hamburger"}/>
                </div>
                 <div className={hamburgerDisplayOpen ? "hamburger-menu active" : "hamburger-menu"}>
                     <ul className="hamburger-menuItems">
                         <div>
                             <h1>Header section</h1>
                         </div>
                       
                        <div>
                            <h2>section 2</h2>
                            <li>
                               another section
                           </li>

                         <br/>

                            <li>
                            <div>
                                another section 3
                            </div>
                            <div>
                                another section 4
                            </div>
                          </li>
                       </div>

                       <div>
                           <h2>Section three</h2>
                           <li>another section</li>
                           <li>another section2</li>
                           <li>another section3</li>
                       </div>

                       <div>
                        <h2>section four</h2>
                        <li>another section tag</li>
                        <li>another section tag2</li>
                        <li>another section tag3</li> 
                       </div>
                        
                     </ul> 
                 </div>
            
            </div>
         </div>
     </div>
)}

export default Hamburger;