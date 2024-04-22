import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from "../Images/4.png";
import image2 from "../Images/5.png";
import image3 from "../Images/7.png";


function Home(){
    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Hi, I'm Senuvi!</h3>
                        <h3 className="main-heading">Computer Science Undergraduate</h3>
                        <p className="main-body">I’m interested in UI/UX design and Front end web development and driven by innovation and problem-solving
                         with a knack for blending technology with user-centric design</p>

                         <Button variant="primary" style={{backgroundColor: "#ff9933",color: "#0C2D57", borderRadius: "30px", margin:"10px", width:"150px", height:"50px", 
                         border:"none", fontFamily:"montserrat", fontSize:"20px",  fontWeight:"bold"}} 
                         href="https://www.linkedin.com/in/senuvi-jayasinghe-414513256/">Let's chat</Button>  
                    </div>
                </div>
            

                {/* New Projects Section */}
                <h1 className="project-heading">Projects</h1> {/* Updated heading */}
                <div className="row projects justify-content-center"> {/* Center align the cards */}
                    <div className="col-md-12"> {/* Add margin between cards */}
                        <Card className="project-card" style={{border:"none", outline:"none"}}>
                            <Card.Img variant="top" src={image1} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:"bold", marginTop:"20px", color: "#0C2D57"}}>Ezthara Hair Miracle - Redesigned the UI of Ezthara</Card.Title>
                                <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.figma.com/file/NshEau6BrO6uVld9NHiQqE/Website?type=design&node-id=83-176&mode=design">See more..</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="project-card" style={{border:"none", outline:"none"}}>
                            <Card.Img variant="top" src={image2}  />
                            <Card.Body>
                                <Card.Title style={{fontWeight:"bold", marginTop:"20px", color: "#0C2D57"}}>BIT LEARN - Cryptocurrency Learning Application</Card.Title>
                                <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.figma.com/file/LAiqAojHVT9xcNFRA9gCkz/RevolUX?type=design&node-id=0%3A1&mode=design&t=ge2bQLo9LcW5VT6g-1">See more..</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card className="project-card" style={{border:"none", outline:"none"}}>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title style={{fontWeight:"bold", marginTop:"20px", color: "#0C2D57"}}>3D Food Printing Mobile Application</Card.Title>
                                <Card.Link style={{textDecoration:"none", fontWeight:"500", fontSize:"15px", color:"#ff9933"}} href="https://www.figma.com/file/NshEau6BrO6uVld9NHiQqE/Website?type=design&node-id=167-1424&mode=design">See more..</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                  
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
      </section>
    );
}

export default Home;