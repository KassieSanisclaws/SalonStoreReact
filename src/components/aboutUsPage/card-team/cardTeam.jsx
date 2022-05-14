import React from "react";
import "./cardTeam.css";

const CardTeam = () => {
    return(
      <div className="cardTeam-body">
          <div className="cardTeam-section-container">
              <div className="cardTeam-content">
                 <h3>Management Team Section Here:</h3>
               <div className="cardTeam-content-row glass">

        <div className="cardTeam-content-col">
               <div className="cardTeam-content-card">
               <div className="cardTeam-content-cardBox">
                  <div className="cardBox-card-front front-1">
                    <span>Kassie</span>
                  </div>

                <div className="cardBox-card-back">
                    <p>CEO / Co-Founder</p>
                  <div className="cardBox-card-back-socialMedia">
                    <a href="/"><img src="/" alt="/"/></a>
                    <a href="/"><img src="/" alt="/"/></a>
                    <a href="/"><img src="/" alt="/"/></a>
                  </div>
                </div>     
            </div>
          </div>
        </div>

        <div className="cardTeam-content-col">
             <div className="cardTeam-content-card">
             <div className="cardTeam-content-cardBox">
               <div className="cardBox-card-front front-2">
                  <span>Kassie</span>
               </div>

               <div className="cardBox-card-back">
                   <p>CEO / Co-Founder</p>
               <div className="cardBox-card-back-socialMedia">
                   <a href="/"><img src="/" alt="/"/></a>
                   <a href="/"><img src="/" alt="/"/></a>
                   <a href="/"><img src="/" alt="/"/></a>
               </div>
             </div>
          </div>
        </div>
      </div>

       <div className="cardTeam-content-col">
           <div className="cardTeam-content-card">
              <div className="cardTeam-content-cardBox">

                  <div className="cardBox-card-front front-3">
                      <span>Kassie</span>
                  </div>

                  <div className="cardBox-card-back">
                      <p>CEO / Co-Founder</p>
                  <div className="cardBox-card-back-socialMedia">
                      <a href="/"><img src="/" alt="/"/></a>
                      <a href="/"><img src="/" alt="/"/></a>
                      <a href="/"><img src="/" alt="/"/></a>
                 </div>
              </div>
            </div>
         </div>
      </div>
   </div>
     </div>
       </div>
    </div>
)};

export default CardTeam;