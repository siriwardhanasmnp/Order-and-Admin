import React, { Component } from "react";
import Select from 'react-select'

function Packed(){
  const options = [
    { value: '1 day', label: '1 Day' },
    { value: '2 days', label: '2 Days' },
    { value: '3 days', label: '3 Days' },
    { value: 'within a week', label: 'Within a week' },
    { value: 'within two weeks', label: 'Within two weeks' }
  ]

  
    
  
   {/*const navigateToPacked= (post) =>{
    navigate(`/confirmed`, { state: post}); // here we will redirect user and send your data into state
    }
  */} 
    const MyComponent = () => (
      <Select options={options}  ></Select>
    )
return(
    <div id="pack">
  <h3 className="text-left" style={{padding: "20px 0px"}}>Packed Orders </h3>
<table className="table table-striped">
  <thead class="table-light">
    <tr>
          <td>Order<br/> Id</td>
          <td>Customer<br/>Id</td>
          <td>Seller<br/>Id</td>
          <td>Shipping<br/>Address</td>
          <td>Total<br/>Amount</td>
          <td>Payment<br/>Type</td>
          <td>Date of<br/>Order</td>
          <td>Estimated<br/>Delivery Time</td>
          <td>Delivery<br/>Status</td>
         </tr>
  </thead>
  <tbody>
  <tr>
          <td>O001</td>
          <td>C200</td>
          <td>S300</td>
          <td>No.A/Wickramasinghepura, Battamulla</td>
          <td>Rs.2000</td>
          <td>Cash On delivery</td>
          <td>2022.05.03</td>
          <td>1 day</td>
          <td><button type="button" class="btn btn-success">On premise</button></td>
          </tr>

          
          <tr>
          <td>O001</td>
          <td>C200</td>
          <td>S300</td>
          <td>No.A/Wickramasinghepura, Battamulla</td>
          <td>Rs.2000</td>
          <td>Cash On delivery</td>
          <td>2022.05.03</td>
          <td>1 day</td>
          <td><button type="button" class="btn btn-success">On premise</button></td>
          </tr>

          <tr>
          <td>O001</td>
          <td>C200</td>
          <td>S300</td>
          <td>No.A/Wickramasinghepura, Battamulla</td>
          <td>Rs.2000</td>
          <td>Cash On delivery</td>
          <td>2022.05.03</td>
          <td>1 day</td>
 
          <td><button type="button" class="btn btn-success">On premise</button></td>
          </tr>

  </tbody>
</table>
  </div>
);
}

export default Packed;