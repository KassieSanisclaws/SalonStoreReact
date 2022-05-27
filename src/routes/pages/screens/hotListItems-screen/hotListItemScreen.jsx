import "./hotListItemScreen.css";
import HotListItemsData from "../../../../data/hotList-data/hotListData";
import { Ratings } from "../../../../components/ratings/ratings";
import { Link, useParams } from "react-router-dom";
import HotListHeader from "../../../../components/headers/productScreens/hotList/hotListHeader";  
import HotListItemBanner from "../../../../components/banners/banner-hotListItemScreen/hotListItemBanner";
import HotListItemPagination from "../../../../components/pagination/hotListItem-pagination/hotListItemPagination";

const HotListItemScreen = () => {
  const { id } = useParams();
    const hotListItem = HotListItemsData.hotListItems.find((x) => x._id === Number(id)); 
    if(!hotListItem){
        return <div>Hot List Item Not Found</div>;
    }
    return(
      <div className="hotListItemScreen-body">
        
          <div className="hotListItemScreen-section">
            <HotListHeader/>
             <div className="hotListItemScreen-section-container">
                 <div className="back-to-results"><Link to="/"><p>Back To Results</p></Link></div>
                    <div className="hotListItemScreen-content">
                       <div className="hotListItemScreen-content-img">
                         <div className="hotListItemScreen-img-section">
                           <ul>
                           <li><img src={hotListItem.image} alt={hotListItem.name}/></li>
                           <li><img src={hotListItem.image2} alt={hotListItem.name}/></li>
                           <li><img src={hotListItem.image} alt={hotListItem.name}/></li>
                           <li><img src={hotListItem.image} alt={hotListItem.name}/></li>
                           </ul>
                         </div>
                       <div className="hotListItemScreen-img-section2">
                         <img src={hotListItem.image} alt={hotListItem.name}/>
                       </div>
                    </div>

                    <div className="hotListItemScreen-content-details">
                      <ul><li><h1>{hotListItem.name}</h1></li>
                          <li><Ratings ratings={hotListItem.ratings} numOfReviews={hotListItem.numOfReviews}/></li>
                          <li><ul><li><h3>${hotListItem.price}</h3></li>
                                  <li><p>${hotListItem.price} + Shipping Here:</p></li>
                                  <li><p>Brand Here:</p></li>
                                  <li><p>Model Name Here:</p></li>
                          </ul></li>
                          <li><ul><h3>Description:</h3>
                                  <li><p>{hotListItem.description}</p></li>
                                  <li><p>Description Here:</p></li>
                                  <li><p>Description Here:</p></li>
                                  <li><p>Description Here:</p></li>
                          </ul></li>
                          <li>
                            <div>Status</div>
                            <div>
                              {
                                hotListItem.countLeftInStock > 0 ? (
                                <span className="hotListItemScreen-success">In Stock</span> 
                               ) : ( <span className="error">Unavailable</span>
                              )}
                            </div>
                          </li>
                      </ul>
                    </div>

                    <div className="hotListItemScreen-content-purchase">
                      <ul>
                        <li><h3>Price Without Tax Here:</h3></li>
                        <li><p>Delivery Arrival Estimate Here:</p></li>
                        <li><button className="purchase-button-add-to-cart">Add To Card</button></li>
                        <li><button className="purchase-button-buy-now">Buy Now</button></li>
                        <li><p>List Item Here:</p></li>
                      </ul>
                    </div>
                 </div>

             </div>        
          </div>
           <HotListItemBanner/> 
           <HotListItemPagination/>
      </div>
)}

export default HotListItemScreen;