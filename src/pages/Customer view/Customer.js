import React from 'react';
import NavBar from '../../components/NavBar';
import  'bootstrap/dist/css/bootstrap.min.css';
import "./Customer.css";

import { Button } from 'react-bootstrap';


function Customer()  {
  
    return (
      <div>
          <NavBar/>

        <div class="container p-5 my-5 bg-dark text-white" style={{width: "70rem"}}>
         </div>
     
         <div class="div1" style={{ background: "linear-gradient(#B4FF9F, #4B8673)" }}>
           <h5>Seller Details</h5><br></br>
           <h6>Seller Id :</h6><br></br>
           <h6>Contact No :</h6><br></br>
           
         </div>
        
         <span class="div3" style={{ background: "linear-gradient(#B4FF9F, #4B8673)" }}>
         <h5>Package Information:</h5><br></br>
         <h6>Tracking No :</h6><br></br>
         <h6>Delivery Type :</h6><br></br>
         <h6>Customer Order Creation :</h6><br></br>
         <h6 >Estimated delivery time :</h6><br></br>
        </span>

         <div class="div2" style={{ background: "linear-gradient(#B4FF9F, #1B2430)" }}>
         <h5 class="h51">Your parcel has been delivered</h5><br></br>
         <h5 class="h51">Your parcel is our for delivery from logistic premise</h5><br></br>
         <h5 class="h51">Your parcel is dispatched</h5><br></br>
         <h5 class="h51">Your parcel has been packed</h5>
        
         <Button variant="success">Review</Button>
         <Button variant="danger">File a payment dispute</Button>
  
         </div>
         </div>


     
    )
  }


export default Customer;
