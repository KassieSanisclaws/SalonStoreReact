import "./cardTestimony.css";
import Image1 from "../../../images/images-aboutUs-content/Salon_image-15.png";
import Image2 from "../../../images/images-aboutUs-content/Salon_image-16.png";

const CardTestimony = () => {
    return(
        <div className="cardTestimony-body">
             <div className="cardTestimony-section-container">
                     <h3>Testimony Section Here:</h3>
                 <div className="cardTestimony-content">
                     <div className="cardTestimony-content-cards glass">
                     <div className="cardTestimony-content-card glass"> 
                                    <img src={Image1} alt="/"/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Veritatis culpa nemo cum error quo blanditiis beatae magni maxime ea est deleniti, 
                                        hic obcaecati iure reprehenderit aspernatur consequuntur non provident doloremque.
                                    </p>
                                    <h2>Card#1:Name</h2>
                                    <h3>Occupation</h3>
                                    <i className="fa-solid fa-quote-right"/>
                                   </div>


                                   <div className="cardTestimony-content-card glass"> 
                                    <img src={Image2} alt="/"/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Veritatis culpa nemo cum error quo blanditiis beatae magni maxime ea est deleniti, 
                                        hic obcaecati iure reprehenderit aspernatur consequuntur non provident doloremque.
                                    </p>
                                    <h2>Card#1:Name</h2>
                                    <h3>Occupation</h3>
                                    <i className=""></i>
                                    </div>

                                   <div className="cardTestimony-content-card glass"> 
                                    <img src={Image2} alt="/"/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Veritatis culpa nemo cum error quo blanditiis beatae magni maxime ea est deleniti, 
                                        hic obcaecati iure reprehenderit aspernatur consequuntur non provident doloremque.
                                    </p>
                                    <h2>Card#1:Name</h2>
                                    <h3>Occupation</h3>
                                    <i className=""></i>
                                    </div>

                                   <div className="cardTestimony-content-card glass"> 
                                    <img src={Image1} alt="/"/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Veritatis culpa nemo cum error quo blanditiis beatae magni maxime ea est deleniti, 
                                        hic obcaecati iure reprehenderit aspernatur consequuntur non provident doloremque.
                                    </p>
                                    <h2>Card#1:Name</h2>
                                    <h3>Occupation</h3>
                                    <i className=""></i>
                                    </div>
                          </div>
                     </div>
               </div>
        </div>
)};

export default CardTestimony;