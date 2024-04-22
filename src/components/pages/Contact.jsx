import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Contact(){
    return(
        <Container>
        <Row className="contacts_row" style={{margin:"80px"}}>
        
        <Col sm={6} className="d-flex justify-content-center align-items-center" style={{height:"450px"}}>
        <div className="col-md-12" style={{margin:"80px 5px 80px 120px"}}> {/* Add margin between cards */}
                        <Card className="contact_card" style={{border:"none", outline:"none"}}>
                            <Card.Body>                     
                            <Navbar.Brand style={{fontWeight: "BOLD",margin:"20px", color:"#0C2D57"}} href="https://www.linkedin.com/in/senuvi-jayasinghe-414513256/">
                                
                                <img alt="" src="./src/components/Images/linkedin.svg" width="40" height="40"/>
                                {' '}
                                Linkedin</Navbar.Brand>
                            </Card.Body>
                        </Card>
                        <Card className="contact_card" style={{border:"none", outline:"none"}}>
                            <Card.Body>                     
                            <Navbar.Brand style={{fontWeight: "BOLD",margin:"20px", color:"#0C2D57"}} href="https://github.com/SENJ01">
                                
                                <img alt="" src="./src/components/Images/github-alt.svg" width="40" height="40"/>
                                {' '}
                                Github</Navbar.Brand>
                            </Card.Body>
                        </Card>
                        <Card className="contact_card"  style={{border:"none", outline:"none"}}>
                            <Card.Body>
                            <Navbar.Brand style={{fontWeight: "BOLD",margin:"20px", color:"#0C2D57"}} href="https://www.instagram.com/senuvi_j/?igsh=dGtsdDdsbmQ1YzR4&utm_source=qr"><img
                                alt=""
                                src="./src/components/Images/instagram .svg"
                                width="40"
                                height="40"
                                
                                />{' '}
                                Instagram</Navbar.Brand>
                            </Card.Body>
                        </Card>
                        
                    </div>
        </Col>

        <Col sm={6} className="d-flex justify-content-center align-items-center">
            <Image className="image" src="./src/components/Images/contact.jpg" rounded />
          
        </Col>
        </Row>

        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0" style={{color:"#0C2D57", fontWeight:"400", fontSize:"10px"}}>© 2024 Copyright Senuvi Jayasinghe.</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/senuvi-jayasinghe-414513256/"><img alt="" src="./src/components/Images/linkedin.svg" width="20" height="20"/></a></li>
            <li class="ms-3"><a class="text-muted" href="https://github.com/SENJ01"><img alt="" src="./src/components/Images/github-alt.svg" width="20" height="20"/></a></li>
            <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/senuvi_j/?igsh=dGtsdDdsbmQ1YzR4&utm_source=qr"><img alt="" src="./src/components/Images/instagram .svg" width="20" height="20"/></a></li>
            </ul>
        </footer>
        </div>
        </Container>
       
    );
}

export default Contact;

