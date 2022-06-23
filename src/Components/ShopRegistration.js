import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { Link } from "react-router-dom";
import "./ShopRegistration.css";
import { useForm } from "react-hook-form";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [Gender, setgender] = useState("");
  const [ConfirmPassword, setconfirmpassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !Gender) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (   
    
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
               <h1 style={{textAlign:"center", marginTop:"2rem"}}>Shop Registration</h1>
               <h2 style={{textAlign:"center", marginTop:"4rem"}}>General Information</h2>
               <div className="reg1">

              <div className="form-group">
                <label><br/>Shop Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Shop Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  
                />
               
              </div>
              <div>
              <div className="side">
                <h2 style={{textAlign:"right", marginright:"2rem"}}>Bank Information</h2>
                </div>
                </div>
               <div className="form-group">
                <label>Account Holder Name</label>
                <input
                  type="Phone"
                  className={`form-control ${errors.phone && "invalid"}`}
                  placeholder="Enter Account Holder Name"
                  onChange={(event) => setPhone(event.target.value)}
                  
                />

                </div>
                hsy
          <div className="form-group">
                <label>Account No</label>
                <input
                  type="text"
                  className={`form-control ${errors.phone && "invalid"}`}
                  placeholder="Enter Account Number"
                  onChange={(event) => setPhone(event.target.value)}
                  
                />
              </div>

             
               
           
            
              </div>
              <div className="reg">
              <div className="form-group">
            
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="EnterYour Addresss"
                  onChange={(event) => setPassword(event.target.value)}
                  
                />
              </div>

                <div className="form-group">
                <label>Bank Name</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Bank Name"
                  onChange={(event) => setconfirmpassword(event.target.value)
                  }
                />
              
              </div>
              <div className="form-group">
                <label>Branch Name</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Bank Name"
                  onChange={(event) => setconfirmpassword(event.target.value)
                  }
                />
              </div>
              </div>
              <div>
            <div>
              <Link to="/signin">  <button type="submit" className="btn_btn1" >
                    Submit 
              </button>
              </Link>
              </div>
               <br/>
              <p onClick={handleClick} className="forgot-password text-right">
            
                
              </p>
            
              
              </div>
            </form>
          ) : (
            <Login />
          )}
          </div>
          
  
    
  );
}
export default Register;