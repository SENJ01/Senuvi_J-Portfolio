import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image9 from "/logo.webp";
import '../css/Navbar.css'


function CustomNavbar(){
    return(

            <Navbar expand="lg"  >
              <Container>
                <Navbar.Brand className='logo' href="/Senuvi_J-Portfolio/"><img
                  alt=""
                  src={image9}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{' '}
                Senuvi_J</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="Navbar">
                  
                    <Nav.Link as={Link} to="/Senuvi_J-Portfolio" className='nav-links' >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about_me"  className='nav-links'>About Me</Nav.Link>
                    <Nav.Link as={Link} to="/contact"  className='nav-links'>Contact</Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/in/senuvi-jayasinghe-414513256/' target='_blank' className='nav-links'>Linkedin</Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default CustomNavbar;