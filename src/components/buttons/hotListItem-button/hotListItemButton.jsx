import React from "react";
import { Link } from "react-router-dom";
import "./hotListItemButton.css";


const HotListItemButton = () => {
    return(
        <div className="hotListItemButton-body">
            <div className="hotListItemButton-section">
                 <div className="hotListItemButton-section-container">
                     <div className="hotListItemButton-content">
                         <Link to="/login">
                         <button className="glass"><h3>View More</h3></button>  
                         </Link>
                        
                     </div>  
                 </div>
            </div>
        </div>
)}

export default HotListItemButton;