import React from "react";
import { Link } from "react-router-dom";
import "./categoriesTabs.css";


export const CategpriesTabs = () => {
  return(
     <div className="categoriesTabs-body">
         <div className="categoriesTabs-section">
             <div className="categoriesTabs-section-container">              
                     <div className="categoriesTabs-content">
                       <ul>
                           <li><Link to="/"><h2>Baby Girl</h2></Link></li>
                           <li><Link to="/"><h2>Baby Boy</h2></Link></li>
                           <li><Link to="/"><h2>Toddler Girl</h2></Link></li>
                           <li><Link to="/"><h2>Toddler Boy</h2></Link></li>
                           <li><Link to="/"><h2>Girl</h2></Link></li>
                           <li><Link to="/"><h2>Boy</h2></Link></li>
                           <li><Link to="/"><h2>Matching Outfits</h2></Link></li>
                           <li><Link to="/"><h2>Maternity Nursing</h2></Link></li>
                           <li><Link to="/"><h2>Home Baby Gear</h2></Link></li>
                           <li><Link to="/shoes"><h2>Shoe Accessories</h2></Link></li>
                       </ul>
                     </div>
             </div>
         </div>
     </div>
)}