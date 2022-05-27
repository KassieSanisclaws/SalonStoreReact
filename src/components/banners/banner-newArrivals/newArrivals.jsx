import React from "react";
import { Link } from "react-router-dom";
import NewArrivalsDisplayData from "../../../data/newArrivals-data/newArrivalsDisplayData";
import "./newArrivals.css";


const NewArrivals = () => {
    return(
      <div className="newArrivals-body">
          <div className="newArrivals-section">
              <div className="newArrivals-section-content">
                  <div className="newArrivals-header">
                       <h1>New Arrivals</h1>
                  </div>
                  <div className="newArrivals-inner-content">
                              {
                                  NewArrivalsDisplayData.newArrivalsDisplay.map(newArrivalsDisplay => (
                                 <div key={newArrivalsDisplay._id} className="newArrivals-img-content">   
                                 <Link to={`/newArrivals/${newArrivalsDisplay._id}`}>
                                   <div className="newArrivals-img">
                                   <img src={newArrivalsDisplay.image} alt={newArrivalsDisplay.name}/>    
                                   </div>   
                                 </Link>
                                 </div>
                                  ))
                              }              
                  </div>
              </div>
          </div>
      </div>
)}

export default NewArrivals;