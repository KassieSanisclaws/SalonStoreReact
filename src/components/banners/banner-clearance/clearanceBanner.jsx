import { Link } from "react-router-dom";
import ClearanceDisplayData from "../../../data/clearance-data/clearanceDisplayData";
import "./clearanceBanner.css";


const ClearanceBanner = () => {
    return(
      <div className="clearanceBanner-body">
          <div className="clearanceBanner-section"> 
              <div className="clearanceBanner-section-container">
                        <div className="clearanceBanner-header">
                           <h1>Clearance Banner:</h1> 
                        </div>
                        <div className="clearanceBanner-inner-content">
                            {
                              ClearanceDisplayData.clearanceDisplay.map(clearanceDisplay => (
                                 <div key={clearanceDisplay._id} className="clearanceBanner-img-content">
                                   <Link to={`/clearance/${clearanceDisplay._id}`}>
                                     <div className="clearanceBanner-img">
                                       <img src={clearanceDisplay.image} alt={clearanceDisplay.name}/>
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

export default ClearanceBanner;