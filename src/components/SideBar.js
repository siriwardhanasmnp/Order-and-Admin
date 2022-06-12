import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {FaGem,FaHeart} from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import {RiMenu5Fill } from "react-icons/ri";
import 'react-pro-sidebar/dist/css/styles.css';

function SideBar(){
    return(
        <div>
            
        <ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    <SubMenu title="Requests" icon={<FaHeart />}>
      <MenuItem icon={<RiMenu5Fill />}>Processing</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}>Packed</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}>On-Premise</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}>Dispatched</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}>On the way</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}>Delivered</MenuItem>
    </SubMenu>
    <MenuItem icon={<IoSettings />}>Settings</MenuItem>
  </Menu>
</ProSidebar>
</div>
    );
}

export default SideBar