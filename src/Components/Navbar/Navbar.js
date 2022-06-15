import React from 'react';

import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import '../Navbar/Navbar.css'
import logo from '../../Resources/Images/logo.png'



function NavBar() {
    return (
        <Navbar class="nav-styles" collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
            
                <Navbar.Brand href="/">
                   <Image src={logo} height={50} width={120} />Agri Mart   
                </Navbar.Brand>
             

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                        
                </Nav>    
                <Nav>
                        <div class="badge-style">
                            
                        </div>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
