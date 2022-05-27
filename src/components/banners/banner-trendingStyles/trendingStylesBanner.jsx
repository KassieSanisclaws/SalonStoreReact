import { Link } from "react-router-dom";
import TrendingStylesDisplayData from "../../../data/trendingStyles-data/trendingStylesDisplayData";
import "./trendingStylesBanner.css";

const TrendingStylesBanner = () => {
    return(
      <div className="trendingStylesBanner-body">
         <div className="trendingStylesBanner-section">
             <div className="trendingStylesBanner-section-container">
                 <div className="trendingStylesBanner-content">
                     <div className="trendingStylesBanner-header">
                         <h1>Trending Styles:</h1>
                     </div>
                     <div className="trendingStylesBanner-inner-content">
                          {
                              TrendingStylesDisplayData.trendingStylesDisplay.map(trendingStylesDisplay => (
                                  <div key={trendingStylesDisplay._id} className="trendingStylesBanner-img-content">
                                      <Link to={`/trendingStyles/${trendingStylesDisplay._id}`}>
                                            <img src={trendingStylesDisplay.image} alt={trendingStylesDisplay.name}/>
                                            <h1>{trendingStylesDisplay.name}</h1>
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

export default TrendingStylesBanner;