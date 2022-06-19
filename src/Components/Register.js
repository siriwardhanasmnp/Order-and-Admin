import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { Link } from "react-router-dom";
import "./Register.css";
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
              <br/>
               <h1 style={{textAlign:"center", marginTop:"4rem"}}>Create Your Agri Mart Account !</h1>
               <div className="reg1">

              <div className="form-group">
                <label><br/>Full Name</label>
                <input
                  type="phone"
                  
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  {...register("name", { required: "name is Required",
                 
                })}
                  onKeyUp={() => {
                    trigger("name"); }}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>

               <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="Phone"
                  className={`form-control ${errors.phone && "invalid"}`}
                  placeholder="Enter contact number"
                  onChange={(event) => setPhone(event.target.value)}
                  {...register("phone", { required: "Phone is Required",
                  pattern: {
                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                 })}
                 onKeyUp={() => {
                  trigger("phone");
                }}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}</div>
          
          
          <div className="form-group">
                <label>Gender</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setgender(event.target.value)}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </div>

              <div className="form-group">
                <br/>
                <label>Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email && "invalid"}`}
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  {...register("email", { required: "Email is Required" ,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }})}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
               
              </div>
            
              </div>
              <div className="reg">
              <div className="form-group">
            
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  {...register("passsword", { required: "name is Required" })}
                  onKeyUp={() => {
                    trigger("password"); }}
                />
                 {errors.email && (
                  <small className="text-danger">{errors.password.message}</small>
                )}
              </div>

                <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="ConfirmPassword"
                  className="form-control"
                  placeholder="Enter password again"
                  onChange={(event) => setconfirmpassword(event.target.value)
                  }
                  {...register("password", { required: "password is Required",})}
                />
              </div>

            <div>
               <button type="submit" className="btn_btn">
                    SIGN UP
              </button>
              
               <br/>  <br/>
               <b> Already have an Account ?  <Link to="/signin"> <u>LOG IN</u> </Link>  </b>
              <p onClick={handleClick} className="forgot-password text-right">
            
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                 <h3><b>All information are required !</b> </h3>
                </Alert>
              )}
              </div>
              </div>
            </form>
          ) : (
            <Login />
          )}
          </div>
          
  
    
  );
}
export default Register;