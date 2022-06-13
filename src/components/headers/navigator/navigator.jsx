import React from "react";
import Hamburger from "../../hamburger/hamburger";
import DropDownTabOne from "../../tabs/header-tabs/dropDown-Tabs/tab1/dropDownTabOne";
import DropDownTabTwo from "../../tabs/header-tabs/dropDown-Tabs/tab2/dropDownTabTwo";
import DropDownTabThree from "../../tabs/header-tabs/dropDown-Tabs/tab3/dropDownTabThree";
import DropDownTabFour from "../../tabs/header-tabs/dropDown-Tabs/tab4/dropDownTabFour";
import DropDownTabFive from "../../tabs/header-tabs/dropDown-Tabs/tab5/dropDownTabFive";
import DropDownTabSix from "../../tabs/header-tabs/dropDown-Tabs/tab6/dropDownTabSix";
import DropDownTabSeven from "../../tabs/header-tabs/dropDown-Tabs/tab7/dropDownTabSeven";
import "./navigator.css";


const Navigator = () => {

    return(
      <div className="navigator-body">
          <div className="navigator-section-container">
              <div className="navigator-content">
                   <div className="hamburger-menu">
                       {/* <span/>
                       <span/>
                       <span/>
                       <span/> */}
                       <Hamburger/>
                   </div>

                   <div className="navigator-links-content">
                       <div className="navigator-links">
                            <ul>
                               <DropDownTabOne/>
                               <DropDownTabTwo/>
                               <DropDownTabThree/>
                               <DropDownTabFour/>
                               <DropDownTabFive/>
                               <DropDownTabSix/>
                               <DropDownTabSeven/>
                            </ul>
                       </div>
                    <div className="navigator-company-slogan">
                            <h3>We Know What You Like</h3>
                    </div> 
                </div>

              </div>
          </div>  
      </div>
)};

export default Navigator;
