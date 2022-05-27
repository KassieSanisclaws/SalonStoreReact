import  HotListTabs  from "../tabs/hotList-tabs/hotListTabs";
import "./hotItems.css";

export const HotItems = () => {
    return (
     <div className="hotItems-body">
         <div className="hotItems-section">
              <div className="hotItems-section-container">
                    <h1>Hot List</h1>
                    <div className="hotItems-inner">
                       <div className="hotItems-inner-content">      
                           <div className="hotItems-counter">
                               <h3>Flash Sale</h3>
                               <span>Counter Tracker</span>
                           </div>
                           <div className="hotItems-cards">
                             <HotListTabs/>
                           </div>
                       </div>
                    </div>
              </div>
         </div>
     </div>
)}