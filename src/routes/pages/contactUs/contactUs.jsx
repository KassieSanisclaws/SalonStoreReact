import React from "react";
import "./contactUs.css";
import emailjs from "emailjs-com";
import Locations from "../../../images/images-icons/icons/location_icon3.png";
import Email from "../../../images/images-icons/icons/email_icon2.png";
import IPhone from "../../../images/images-icons/icons/phone_icon.png";
import Twitter from "../../../images/images-icons/icons/twitter_icon2.png";
import Github from "../../../images/images-icons/icons/github_icon.png";
import Instagram from "../../../images/images-icons/icons/instagram_icon2.png";
import Linkedin from "../../../images/images-icons/icons/linkedin_icon.png";
import Banner from "../../../components/banners/banner/banner"; 

const ContactUs = () => {
const submitForm = (e) => {
  e.preventDefault();
  emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE , process.env.REACT_APP_EMAIL_JS_TEMPLATE, 
        e.target, process.env.REACT_APP_EMAIL_JS_TOKEN
    ).then(res => {
     console.log(res);
   }).catch(err => {
     console.log(err); 
   });
  e.target.reset();
}
  return (
    <div className="contactUs-body">
       <Banner/>
       <div className="contactUs-section-container">      
             <div className="contactUs-content">             
                 <div className="contactUs-contactInfo">
                          <h1>Contact Us:</h1>
                      <ul className="contactUs-contactInfo-ul">
                           <li className="contactUs-contactInfo-li">
                               <span><img src={Locations} alt="location" /></span>
                                <span>Canada<br/>
                                Brampton, Ontario<br/>
                                </span>
                           </li>

                           <li className="contactUs-contactInfo-li">
                               <span><img src={Email} alt="email" /></span>
                               <span>Kassie.Sanisclaws35@gmail.com</span>
                           </li>

                           <li className="contactUs-contactInfo-li">
                               <span><img src={IPhone} alt="phone" /></span>
                               <span>+1-647-61X-XXXX</span>
                           </li>
                         </ul>

                         <ul className="contactUs-contactInfo-socialMedia-ul">
                             <li><a href="/"><img src={Twitter} alt="twitter" /></a></li>
                             <li><a href="/"><img src={Github} alt="github" /></a></li>
                             <li><a href="/"><img src={Instagram} alt="instagram" /></a></li>
                             <li><a href="/"><img src={Linkedin} alt="linkedin" /></a></li>
                         </ul>
                 </div>
             <form className="contactUs-contactForm-content" onSubmit={submitForm}>
                      <h1>Send Us A Message:</h1>
                  <div className="contactUs-formBox">
                         <div className="inputBox w50">
                            <input type="text"
                                   name="name"
                                   required/>
                            <span>Name:</span>
                         </div>
                                 
                         <div className="inputBox w50">     
                            <input type="email"
                                   name="email"
                                   required/>
                            <span>Email Address:</span>
                         </div>
                        
                         <div className="inputBox w50">     
                            <input type="number"
                                   name="number"
                                   required/>
                            <span>Mobile Phone:</span>
                         </div>

                         <div className="inputBox w100">
                             <textarea name="message"
                                       required>
                             </textarea>
                             <span>Your Message Here:</span>
                         </div>

                         <div className="inputBox w100">
                             <input type="submit" 
                                    value="send"/>
                        </div>
                    </div>
                </form>
             </div>
       </div>
    </div>
)};

export default ContactUs;