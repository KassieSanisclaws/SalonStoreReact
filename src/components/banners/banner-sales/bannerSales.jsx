import { Link } from "react-router-dom";
import "./bannerSales.css";
import Image1 from "../../../images/images-home/sales_image_3.png";


const BannerSales = () => {
    return(
      <div className="bannerSales-body">
          <div className="bannerSales-section">
              <div className="bannerSales-section-container">
                    <h1>New Users Only</h1>
                    <div className="bannerSales-card img1">
                       <Link to="/">
                           <div className="bannerSales-card-content1">
                               <img src={Image1} alt="/"/>
                               <span><p>CODE:PATGIFTS</p></span>
                           </div>
                       </Link>
                    </div>
                    <div className="bannerSales-card img2">
                        <Link to="/">
                           <div className="bannerSales-card-content2">
                           <img src={Image1} alt="/"/>
                           </div>
                        </Link>
                    </div>
              </div>
          </div>
      </div>
)};

export default BannerSales;