import React from 'react'
import image1 from "../../Resources/Images/usermanagement.png";
import image2 from "../../Resources/Images/ordermanagement.png";
import image3 from "../../Resources/Images/productmanagement.png";
import { Link } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import {Row, Card, Button} from "react-bootstrap"
import './AgriMartAdmin.css'


function AgriMartAdmin() {
  return (
    <div>
      <Navbar/>
      <Row className='admin-row'>
      <div class="card-deck">
      
      <Card className='admin-card'>   
        <img class="card-img-top" src={image1} width={100} height={200} alt="Card image cap" />

        <h5 class="card-title">User Management</h5>
     
      </Card>

      <Card className='admin-card'>   
        <img class="card-img-top" src={image2} width={100} height={200} alt="Card image cap" />
        
        <h5 class="card-title">Order Management</h5>     
      </Card>

     <Card className='admin-card'>   
        <img class="card-img-top" src={image3} width={10} height={200} alt="Card image cap" />
        
        <h5 class="card-title">Product Management</h5>

      </Card>
      </div>

      </Row>
    </div>
  )
}

export default AgriMartAdmin
