import React, {Component} from "react";
import "./experience.css";
import {Row, Col, Button} from 'react-bootstrap';
import AmazonLogo from '../img/amazon-logo.png';
import BarclaysLogo from '../img/barclays-logo.png';
// import ASILogo from '../img/asi-logo.png';

class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <h4><bold>Work Experience</bold></h4>
                <h5>Where I've worked at!</h5>
                <Row>
                    <Col md={6}>
                        <div className="experience-box">
                            <div className="experience-box-text amazon-theme">
                                <h4><b>Amazon Web Services</b></h4>
                                <h5>Software Developer Engineer Intern</h5>
                                <p> Worked on the AWS Kinesis Team and 
                                    Implemented features to the Kinesis Data
                                    Analytics Console.
                                </p>
                            </div>
                            <div className="experience-logo-box">
                                <img className="experience-logo" src={AmazonLogo}></img>
                            </div>
                        </div>  
                    </Col>
                    <Col md={6}>
                        <div className="experience-box">
                            <div className="experience-box-text barclays-theme">
                                <h4><b>Barclays Investment Bank</b></h4>
                                <h5>Software Engineer Intern</h5>
                                <p> Worked on Specialized Infrastructure Team
                                    and built applications to run tests on high
                                    frequency trading servers.
                                </p>
                            </div>
                            <div className="experience-logo-box">
                                <img className="experience-logo" src={BarclaysLogo}></img>
                            </div>
                        </div>  
                    </Col>

                    <Col md={6}>
                        <div className="experience-box">
                            <div className="experience-box-text asi-theme">
                                <h4><b>ASI Corporation</b></h4>
                                <h5>Web Developer Intern</h5>
                                <p> Worked on NSI E-commerce Team and
                                    wrote a program to load and map products
                                    to unify company-wide inventory access.
                                </p>
                            </div>
                            <div className="experience-logo-box">
                                <img className="experience-logo" src={AmazonLogo}></img>
                            </div>
                        </div>  
                    </Col>

                </Row>
                
            </div>
        )
    }
}

export default Experience