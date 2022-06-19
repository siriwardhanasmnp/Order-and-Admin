import React, {useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    
      <div>
            <h1 style={{textAlign:"center", marginTop:"4rem"}}> Welcome to Agri Mart !</h1>
            <div className="login_form">
     <h2><b>LOG IN</b></h2>
     <p><b>Shopped with us before ? Log in with your details </b></p><br/>
     <label for="email" >User Name </label>
     <i class= "fa fa-user"></i>
     <input

            type="email" 
            placeholder="Enter Your Email Address"
            value={email} 

           onChange={(e) => setEmail(e.target.value)}

            />     
      <label for="password" >Password</label> 
      <i class= "fa fa-lock"></i> 
     <input               
           type="password" 
           placeholder="Enter Your Password"
           value={password} 
           onChange={(e) => setPassword(e.target.value)}id="pwd1"
           />
           
            <div>
           <p style={{textAlign:"right", margineleft:"6rem"}}>Forgot password ?</p>
     <button type = "Submit" id= "submutt" className="submit_btn" >
           Log in
           </button>
           </div>
           <br/>
     <p style={{textAlign:"center"}}>Don't have an Account ? <b>
      <Link to="/signup"> <u> Sign Up</u>  </Link> </b> </p>  
      </div>
        
       </div>
      
     
     
  );
};

export default Login;

