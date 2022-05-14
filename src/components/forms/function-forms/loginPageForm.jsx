import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { signinAccess } from "../../../redux-store/actions/users";


const LoginPageForm = (props) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const userSignInAction = useSelector((state) => state.userSignInAction)

// const { userInfo, loading, err } = userSignInAction;

const dispatch = useDispatch();

const loginHandler = (e) => {
    e.preventDefault();
   dispatch(signinAccess(email, password));
}
  return(
     <form className="loginForm-content" onSubmit={loginHandler}>
                    <div className="inputBox w50">
                         <input type="email" 
                             id="email"
                             name="email"
                             onChange={(e) => setEmail(e.target.value)}
                             required />
                             <span>User Email:</span>
                    </div>

                    <div className="inputBox w50">
                         <input type="password"
                             id="password"
                             name="password"
                             onChange={(e) => setPassword(e.target.value)}
                             required />
                             <span>User Password:</span>
                    </div>
                   
                   <div className="register-anchor-link">
                      <label />
                      Are You New Member? {""}
                      <Link to="/register" className="register-link">Create An Account</Link>
                   </div>
                   <button className="loginForm-btn"><p>SignIn</p></button>
       </form>
)}

export default LoginPageForm;