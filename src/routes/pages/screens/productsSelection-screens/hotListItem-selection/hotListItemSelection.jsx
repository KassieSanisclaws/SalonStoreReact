import React from "react";
import { Link } from "react-router-dom";
import { Ratings } from "../../../../../components/ratings/ratings";
import HotListDisplayData from "../../../../../data/hotListDisplay-data/hotListDisplayData";
import "./hotListItemSelection.css";


const HotListItemSelection = () => {
    return(
     <div className="hotListItemSelection-body">
         <div className="hotListItemSelection-section">
              <div className="hotListItemSelection-section-container"> 
                  <div className="hotListItemSelection-content">   
                       <ul className="hotListItems">
                     {
                       HotListDisplayData.hotListDisplay.map(hotListDisplay => ( 
                     <li key={hotListDisplay._id}>
                        <div className="hotListItem">
                           <Link to={`/hotListItem/${hotListDisplay._id}`}>
                              <img src={hotListDisplay.image} alt={hotListDisplay.name}/>
                           </Link>
                           <div className="hotListItem-name">
                              <Link to={`/hotListItem/${hotListDisplay._id}`}>{hotListDisplay.name}</Link>
                           </div>
                           {/* <div className="hotListItem-brand">{hotListItem.grade}</div> */}
                           <div className="hotListItem-ratings">
                              <Ratings ratings={hotListDisplay.ratings} numOfReviews={hotListDisplay.numOfReviews}/>
                           </div>
                           <div className="hotListItem-price">${hotListDisplay.price}</div>

                        </div>   
                     </li>        
                       ))
                     }
                      </ul>
                  </div>
              </div>
         </div>    
     </div>
)}

export default HotListItemSelection;