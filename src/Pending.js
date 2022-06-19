import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import NavBar from '../components/NavBar';
import Orders from "../components/Orders";



function Pending(){

return(
  <div>
    <NavBar/>
    <div><Orders/></div>
    </div>
);

    }

  



export default Pending;