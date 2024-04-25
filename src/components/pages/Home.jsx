import React from "react";
import '../css/Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from "../Images/4.webp";
import image2 from "../Images/5_1.webp";
import image3 from "../Images/7.webp";
import image9 from "../Images/portfolio.webp";
import image5 from "../Images/linkedin.webp";
import image6 from "../Images/github-alt.webp";
import image7 from "../Images/instagram-.webp";

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardLink,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  


function Testing(){
    return(
        <section className="section">

        
<div className="Home-hero">
                    <div className="col-md-12 text-center">
                        <h1 className="main-heading">Hi, I'm Senuvi!</h1>
                        <h1 className="main-heading first-heading">Computer Science Undergraduate</h1>
                        <h2 className="main-heading second-heading">Computer Science Undergraduate</h2>

                        <p className="main-body">I’m interested in UI/UX design and Front end web development and driven by innovation
                         and problem-solving with a knack for blending technology with user-centric design.</p>

                         <Button variant="primary" style={{backgroundColor: "#ff9933",color: "#0C2D57", borderRadius: "30px", margin:"10px", width:"150px",
                         border:"none", fontFamily:"montserrat", fontSize:"20px",  fontWeight:"bold"}} 
                         href="https://www.linkedin.com/in/senuvi-jayasinghe-414513256/">Let's chat</Button>  
                    </div>
                </div>
                {/* <hr className="hr hr-blurry" /> */}
                
            <h1 className="project-heading">Projects</h1>
            {/* <h3 className="project-subheading">UI Designs</h3>  */}
             <MDBRow className='row-cols-1 row-cols-md-2 g-4 project-col'>
                <MDBCol>
                <MDBCard className="card">
                <a href="https://www.figma.com/file/gtC73iMjTNYF0OESKTJiZp/UI%2FUX-Portfolio?type=design&node-id=12%3A2&mode=design&t=FnHBkxaxZXiiS331-1" target="_blank" rel="noopener noreferrer">
                <MDBCardImage
                    src={image9}
                    alt='...'
                    position='top'
                />
                </a>
                
                <MDBCardBody>
                    <MDBCardTitle className="project-des">Portfolio Website</MDBCardTitle>
                    {/* <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    </MDBCardText> */}
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard className="card">
            <a href="https://www.figma.com/file/LAiqAojHVT9xcNFRA9gCkz/RevolUX?type=design&node-id=0%3A1&mode=design&t=ge2bQLo9LcW5VT6g-1" target="_blank" rel="noopener noreferrer">
                <MDBCardImage
                    src={image2}
                    alt='...'
                    position='top'
                />
                </a>
                
                <MDBCardBody>
                    <MDBCardTitle className="project-des">BIT LEARN - Cryptocurrency Learning Application</MDBCardTitle>
                    {/* <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    </MDBCardText> */}
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard className="card">
            <a href="https://www.figma.com/file/NshEau6BrO6uVld9NHiQqE/Website?type=design&node-id=167-1424&mode=design" target="_blank" rel="noopener noreferrer">
                <MDBCardImage
                    src={image3}
                    alt='...'
                    position='top'
                />
                </a>
                
                <MDBCardBody>
                    <MDBCardTitle className="project-des">3D Food Printing Mobile Application</MDBCardTitle>
                    {/* <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    </MDBCardText> */}
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard className="card">
                <a href="https://www.figma.com/file/NshEau6BrO6uVld9NHiQqE/Website?type=design&node-id=83-176&mode=design" target="_blank" rel="noopener noreferrer">
                <MDBCardImage
                    src={image1}
                    alt='...'
                    position='top'
                />
                </a>
                
                <MDBCardBody>
                    <MDBCardTitle className="project-des">Ezthara Hair Miracle - Redesigned the UI of Ezthara</MDBCardTitle>
                    {/* <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    </MDBCardText> */}
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
                  
        

                
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0" style={{color:"#0C2D57", fontWeight:"400", fontSize:"10px"}}>© 2024 Copyright Senuvi Jayasinghe.</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/senuvi-jayasinghe-414513256/"><img alt="" src={image5} width="20" height="20"/></a></li>
            <li class="ms-3"><a class="text-muted" href="https://github.com/SENJ01"><img alt="" src={image6} width="20" height="20"/></a></li>
            <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/senuvi_j/?igsh=dGtsdDdsbmQ1YzR4&utm_source=qr"><img alt="" src={image7} width="20" height="20"/></a></li>
            </ul>
        </footer>
        </div>
      </section>
    );
}

export default Testing;