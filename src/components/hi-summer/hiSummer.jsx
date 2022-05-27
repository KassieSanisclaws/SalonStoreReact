import React from "react";
import { Link } from "react-router-dom";
import HiSummerDisplayData from "../../data/hiSummer-data/hiSummerDisplayData";
import "./hiSummer.css";

const HiSummer = () => {
   return(
      <div className="hiSummer-body">
          <div className="hiSummer-section">
              <div className="hiSummer-section-container">
                  <div className="hiSummer-header">
                     <h1>H! Summer:</h1>
                  </div>
                  <div className="hiSummer-carousel">
                    <p>carousel content Here:</p>
                    
                  </div>
                  <div className="hiSummer-inner-content">
                      <div className="hiSummer-img1">
                             {
                               HiSummerDisplayData.hiSummerDisplayOne.map(hiSummerDisplayOne => (
                                   <div key={hiSummerDisplayOne._id} className="hiSummer-img1-content">
                                       <Link to={`/hiSummer/${hiSummerDisplayOne._id}`}>
                                         <div className="hiSummer-img1-contentImg">
                                             <img src={hiSummerDisplayOne.image} alt={hiSummerDisplayOne.name}/>
                                         </div>
                                       </Link>
                                   </div>
                               ))
                             }
                       </div>
                      <div className="hiSummer-img2">
                          <div className="hiSummer-img2-card1">
                              {
                                HiSummerDisplayData.hiSummerDisplayTwo.map(hiSummerDisplayTwo => (
                                    <div key={hiSummerDisplayTwo._id} className="hiSummer-img2-card1Content">
                                        <Link to={`/hiSummer/${hiSummerDisplayTwo._id}`}>
                                            <div className="hiSummer-img2-card1Content-img">
                                                <img src={hiSummerDisplayTwo.image} alt={hiSummerDisplayTwo.name}/>
                                            </div>
                                        </Link>
                                    </div>   
                                ))
                              }
                          </div>
                          <div className="hiSummer-img2-card2">
                              {
                                HiSummerDisplayData.hiSummerDisplayThree.map(hiSummerDisplayThree => (
                                    <div key={hiSummerDisplayThree._id} className="hiSummer-img2-card1Content">
                                        <Link to={`/hiSummer/${hiSummerDisplayThree._id}`}>
                                            <div className="hiSummer-img2-card1Content-img">
                                                <img src={hiSummerDisplayThree.image} alt={hiSummerDisplayThree.name}/>
                                            </div>
                                        </Link>
                                    </div>   
                                ))
                              }
                          </div>
                      </div>
                      <div className="hiSummer-img3">
                           {
                             HiSummerDisplayData.hiSummerDisplayFour.map(hiSummerDisplayFour => (
                                 <div key={hiSummerDisplayFour._id} className="hiSummer-img3-cardContent">
                                     <Link to={`/hiSummer/${hiSummerDisplayFour._id}`}>
                                        <div className="hiSummer-img3-cardContentImg">
                                            <img src={hiSummerDisplayFour.image} alt={hiSummerDisplayFour.name}/>
                                        </div>
                                     </Link>
                                 </div>
                             ))
                           }
                      </div>
                  </div>
              </div>
          </div>
      </div>
)}

export default HiSummer;