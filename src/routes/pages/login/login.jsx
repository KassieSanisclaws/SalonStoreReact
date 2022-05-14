import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Banner from "../../../components/banners/banner/banner";
import { useDispatch, useSelector } from "react-redux";
import  { signInAccess }  from "../../../redux-store/features/slice/authSlice";
import { LoadingBox } from "../../../components/loadingBox/loadingBox";


const Login = () => {
const [ email, setEmail] = useState("");
const [ password, setPassword] = useState("");

const signIn = useSelector((state) => state.authenticate);
const { userInfo, isLoading, isSuccessful, errMessage } = signIn;

const navigate = useNavigate();
const dispatch = useDispatch();
const loginHandler = (e) => {
      e.preventDefault();
    dispatch(signInAccess({email, password}))
};

useEffect(() => {
  if(isSuccessful || userInfo){
     navigate("/");
 }
},[isSuccessful, userInfo, navigate]);

    return(
      <div className="login-body">
          <Banner/>
          <div className="login-section-container">
              <div className="login-content">
                  {isLoading && <LoadingBox></LoadingBox>}   
                  <div className="login-contentInner glass-l"> 
                            <h1>Welcome Back:</h1>
                      <div className="login-contentInner-container">
            <form className="loginForm-content" onSubmit={loginHandler}>           
                    <div className="inputBox w50">
                         <input type="email" 
                                name="email"
                             onChange={(e) => setEmail(e.target.value)}
                             required />
                             <span>User Email:</span>
                    </div>

                    <div className="inputBox w50">
                         <input type="password"
                                name="password"
                                autoComplete="off"
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
                      </div>
                  </div>
              </div>
          </div>
      </div>
)};

export default Login;