import { CategpriesTabs } from "../tabs/categories-tabs/categoriesTabs";
import "./categories.css";

export const Categories = () => {
   return(
      <div className="categories-body">
           <div className="categories-section">
               <div className="categories-section-container">
                     <h1>Categories</h1>
                       <div className="categories-inner">
                          <CategpriesTabs/>
                    </div>
               </div>
           </div>
      </div>
)}