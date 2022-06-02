import { CategpriesTabs } from "../tabs/categories-tabs/categoriesTabs";
import "./categories.css";

export const Categories = () => {
   return(
      <div className="categories-body">
           <div className="categories-section">                   
                       <div className="categories-inner">
                        <h1>Categories</h1>      
                          <CategpriesTabs/>
                    </div>
           </div>
      </div>
)}