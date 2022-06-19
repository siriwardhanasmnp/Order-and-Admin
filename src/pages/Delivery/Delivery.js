import React from 'react';
import Processing from '../../components/Delivery Portal/Processing';
import Packed from '../../components/Delivery Portal/Packed';
import Premise from '../../components/Delivery Portal/Onpre';
import  Dispatched from '../../components/Delivery Portal/Dispatched';
import OnTheway from '../../components/Delivery Portal/Ontheway';
import  Delivered from '../../components/Delivery Portal/Delivered';
import Settings from '../../components/Delivery Portal/Settings';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Dashboard from '../../components/Delivery Portal/Dashboard';
import './Delivery.css';
//import Rout from '../Rout';

function Delivery(){
    return(
    <div>  
    <NavBar/>
    <SideBar/>
    <section class="section1"><Dashboard/> </section>
    <section><Processing/> </section>
    <section><Packed/></section>
    <section> <Premise/></section>
    <section> <Dispatched/></section>
    <section> <OnTheway/></section>
    <section><Delivered/></section>
    <section><Settings/></section>
    </div> 
   
    );
}

export default Delivery;