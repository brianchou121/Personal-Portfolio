import React, {Component, Link} from "react";
import "./main.css";
import {Button, Nav} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import MainPic from "../img/main.jpg";
import SignaturePic from "../img/signature.png";
import Resume from "../files/Brian Chou Resume.pdf";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-text">

                    <Nav className="main-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {/* <Link href={About}>About</Nav.Link> */}
                        <Nav.Link href={Resume} target="_blank">Resume</Nav.Link>
                    </Nav>
                    
                    <h5>yello! I'm</h5>
                    <div className="main-sub-text">
                        <h2>Brian Chou</h2>
                        <h3>
                            <Typewriter options={{
                                strings: ['a <b>developer.</b>', 'an <b>adventurer.</b>'],
                                autoStart: true,
                                loop: true,
                            }}/> 
                        </h3>
                        <h4>and my journey has just begun...</h4>
                        <p> Growing up in the bay area has exposed me to the countless positive impacts
                            technology has made on our communities and its potential to do stuff. I love to
                            problem solve, create new things, eat, not do work. I am excited to get out there
                            and help change the way we live for the better.
                        </p>
                        <br></br>
                        <p>Sincerely,</p>
                        <img className="signature" src={SignaturePic} alt="Brian Chou"></img>
                    </div>
                </div>

                {/* <Button>What I've Been Up To</Button> */}
                <div className="main-pic-filter"></div>
                <img className="main-pic" src={MainPic}></img>
                <div className="main-pic-filter"></div>
            </div>
        )
    }
}

export default Main