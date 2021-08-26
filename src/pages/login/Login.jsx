import React from 'react'
import './login.scss'

export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                  <img className="logo" 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                     alt="" />
                 </div>
            </div>
         <div className="container">
               <form action="">
                   <h1>Sign In</h1>
                   <input type="email" placeholder="Enter your email or phone number..." />
                   <input type="password" placeholder="Enter your password" />
                   <button className="loginButton">Sign In</button>
                   <span>New to Netflix? <b>Sign up now.</b> </span>
                   <small>
                       This page is protected by Google reCaptcha to ensure you are not a robot...
                   </small>
               </form>
            </div>
        </div>
    )
}
