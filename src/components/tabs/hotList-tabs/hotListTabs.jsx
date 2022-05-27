import React from "react";
import "./hotListTabs.css";
import HotListItemsData from "../../../data/hotList-data/hotListData";
import { Ratings } from "../../ratings/ratings";
import { Link } from "react-router-dom";


 const HotListTabs = () => {
  return(
     <div className="hotListTabs-body">
        <div className="hotListTabs-section">
           <div className="hotListTabs-section-container">
                <div className="hotListTabs-inner-content"> 
                   <ul className="hotListItems">
                     {
                       HotListItemsData.hotListItems.map(hotListItem => ( 
                     <li key={hotListItem._id}>
                        <div key={hotListItem._id} className="hotListItem">
                           <Link to={`/hotListItem/${hotListItem._id}`}>
                              <img src={hotListItem.image} alt={hotListItem.name}/>
                           </Link>
                           <div className="hotListItem-name">
                              <Link to={`/hotListItem/${hotListItem._id}`}>{hotListItem.name}</Link>
                           </div>
                           {/* <div className="hotListItem-brand">{hotListItem.grade}</div> */}
                           <div className="hotListItem-ratings">
                              <Ratings ratings={hotListItem.ratings} numOfReviews={hotListItem.numOfReviews}/>
                           </div>
                           <div className="hotListItem-price">${hotListItem.price}</div>

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

export default HotListTabs;