import React, { useState } from "react";
import { Link } from "react-router-dom";


const RegisterPageForm = () => {
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
 

const registerHandler = (e) => {
    e.preventDefault();
    
}
  return(
     <form className="registerForm-content" onSubmit={registerHandler}>
        <div className="boxInput words50">
                  <input type="name"
                         id="name"
                         name="name"
                         onChange={(e) => setUserName(e.target.value)}
                         required />
                    <span>User Name:</span>
             </div>


        <div className="boxInput words50">
                  <input type="email" 
                         id="email"
                         name="email"
                         onChange={(e) => setEmail(e.target.value)}
                         required />
                      <span>User Email:</span>
             </div>

             <div className="boxInput words50">
                  <input type="password"
                         id="password"
                         name="password"
                         autoComplete="on"
                         onChange={(e) => setPassword(e.target.value)}
                         required />
                      <span>User Password:</span>
             </div>

             <div className="boxInput words50">
                  <input type="password"
                         id="confirmPassword"
                         name="confirmPassword"
                         autoComplete="on"
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         required />
                     <span>Confirm Password:</span>
             </div>
            
            <div className="login-anchor-link">
               <label />
               Are You New Member? {""}
               <Link to="/login" className="login-link">Sign In</Link>
            </div>
            <button className="registerForm-btn"><p>Register</p></button>   
  </form>
)}

export default RegisterPageForm; 