import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../../components/banners/banner/banner";
import { registerAccess } from "../../../redux-store/features/slice/authSlice";
import "./register.css";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const register = useSelector((state) => state.authenticate);
const { userInfo, isLoading, isSuccessful, errMessage} = register;
const navigate = useNavigate();
const dispatch = useDispatch();

const registerHandler = (e) => {
  e.preventDefault();
  if(password !== confirmPassword){
      alert("Password & Confirm Password Do Not Match");    
   }else{
  dispatch(registerAccess({name, email, password}));
}};

useEffect(() => {
   if(isSuccessful || userInfo){
      navigate("/");
   } 
},[isSuccessful,userInfo, navigate ]);

return (
    <div className="register-body">
          <Banner/>
       <div className="register-section-conatiner">
          <div className="register-content">
              <div className="register-contentInner glass-r">
                    <h1>Become Our Member</h1>
                    <br/>
                    <br/>
                 <div className="register-contentInner-container">     
         <form className="registerForm-content" onSubmit={registerHandler}>
             <div className="boxInput words50">
                  <input type="name"
                         id="name"
                         name="name"
                         onChange={(e) => setName(e.target.value)}
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
                         autoComplete="off"
                         onChange={(e) => setPassword(e.target.value)}
                         required />
                      <span>User Password:</span>
             </div>

             <div className="boxInput words50">
                  <input type="password"
                         id="confirmPassword"
                         name="confirmPassword"
                         autoComplete="off"
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         required />
                     <span>Confirm Password:</span>
             </div>
            
            <div className="login-anchor-link">
               <label />
               Are You New Member? {""}
               <Link to="/login" className="login-link">Sign In</Link>
            </div>
            <button className="registerForm-btn glass"><p>Register</p></button>   
          </form>
                 </div>
              </div>
          </div>
       </div>
    </div>
)};

export default Register; 