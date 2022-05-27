import { useState } from "react";
import HotListItemSelection from "../../../routes/pages/screens/productsSelection-screens/hotListItem-selection/hotListItemSelection";
import "./hotListItemPagination.css";


const HotListItemPagination = () => {
 const [toggleTabState, setToggleTabState] = useState(1);
    const toggleTab = (index) => {
        setToggleTabState(index);
    }

    return(
    <div className="hotListItemPagination-body">
        <div className="hotListItemPagination-section">
            <div className="hotListItemPagination-section-container">
                <div className="hotListItemPagination-tabs">
                   <ul className="tabs-block">
                       <li className={toggleTabState === 1 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(1)}><p>All</p></li>
                       <li className={toggleTabState === 2 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(2)}><p>Wigs</p></li>
                       <li className={toggleTabState === 3 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(3)}><p>Babys</p></li>
                       <li className={toggleTabState === 4 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(4)}><p>Products</p></li>
                       <li className={toggleTabState === 5 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(5)}><p>Skin</p></li>
                       <li className={toggleTabState === 6 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(6)}><p>Toddlers</p></li>
                       <li className={toggleTabState === 7 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(7)}><p>Celebrates</p></li>
                       <li className={toggleTabState === 8 ? "tabs-target active-tabs-target" : "tabs-target"}
                        onClick={() => toggleTab(8)}><p>Hot Items</p></li>
                   </ul>
                </div>
                 <div className="hotListItemPagination-tabContent">
            <div className={toggleTabState === 1 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <HotListItemSelection/>
                </div>
            <div className={toggleTabState === 2 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Wiggs content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi iusto 
                   itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit placeat 
                   ullam quo quia cumque? 
                </p></div>
            <div className={toggleTabState === 3 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Babys content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi iusto 
                   itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit placeat 
                   ullam quo quia cumque? 
                </p></div>
            <div className={toggleTabState === 4 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Products content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi 
                   iusto itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit 
                   placeat ullam quo quia cumque? 
                </p></div>
            <div className={toggleTabState === 5 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Skin content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi 
                   iusto itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit 
                   placeat ullam quo quia cumque? 
                </p></div>
            <div className={toggleTabState === 6 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Toddlers content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi 
                   iusto itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit 
                   placeat ullam quo quia cumque? 
                </p></div>
            <div className={toggleTabState === 7 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Celebrates content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi 
                   iusto itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit 
                   placeat ullam quo quia cumque? 
                </p></div>
            <div className={toggleTabState === 8 ? "tabs-content active-tabs-content" : "tabs-content"}>
                <p>Hot Items content here: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi animi 
                   iusto itaque, temporibus, magnam illo debitis, minima tempore ipsum atque rem totam impedit fugit 
                   placeat ullam quo quia cumque? 
                </p></div>
                </div>

            </div>
        </div>
    </div>
)}

export default HotListItemPagination; 