import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
}
formChangeHandler(e){
    e.preventDefault();
     this.setState({
       [ e.target.name ] : e.target.value       
     });  
    e.target.reset()
   }

formSubmitHandler(e){
      e.preventDefault();
      const { name, email, password, confirmPassword } = this.state;
   Axios.post("URL-HERE",{
       user:{ name: name, email: email, password: password, confirmPassword: confirmPassword }
       }, { withCredentials: true }
       ).then(res => {
          console.log(res);
          localStorage.setItem("login", JSON.stringify({ userLogin: true, token: res.data.accessToken }));
       }).catch(err => {
          console.log(err);
       })
   }
render(){
      return(
         <form className="registerForm-content">
               <div className="boxInput words50">
                         <input type="name"
                             id="name"
                             name="name"
                             value={this.state.name}
                             onChange={this.formChangeHandler}
                             required />
                             <span>User Name:</span>
                    </div>


               <div className="boxInput words50">
                         <input type="email" 
                             id="email"
                             name="email"
                             value={this.state.email}
                             onChange={this.formChangeHandler}
                             required />
                             <span>User Email:</span>
                    </div>

                    <div className="boxInput words50">
                         <input type="password"
                             id="password"
                             name="password"
                             value={this.state.password}
                             onChange={this.formChangeHandler}
                             required />
                             <span>User Password:</span>
                    </div>

                    <div className="boxInput words50">
                         <input type="password"
                             id="confirmPassword"
                             name="confirmPassword"
                             value={this.state.confirmPassword}
                             onChange={this.formChangeHandler}
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
)}};