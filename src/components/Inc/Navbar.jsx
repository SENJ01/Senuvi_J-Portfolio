
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image9 from "/logo.webp";


function CustomNavbar(){
    return(

            <Navbar expand="lg"  >
              <Container>
                <Navbar.Brand style={{fontWeight: "BOLD",margin:"20px", color:"#0C2D57"}} href="/Senuvi_J-Portfolio"><img
                  alt=""
                  src={image9}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{' '}
                Senuvi_J</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  
                    <Nav.Link as={Link} to="/Senuvi_J-Portfolio" style={{margin:"10px", color:"#0C2D57"}}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about_me" style={{margin:"10px", color:"#0C2D57"}}>About Me</Nav.Link>
                    <Nav.Link as={Link} to="/contact" style={{margin:"10px", color:"#0C2D57"}}>Contact</Nav.Link>
                    
                    <Nav.Link href='https://www.linkedin.com/in/senuvi-jayasinghe-414513256/' target='_blank' style={{margin:"10px", color:"#0C2D57"}}>Linkedin</Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default CustomNavbar;