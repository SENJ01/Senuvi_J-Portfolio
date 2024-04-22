import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AboutMe(){
    return(
        <Container>
        <Row style={{margin:"80px"}}>

        <Col sm={6} className="d-flex justify-content-center align-items-center">
            <Image className="about_image" src="./src/components/Images/Aboutme.png" rounded />
          
        </Col>
        <Col sm={6} className="d-flex justify-content-center align-items-center" style={{height:"450px"}}>
        <Card className="aboutme_card" style={{border:"none", outline:"none"}}>
            <Card.Body>
                <Card.Title style={{color:"#0C2D57",fontSize:"36px",fontWeight:"600"}}>Hi, It's <span style={{ color:"#ff9933"}}>Senuvi</span> here.</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text style={{color:"#0C2D57", fontSize:"14px",fontWeight:"500"}}>
                A Computer Science student with a keen interest in UI/UX design and Front end web development. 
                Currently pursuing a BSc (Hons) in Computer Science at University of Westminster. I'm driven by
                 innovation and problem-solving. With a knack for blending technology with user-centric design. 
                 I'm excited to leverage my skills to craft seamless and engaging experiences.
                </Card.Text>
                <Button variant="primary" style={{backgroundColor: "#ff9933",color: "#0C2D57", borderRadius: "30px", width:"150px", height:"40px", 
                         border:"none", fontFamily:"montserrat", fontSize:"15px",  fontWeight:"bold"}} 
                         href="https://www.linkedin.com/in/senuvi-jayasinghe-414513256/">Contact me</Button> 
            </Card.Body>
            </Card>
        </Col>
        </Row>

        <h1 className="aboutme-heading">Education</h1>
        <div className="col-md-12" style={{margin:"20px 80px 5px"}}> {/* Add margin between cards */}
            <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>
                            
                            <Card.Body>
                                <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>G.C.E Advanced Level - Physical Science Stream </Card.Title>
                                <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>G.C.E Ordinary Level - 9A's </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Visakha Vidyalaya</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>  
                            <Card.Body>
                            <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>Bsc Computer Science (2022 - Present)</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Informatics Institute of Technology (IIT) affiliated with University of Westminster - UK</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>


                    <h1 className="aboutme-heading">Certification</h1>
                    <div className="col-md-12" style={{margin:"20px 80px 80px"}}> {/* Add margin between cards */}
                        <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>
                                        
                                        <Card.Body>
                                            <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>Preview Agile User Experience Design and Research </Card.Title>
                                            
                                            <Card.Subtitle className="mb-2 text-muted">Linkedin</Card.Subtitle>
                                            <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.linkedin.com/learning/certificates/efdf518cf2a306d28bb57dced01787c250684dfc33cfd9a4b7c55800fef7b1a6">Show credential</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>  
                                        
                                    <Card.Body>
                                            <Card.Title style={{fontWeight:"bold" ,color: "#0C2D57"}}>UX Research: Lean Experimentation</Card.Title>
                                            
                                            <Card.Subtitle className="mb-2 text-muted">Linkedin</Card.Subtitle>
                                            <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.linkedin.com/learning/certificates/391a274403975e1dcce971cfff0297c240890b3f237a738685c272cfd01174e6">Show credential</Card.Link>
                                        </Card.Body>
                                    </Card>

                                    <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>  
                                        
                                    <Card.Body>
                                            <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>Web Design for Beginners</Card.Title>
                                            
                                            <Card.Subtitle className="mb-2 text-muted">University of Moratuwa</Card.Subtitle>
                                            <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php">Show credential</Card.Link>
                                        </Card.Body>
                                    </Card>


                                    <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>  
                                        
                                    <Card.Body>
                                            <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>Using Style Guides to Bridge Design and Development</Card.Title>
                                            
                                            <Card.Subtitle className="mb-2 text-muted">Linkedin</Card.Subtitle>
                                            <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.linkedin.com/learning/certificates/1e3fe5a6ded7b0a756897bdd0f9419c96a8dfb948db578e5f95c4951e8a8f6d8">Show credential</Card.Link>
                                        </Card.Body>
                                    </Card>

                                    <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>  
                                        
                                    <Card.Body>
                                            <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>IEEEXtreme 17.0 Programming Competition</Card.Title>
                                            
                                            <Card.Subtitle className="mb-2 text-muted">IEEE</Card.Subtitle>
                                            <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://certificate.ieeextreme.org/generate-email-certificate/QoQZ8rOhVY8KhxK">Show credential</Card.Link>
                                        </Card.Body>
                                    </Card>

                                    <Card className="aboutme_des"  style={{border:"none", outline:"none"}}>  
                                        
                                    <Card.Body>
                                            <Card.Title style={{fontWeight:"bold", color: "#0C2D57"}}>User Experience for Web Design</Card.Title>
                                            
                                            <Card.Subtitle className="mb-2 text-muted">Linkedin</Card.Subtitle>
                                            <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.linkedin.com/learning/certificates/249c8d3703963d3aa456f2d4017e846892e4d7ebe0b722329ff1cfeeac2fb7a6">Show credential</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>


                                                            
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

export default AboutMe;