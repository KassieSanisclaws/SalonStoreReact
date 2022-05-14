import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
}

formChangeHandler(e){
     e.preventDefault();
      this.setState({
        [ e.target.name ] : e.target.value       
      });  
    }

formSubmitHandler(e){
       e.preventDefault();
       const { email, password } = this.state;
    Axios.post(process.env.REACT_APP_AXIOS_SERVER_URL,{
        email, password }).then(res => {
           console.log(res);
           localStorage.setItem("login", JSON.stringify({ userLogin: true, token: res.data.accessToken }));
        }).catch(err => {
           console.log(err);
        })
    }

render(){    
   return(  
     <form className="loginForm-content">
                    <div className="inputBox w50">
                         <input type="email" 
                             id="email"
                             name="email"
                             value={this.state.email}
                             onChange={this.formChangeHandler}
                             required />
                             <span>User Email:</span>
                    </div>

                    <div className="inputBox w50">
                         <input type="password"
                             id="password"
                             name="password"
                             value={this.state.password}
                             onChange={this.formChangeHandler}
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
)}}

